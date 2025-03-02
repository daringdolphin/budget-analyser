import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';
import { systemPrompt } from '@/lib/system-prompt';

// Configuration
const GEMINI_MODEL = 'gemini-2.0-flash-thinking-exp-01-21';
const DEFAULT_GENERATION_CONFIG = {
  temperature: 0.7,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 65536,
  responseMimeType: 'text/plain',
};


/**
 * Initialize the Gemini AI client
 * @returns The initialized Gemini AI client
 */
function initializeGeminiClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY environment variable is not set');
  }
  
  return new GoogleGenerativeAI(apiKey);
}

/**
 * Create a chat session with Gemini
 * @param userInput The user input to send to Gemini
 * @param history Optional conversation history
 * @returns The response from Gemini
 */
async function createChatSession(userInput: string) {
  try {
    const genAI = initializeGeminiClient();
    
    const model = genAI.getGenerativeModel({
      model: GEMINI_MODEL,
      systemInstruction: systemPrompt(),
    });
    
    const chatSession = model.startChat({
      generationConfig: DEFAULT_GENERATION_CONFIG,
    });
    
    const result = await chatSession.sendMessage(userInput);
    console.log(result.response.text());
    return result.response.text();
  } catch (error) {
    console.error('Error in Gemini chat session:', error);
    throw error;
  }
}

/**
 * POST handler for the test API route
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { input } = body;
    
    if (!input || typeof input !== 'string' || input.trim() === '') {
      return NextResponse.json(
        { error: 'Input is required and must be a non-empty string' },
        { status: 400 }
      );
    }
    
    const response = await createChatSession(input);
    return NextResponse.json({ response });
  } catch (error) {
    console.error('Error in POST handler:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}