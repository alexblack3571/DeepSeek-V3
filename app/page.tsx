// app/page.tsx
'use client';
import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post('/api/deepseek', { prompt });
      setResponse(res.data);
    } catch (error) {
      setResponse('Error: Could not reach DeepSeek API.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">DeepSeek Coding Assistant</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask DeepSeek for coding help..."
          className="w-full p-2 border rounded mb-2"
          rows={5}
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
        >
          {loading ? 'Thinking...' : 'Ask DeepSeek'}
        </button>
      </form>
      <div className="mt-4 p-4 bg-gray-100 rounded">
        <strong>DeepSeek Response:</strong>
        <pre className="whitespace-pre-wrap">{response}</pre>
      </div>
    </div>
  );
}