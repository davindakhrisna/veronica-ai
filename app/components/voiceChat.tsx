"use client";

import React, { useState, useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const VoiceChat = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [languageText, setLanguageText] = useState("id-ID");
  const { transcript, listening, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  const toggleLanguage = () => {
    if (listening) {
      alert("Please Stop your Microphone first!");
    } else {
      if (languageText === "id-ID") {
        setLanguageText("en-US");
      } else {
        setLanguageText("id-ID");
      }
    }
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleSpeech = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening({
        continuous: true,
        language: languageText,
      });
    }
  };

  if (!isMounted) {
    return (
      <div className="w-full flex flex-col items-center gap-8">
        <div className="w-full flex flex-col justify-between items-center h-screen max-h-[400px] rounded-3xl border p-8 border-gray-800 shadow-white/10">
          <p className="text-gray-400">Loading voice recognition...</p>
        </div>
      </div>
    );
  }

  if (!browserSupportsSpeechRecognition) {
    return (
      <span className="text-red-500">
        Your browser doesn&apos;t support Web Speech API.
      </span>
    );
  }

  return (
    <div className="w-full flex flex-col items-center gap-8">
      <div
        className={`relative w-full flex flex-col justify-between items-center h-screen max-h-[400px] rounded-3xl border p-8 transition-all duration-300 shadow-2xl ${
          listening
            ? "border-violet-800 shadow-violet-600/25"
            : "border-gray-800 shadow-white/10"
        }`}
      >
        <button
          className="absolute px-3 py-2 rounded-2xl right-7 top-6 cursor-pointer border border-white hover:bg-white/10"
          onClick={toggleLanguage}
        >
          {languageText === "id-ID" ? "🇮🇩" : "🇬🇧"}
        </button>
        <h1
          className={`w-full text-md md:text-lg text-center transition-all duration-300 ${
            listening ? "text-violet-400" : "text-gray-400"
          }`}
        >
          {listening ? "Listening" : "Mic is Off"}
        </h1>
        <p className="w-full h-[85%] p-4 rounded-2xl bg-gray-800 text-white text-center text-sm md:text-base overflow-auto">
          {transcript}
        </p>
      </div>

      <button
        className={`w-full h-16 rounded-3xl text-white cursor-pointer transition-all shadow-4xl duration-300 hover:bg-violet-700/30 ${
          listening
            ? "bg-violet-800 shadow-purple-500/15"
            : "bg-gray-600 shadow-white/10"
        }`}
        onClick={toggleSpeech}
      >
        {listening ? "Stop Recording" : "Start Recording"}
      </button>
    </div>
  );
};

export default VoiceChat;
