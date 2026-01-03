# 🤖 AI Customer Support Chatbot

An intelligent **AI-powered customer support chatbot** built with Next.js and integrated with Google's Gemini AI or OpenAI. Provides real-time, context-aware responses to customer inquiries with a sleek, modern interface.

## 🌟 Features

- **AI-Powered Responses**: Leverages Google Gemini AI / OpenAI for intelligent conversations
- **Real-time Streaming**: Live response streaming for better user experience
- **Message History**: Maintains conversation context for coherent interactions
- **Timestamps**: Displays message timing for better tracking
- **Responsive UI**: Beautiful Material-UI design that works on all devices
- **Typing Indicators**: Visual feedback during AI response generation
- **Multi-turn Conversations**: Remembers context across multiple messages

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (React 18)
- **AI Integration**: Google Generative AI / OpenAI API
- **UI Library**: Material-UI (MUI) with Emotion
- **Language**: JavaScript (ES6+)
- **API Routes**: Next.js API endpoints for backend logic
- **Streaming**: Response streaming for real-time updates

## 📋 Prerequisites

- Node.js 18.x or higher
- npm/yarn/pnpm/bun
- Google AI API key or OpenAI API key
  - [Get Google AI API Key](https://makersuite.google.com/app/apikey)
  - [Get OpenAI API Key](https://platform.openai.com/api-keys)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/HardhikTottempudi/customer-support-ai.git
   cd customer-support-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   # For Google Gemini AI
   GOOGLE_AI_API_KEY=your_google_api_key_here
   
   # OR for OpenAI
   OPENAI_API_KEY=your_openai_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 💡 How It Works

### User Flow
1. User types a message in the chat interface
2. Message is sent to the Next.js API route (`/api/chat`)
3. API processes the message with conversation history
4. AI generates a response (streamed in real-time)
5. Response appears incrementally in the chat window

### Architecture
```
User Interface (page.js)
    ↓
API Route (/api/chat)
    ↓
AI Provider (Gemini/OpenAI)
    ↓
Streaming Response
    ↓
Real-time UI Update
```

## 📝 API Configuration

Create `app/api/chat/route.js` to handle AI requests:

```javascript
import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
// or
import OpenAI from 'openai';

export async function POST(req) {
  // Handle AI processing
  // Stream responses back to client
}
```

## 🎯 Key Features for Hiring Managers

- **AI Integration**: Demonstrates proficiency with modern AI APIs
- **Full-Stack Development**: Frontend and backend API integration
- **Real-time Systems**: Streaming responses for better UX
- **Modern React**: Next.js 14 App Router with server components
- **State Management**: Complex state handling with React Hooks
- **API Development**: RESTful API design with Next.js routes
- **Error Handling**: Robust error management and user feedback

## 📖 Project Structure

```
customer-support-ai/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.js      # AI chat endpoint
│   ├── page.js              # Chat interface
│   └── layout.js            # Root layout
├── public/                  # Static assets
├── package.json             # Dependencies
└── .env.local              # API keys (not in repo)
```

## 🔧 Technical Highlights

- **Response Streaming**: Uses ReadableStream API for real-time responses
- **Context Management**: Maintains conversation history for coherent dialogue
- **Async Operations**: Proper handling of asynchronous AI API calls
- **Error Boundaries**: Graceful error handling and fallbacks
- **Performance**: Optimized with Next.js server-side capabilities

## 🔮 Future Enhancements

- Add user authentication for personalized support
- Implement conversation history persistence
- Add support for file uploads and screenshots
- Multi-language support
- Sentiment analysis and escalation to human agents
- Integration with ticketing systems
- Voice input/output capabilities
- Analytics dashboard for support metrics

## 💡 Customization

### Change AI System Prompt

Modify the system prompt in `app/api/chat/route.js` to customize the chatbot's personality and knowledge domain:

```javascript
const systemPrompt = "You are a helpful customer support agent for [Your Company]...";
```

### Styling

Customize the appearance by modifying Material-UI theme settings and component styles in `app/page.js`.

## 💡 Best Practices Demonstrated

- Environment variable management for API keys
- Secure API key handling (server-side only)
- Component composition and reusability
- Responsive design principles
- User feedback and loading states
- Clean code architecture

## 🚀 Deployment

Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/HardhikTottempudi/customer-support-ai)

**Important**: Add your API key as an environment variable in Vercel dashboard:
- `GOOGLE_AI_API_KEY` or `OPENAI_API_KEY`

## 📚 Learning Outcomes

This project demonstrates:
- AI API integration (Gemini/OpenAI)
- Next.js API Routes and streaming
- Real-time data handling
- Material-UI component library
- Modern React patterns
- Full-stack JavaScript development
- Production-ready application architecture

## 📝 License

This project is open source and available for educational purposes.

## 👤 Author

**Hardhik Tottempudi**
- GitHub: [@HardhikTottempudi](https://github.com/HardhikTottempudi)
- Portfolio: [hardhiktottempudi.com](https://hardhiktottempudi.com/)

---

*Built with Next.js and AI to demonstrate modern chatbot development and real-time streaming capabilities.*
