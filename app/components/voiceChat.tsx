"use client";

import React, { useState } from "react";

const VoiceChat = () => {
  const [isRecording, setIsRecording] = useState<boolean>(false);

  return (
    <div className="w-full flex flex-col items-center gap-8">
      <div
        className={`w-full h-screen max-h-[400px] rounded-3xl border p-8 transition-all duration-300 shadow-2xl ${
          isRecording
            ? "border-violet-800 shadow-violet-600/25"
            : "border-gray-800 shadow-white/10"
        }`}
      >
        <h1
          className={`w-full text-md md:text-lg text-center transition-all duration-300 ${
            isRecording ? "text-violet-400" : "text-gray-400"
          }`}
        >
          {isRecording ? "Listening" : "Mic is Off"}
        </h1>
      </div>
      <button
        className={`w-full h-16 rounded-3xl text-white cursor-pointer transition-all shadow-4xl duration-300 hover:bg-violet-700/30 ${
          isRecording
            ? "bg-violet-800 shadow-purple-500/15"
            : "bg-gray-600 shadow-white/10"
        }`}
        onClick={() => setIsRecording(!isRecording)}
      >
        {isRecording ? "Stop Recording" : "Start Recording"}
      </button>
    </div>
  );
};

export default VoiceChat;
