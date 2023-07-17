import React, { useEffect, useState } from "react";

const TextToSpeech = ({ text }) => {
  const handleSpeak = () => {
    if ("speechSynthesis" in window) {
      const synthesis = window.speechSynthesis;

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "bn";
      utterance.voice = getBanglaVoice(synthesis.getVoices());
      utterance.rate = 0.8;
      synthesis.speak(utterance);
    } else {
      console.error("Speech synthesis is not supported in this browser.");
    }
  };

  const getBanglaVoice = (voices) => {
    const banglaVoices = voices.filter((voice) => voice.lang === "bn-BD");
    if (banglaVoices.length > 0) {
      return banglaVoices[0];
    }
    // Fallback to default voice
    return voices[0];
  };

  return (
    <div>
      <button onClick={handleSpeak}>Speak</button>
    </div>
  );
};

export default TextToSpeech;
