import React, { useEffect, useState } from "react";

const TextToSpeech = () => {
  //console.log(text);
  //const text = "আমি বাংলায় কথা বলতে পারি।";
  const [utterance, setUtterance] = useState(null);
  const text = "আমি ";
  useEffect(() => {
    const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "bn-BD";
    setUtterance(u);

    return () => {
      synth.cancel();
    };
  }, [text]);

  const handleSpeak = () => {
    if ("speechSynthesis" in window) {
      const synthesis = window.speechSynthesis;

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "bn"; // Set language to Bangla
      utterance.voice = getBanglaVoice(synthesis.getVoices());

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
