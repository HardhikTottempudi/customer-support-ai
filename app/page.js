"use client";
import { Box, Stack, TextField, Button, Typography } from "@mui/material";
import { useState, useEffect } from "react";

export default function Home() {
  const [time, setTime] = useState('');
  useEffect(() => {
    const currentTime = new Date().toLocaleTimeString();
    setTime(currentTime);
  }, []);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: `Hi, I am the HeadStarter support agent. How can I assist you today?`,
      timestamp: new Date().toLocaleTimeString(),
    }
  ]);
  const [message, setMessage] = useState('');

  const sendMessage = async () => {
    const userMessage = { role: "user", content: message, timestamp: new Date().toLocaleTimeString() };
    const newMessages = [...messages, userMessage, { role: "assistant", content: '', timestamp: '' }];
    setMessages(newMessages);
    setMessage('');

    const response = await fetch('/api/chat', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newMessages)
    });

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let result = '';

    reader.read().then(function processText({ done, value }) {
      if (done) {
        return result;
      } else {
        const text = decoder.decode(value || new Int8Array(), { stream: true });

        // Check if the response contains structured data or plain text
        let parsedText = text;
        try {
          const parsedJSON = JSON.parse(text);
          parsedText = parsedJSON.message || parsedJSON.content || parsedText;  // Use the specific content from the response
        } catch (e) {
          // If the text is not JSON, assume it's plain text
        }

        setMessages((messages) => {
          let lastMessage = messages[messages.length - 1];
          let otherMessages = messages.slice(0, messages.length - 1);
          return [
            ...otherMessages,
            {
              ...lastMessage,
              content: lastMessage.content + parsedText,
              timestamp: lastMessage.timestamp || new Date().toLocaleTimeString(),
            },
          ];
        });
        return reader.read().then(processText);
      }
    });
  };

  return (
    <Box
      width='100vw'
      height='100vh'
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      bgcolor='#f5f5f5'
    >
      <Stack
        direction='column'
        width='600px'
        height='700px'
        border='1px solid #ccc'
        borderRadius={2}
        p={2}
        bgcolor='white'
        boxShadow={3}
      >
        <Stack
          direction='column'
          spacing={2}
          flexGrow={1}
          overflow='auto'
          maxHeight='100%'
          sx={{ padding: '8px 16px' }}
        >
          {messages.map((message, index) => (
            <Box
              key={index}
              display='flex'
              flexDirection='column'
              alignItems={
                message.role === 'assistant' ? 'flex-start' : 'flex-end'
              }
            >
              <Typography>
                {time || 'Loading...'} {/* Display 'Loading...' until the time is set */}
              </Typography>
              <Box
                bgcolor={message.role === 'assistant' ? 'primary.main' : 'secondary.main'}
                color='white'
                borderRadius={16}
                p={2}
                maxWidth='80%'
              >
                {message.content.split('\n').map((line, i) => (
                  <Typography key={i} variant='body1'>
                    {line}
                  </Typography>
                ))}
              </Box>
            </Box>
          ))}
        </Stack>
        <Stack direction='row' spacing={2} mt={2}>
          <TextField
            label='Type your message...'
            variant='outlined'
            fullWidth
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          />
          <Button variant='contained' onClick={sendMessage}>
            Send
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
