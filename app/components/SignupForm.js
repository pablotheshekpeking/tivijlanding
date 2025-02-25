'use client'
import { useState } from 'react';

export default function SignupForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const response = await fetch('../api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }

    setLoading(false);
  };

  return (
    <div className="w-full max-w-md p-6 bg-white bg-opacity-20 rounded-lg backdrop-blur-sm">
      <h2 className="text-xl font-bold text-center mb-4">Join Our Newsletter</h2>
      <p className="text-sm text-center mb-6">Stay updated with our latest content and beauty tips!</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-3 bg-white bg-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 text-white placeholder-white placeholder-opacity-70"
            required
          />
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 px-4 bg-pink-400 hover:bg-pink-500 rounded-lg font-medium transition-all duration-200 disabled:opacity-50"
        >
          {loading ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>

      {status === 'success' && (
        <p className="mt-4 text-sm text-center text-green-300">Thanks for subscribing!</p>
      )}
      {status === 'error' && (
        <p className="mt-4 text-sm text-center text-red-300">Something went wrong. Please try again.</p>
      )}
    </div>
  );
} 