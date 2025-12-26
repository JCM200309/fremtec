
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getSolarAdvice = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: "Eres un experto en energía solar de Fremtec, una empresa líder en Argentina. Respondes preguntas sobre paneles solares, eficiencia energética y beneficios económicos en un tono profesional, amable e informativo. Enfócate en el mercado argentino.",
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Error fetching Gemini response:", error);
    return "Lo siento, hubo un problema al procesar tu consulta. Por favor, intenta de nuevo más tarde.";
  }
};
