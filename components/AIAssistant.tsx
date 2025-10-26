import React, { useState, useEffect } from 'react';
import { getAIDiagnosis } from '../services/geminiService';

interface AIAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ isOpen, onClose }) => {
  const [problem, setProblem] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      // Reset state on close
      setProblem('');
      setDiagnosis('');
      setError('');
      setIsLoading(false);
    }

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  const handleDiagnose = async () => {
    if (!problem.trim()) {
      setError('Por favor, describe el problema de tu electrodoméstico.');
      return;
    }
    setError('');
    setIsLoading(true);
    setDiagnosis('');
    try {
      const result = await getAIDiagnosis(problem);
      setDiagnosis(result);
    } catch (e) {
      setError('Hubo un error al contactar al asistente de IA. Por favor, inténtalo de nuevo más tarde.');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4 transition-opacity duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="ai-assistant-title"
    >
      <div
        className="bg-white p-8 rounded-lg shadow-2xl max-w-2xl w-full relative transform transition-transform duration-300 scale-95"
        onClick={e => e.stopPropagation()}
        style={{ transform: isOpen ? 'scale(1)' : 'scale(0.95)' }}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-neutral-500 hover:text-neutral-800 transition-colors"
          aria-label="Cerrar"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="text-center mb-6">
          <h2 id="ai-assistant-title" className="text-2xl md:text-3xl font-bold text-secondary">Asistente de Diagnóstico con IA</h2>
          <p className="text-md text-neutral-600 mt-2 max-w-xl mx-auto">Describe el problema y nuestra IA te dará una posible causa y los siguientes pasos.</p>
        </div>
        
        <div className="mb-4">
          <label htmlFor="problem-description-modal" className="block text-neutral-700 text-sm font-bold mb-2">
            Describe el problema (ej: "Mi lavadora no desagua y hace un ruido extraño"):
          </label>
          <textarea
            id="problem-description-modal"
            rows={4}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-neutral-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-primary"
            placeholder="Escribe aquí..."
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
            disabled={isLoading}
          ></textarea>
        </div>
        
        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
        
        <div className="flex items-center justify-center">
          <button
            onClick={handleDiagnose}
            disabled={isLoading}
            className="bg-primary hover:opacity-90 text-white font-bold py-3 px-8 rounded-full transition duration-300 disabled:bg-neutral-400 disabled:cursor-not-allowed flex items-center"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Analizando...
              </>
            ) : (
              'Obtener Diagnóstico'
            )}
          </button>
        </div>

        {diagnosis && (
          <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="text-lg font-bold text-primary mb-2">Análisis de la IA:</h3>
            <p className="text-neutral-700 whitespace-pre-wrap">{diagnosis}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIAssistant;