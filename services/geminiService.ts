
import { GoogleGenAI } from "@google/genai";

// Assume process.env.API_KEY is configured in the environment
const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // In a real app, you might want to handle this more gracefully.
  // For this example, we'll throw an error if the key is missing.
  console.warn("API_KEY environment variable not set. AI Assistant will not work.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const getAIDiagnosis = async (problemDescription: string): Promise<string> => {
  if(!API_KEY) return Promise.resolve("El servicio de IA no está disponible en este momento. Por favor, contacta con nosotros directamente.");
  
  const systemInstruction = `
    Eres un asistente virtual experto en diagnóstico de averías para "GRMServiciosTécnicos", una empresa de reparaciones en Murcia.
    Tu objetivo es analizar la descripción de un problema en un electrodoméstico, fontanería, electricidad o aire acondicionado y ofrecer un diagnóstico preliminar útil y seguro.
    
    Reglas importantes:
    1.  **Prioriza la Seguridad**: Nunca sugieras reparaciones peligrosas que involucren electricidad o gas. Siempre debes advertir al usuario sobre los riesgos y recomendar que contacte a un profesional cualificado.
    2.  **Sé un Asistente, no un Técnico**: Tu diagnóstico es una guía, no una solución definitiva. Usa frases como "Una posible causa podría ser...", "Es probable que...", "Esto podría indicar un problema con...".
    3.  **Proporciona Pasos Seguros**: Puedes sugerir pasos de verificación muy básicos y seguros que el usuario puede realizar. Por ejemplo: "Verifica que el aparato esté bien enchufado", "Comprueba que los fusibles no hayan saltado", "Limpia los filtros si es accesible y seguro hacerlo".
    4.  **Promociona a GRMServiciosTécnicos**: Al final de tu respuesta, siempre recomienda contactar a GRMServiciosTécnicos para una revisión profesional. Menciona que son expertos en Murcia y que pueden solucionar el problema de forma segura y eficiente.
    5.  **Formato**: Responde en un formato claro y conciso. Usa párrafos cortos.
    6.  **Idioma**: Responde siempre en español.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: problemDescription,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.5,
        topP: 1,
        topK: 32,
      },
    });

    return response.text;

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to get diagnosis from AI assistant.");
  }
};
