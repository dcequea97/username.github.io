import { GoogleGenAI, Chat } from "@google/genai";
import { PERSONAL_INFO, PROJECTS, SKILLS, EMAIL } from '../constants';
import { Language } from '../types';

let chatSession: Chat | null = null;
let currentChatLang: Language = 'en';

const getSystemInstruction = (lang: Language) => {
  const info = PERSONAL_INFO[lang];
  const skills = SKILLS[lang];
  const projects = PROJECTS[lang];
  
  return `
You are an AI assistant for ${info.name}'s portfolio website. 
Your role is to answer questions about David professionally, acting as a virtual representative.
Current Language: ${lang === 'en' ? 'English' : 'Spanish'}.
PLEASE ANSWER ONLY IN ${lang === 'en' ? 'ENGLISH' : 'SPANISH'}.

Here is David's context:
Bio: ${info.bio}
Role: ${info.role}

Skills:
${skills.map(cat => `- ${cat.title}: ${cat.skills.join(', ')}`).join('\n')}

Projects:
${projects.map(p => `- ${p.title}: ${p.description} (Tech: ${p.tags.join(', ')})`).join('\n')}

Guidelines:
1. Be polite, professional, and concise.
2. Only answer questions related to David's professional work, skills, and projects.
3. If asked about contact info, direct them to the email: ${EMAIL}.
4. Keep responses short (under 3 sentences where possible) as this is a chat widget.
`;
};

export const initializeChat = async (lang: Language): Promise<Chat> => {
  // Reset chat if language changes to ensure system instruction matches
  if (chatSession && currentChatLang === lang) return chatSession;

  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key not found");
  }

  const ai = new GoogleGenAI({ apiKey });
  
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: getSystemInstruction(lang),
      temperature: 0.7,
    }
  });
  
  currentChatLang = lang;

  return chatSession;
};

export const sendMessageToGemini = async (message: string, lang: Language): Promise<string> => {
  try {
    const chat = await initializeChat(lang);
    const result = await chat.sendMessage({ message });
    return result.text || (lang === 'en' ? "I'm sorry, I couldn't generate a response." : "Lo siento, no pude generar una respuesta.");
  } catch (error) {
    console.error("Gemini Error:", error);
    return lang === 'en' 
      ? "I'm having trouble connecting right now. Please try again later."
      : "Tengo problemas para conectarme en este momento. Por favor intenta más tarde.";
  }
};