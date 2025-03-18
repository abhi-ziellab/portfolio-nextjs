"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function AudioCall() {
  const [messages, setMessages] = useState([
    {
      role: "user",
      content: "Hi. How's it going?",
      emotions: [
        { name: "Realization", value: 0.32 },
        { name: "Calmness", value: 0.29 },
        { name: "Disappointment", value: 0.24 },
      ],
    },
    {
      role: "assistant",
      content: "Oh, hey.",
      emotions: [
        { name: "Excitement", value: 0.15 },
        { name: "Distress", value: 0.12 },
        { name: "Surprise (positive)", value: 0.12 },
      ],
    },
    {
      role: "assistant",
      content: "Just hanging in there.",
      emotions: [
        { name: "Amusement", value: 0.15 },
        { name: "Awkwardness", value: 0.13 },
        { name: "Excitement", value: 0.12 },
      ],
    },
    {
      role: "assistant",
      content: "How about you?",
      emotions: [
        { name: "Interest", value: 0.15 },
      ],
    },
  ]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      {/* Simple header with logo */}
      <header className="py-2 border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4">
          <Link href="/" className="text-xl font-medium text-black">
            Manus
          </Link>
        </div>
      </header>

      <div className="flex-1 flex flex-col max-w-3xl mx-auto w-full px-6 py-8">
        {/* Messages */}
        <div className="flex-1 overflow-auto mb-10">
          {messages.map((message, index) => (
            <div key={index} className="mb-10">
              <div className="font-medium text-gray-500 mb-1">
                {message.role === "user" ? "User" : "Assistant"}
              </div>
              <div className="text-lg font-normal mb-3">
                {message.content}
              </div>
              {message.emotions && (
                <div className="flex flex-col space-y-2.5">
                  {message.emotions.map((emotion, emoIndex) => (
                    <div key={emoIndex} className="flex items-center">
                      <div className="w-32 text-sm text-gray-600">
                        {emotion.name}
                      </div>
                      <div className="flex-1 bg-gray-200 h-1.5 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${
                            message.role === "user" 
                              ? "bg-blue-500" 
                              : emotion.name === "Excitement" 
                                ? "bg-yellow-400" 
                                : emotion.name === "Distress" 
                                  ? "bg-green-400" 
                                  : emotion.name === "Surprise (positive)" 
                                    ? "bg-green-400"
                                    : emotion.name === "Amusement"
                                      ? "bg-yellow-400"
                                      : emotion.name === "Awkwardness" 
                                        ? "bg-green-400"
                                        : emotion.name === "Interest"
                                          ? "bg-gray-400"
                                          : "bg-yellow-400"
                          }`}
                          style={{ width: `${emotion.value * 100}%` }}
                        ></div>
                      </div>
                      <div className="ml-2 text-sm text-gray-600 w-10 text-right">
                        {emotion.value.toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Audio controls */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-4">
          <div className="max-w-3xl mx-auto px-6 flex items-center">
            <button className="rounded-full bg-gray-100 w-12 h-12 flex items-center justify-center shadow-sm hover:bg-gray-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </button>
            
            {/* Sound wave visualization */}
            <div className="flex-1 mx-4 h-8 flex items-center justify-center">
              {Array.from({ length: 25 }).map((_, i) => (
                <div 
                  key={i}
                  className="bg-gray-400 w-1 mx-0.5 rounded-full"
                  style={{ 
                    height: `${Math.sin((i + 1) / 3) * 100 * 0.25 + 10}%`,
                    opacity: i % 3 === 0 ? 0.7 : 0.5
                  }}
                ></div>
              ))}
            </div>
            
            <Link 
              href="/" 
              className="px-4 py-2 bg-red-500 text-white rounded-md font-medium hover:bg-red-600 transition-colors flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" />
              </svg>
              End Call
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 