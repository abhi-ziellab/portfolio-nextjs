"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  LiveKitRoom,
  AudioConference,
  ControlBar,
  RoomAudioRenderer,
  GridLayout,
  ParticipantTile,
} from '@livekit/components-react';
import '@livekit/components-styles';

export default function AudioCall() {
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Generate a random user ID for demo purposes
    const userId = `user_${Math.floor(Math.random() * 10000)}`;
    const roomName = "manus-demo-room";
    
    // Fetch token from our API
    const fetchToken = async () => {
      try {
        setIsLoading(true);
        const resp = await fetch(`/api/token?identity=${userId}&room=${roomName}`);
        
        if (!resp.ok) {
          const error = await resp.json();
          throw new Error(error.error || 'Failed to get token');
        }
        
        const { token } = await resp.json();
        setToken(token);
      } catch (e) {
        console.error('Error fetching token:', e);
        setError(e instanceof Error ? e.message : 'Failed to get access token');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchToken();
  }, []);

  // Room connection options
  const roomOptions = {
    adaptiveStream: true,
    dynacast: true,
    publishDefaults: {
      simulcast: true,
      videoCodec: 'vp8' as const,
    },
  };

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
        {error ? (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <p className="text-xl text-red-500">Error: {error}</p>
              <p className="text-sm text-gray-500 mt-2">
                Please refresh the page to try again.
              </p>
              <Link 
                href="/"
                className="mt-4 inline-block px-4 py-2 bg-black text-white rounded-md font-medium hover:bg-gray-800 transition-colors"
              >
                Return to Home
              </Link>
            </div>
          </div>
        ) : isLoading ? (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <p className="text-xl">Connecting to audio call...</p>
              <p className="text-sm text-gray-500 mt-2">
                Setting up your audio session...
              </p>
            </div>
          </div>
        ) : token ? (
          <LiveKitRoom
            token={token}
            serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL || "wss://example.livekit.cloud"}
            options={roomOptions}
            className="h-full"
            onDisconnected={() => {
              window.location.href = '/';
            }}
          >
            {/* Audio renderer handles all the audio playback */}
            <RoomAudioRenderer />
            
            {/* The main audio conference component */}
            <div className="flex-1 flex flex-col">
              <div className="flex-1 mb-4">
                <AudioConference />
              </div>
              
              {/* Control bar with appropriate options for an audio call */}
              <div className="mt-auto">
                <ControlBar 
                  controls={{
                    microphone: true,
                    screenShare: false,
                    camera: false,
                    leave: true
                  }}
                />
              </div>
              
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-500">
                  You are connected to the Manus audio room.
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Note: This is a demo interface. Audio connections require a LiveKit server.
                </p>
              </div>
            </div>
          </LiveKitRoom>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <p className="text-xl">Failed to connect</p>
              <p className="text-sm text-gray-500 mt-2">
                Unable to establish an audio connection.
              </p>
              <Link 
                href="/"
                className="mt-4 inline-block px-4 py-2 bg-black text-white rounded-md font-medium hover:bg-gray-800 transition-colors"
              >
                Return to Home
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 