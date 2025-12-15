import { GoogleGenAI, Type } from "@google/genai";
import { TripTask } from '../types';

export const generateGrindSchedule = async (syllabusText: string): Promise<TripTask[]> => {
  if (!process.env.API_KEY) {
    console.warn("API Key is missing. Returning mock data.");
    return mockSchedule;
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const prompt = `
      You are the "Assignment Assassin". Analyze the following course syllabus/text and create a "Pre-Trip Grind Schedule".
      Break down the work into 3-5 actionable tasks.
      Assign a "Deadline" (e.g., "Tuesday 8 PM").
      Assign a fun "Travel Reward" for completing the task (e.g., "Unlock Beach Cocktail", "Upgrade to Ocean View").
      
      Input Text: "${syllabusText}"
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING },
              task: { type: Type.STRING },
              deadline: { type: Type.STRING },
              reward: { type: Type.STRING },
              completed: { type: Type.BOOLEAN },
            },
            required: ["id", "task", "deadline", "reward", "completed"],
          },
        },
      },
    });

    if (response.text) {
      return JSON.parse(response.text) as TripTask[];
    }
    return mockSchedule;
  } catch (error) {
    console.error("Gemini AI generation failed:", error);
    return mockSchedule;
  }
};

const mockSchedule: TripTask[] = [
  { id: '1', task: 'Finish Econ Micro-Paper', deadline: 'Tuesday 8:00 PM', reward: 'Free Airport Lounge Access', completed: false },
  { id: '2', task: 'Submit CS101 Algo Project', deadline: 'Wednesday 11:59 PM', reward: 'Unlock Sunset Boat Party', completed: false },
  { id: '3', task: 'Read 3 Chapters of History', deadline: 'Thursday 10:00 AM', reward: 'Upgrade to King Suite', completed: false },
];