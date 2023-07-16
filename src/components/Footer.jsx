import { Flex, Input, Button } from "@chakra-ui/react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "regenerator-runtime";
import { useEffect, useState } from "react";

const Footer = ({ inputMessage, setInputMessage, handleSendMessage }) => {
  useEffect(() => startListening, []);
  const startListening = () =>
    SpeechRecognition.startListening({ continuous: false, language: "bn-BD" });
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();
  const stopListening = () => {
    console.log(transcript);
    SpeechRecognition.stopListening();
    startListening();
  };
  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <Flex w="100%" mt="5">
      <Input
        placeholder="Type Something..."
        border="none"
        borderRadius="none"
        _focus={{
          border: "1px solid black",
        }}
        value={transcript}
        onChange={(e) => setInputMessage(e.target.value)}
      />
      <Button
        bg="black"
        color="white"
        borderRadius="none"
        _hover={{
          bg: "white",
          color: "black",
          border: "1px solid black",
        }}
        disabled={inputMessage.trim().length <= 0}
        onClick={() => {
          SpeechRecognition.stopListening();
          startListening();
          setInputMessage(transcript);
          handleSendMessage(transcript);
        }}
      >
        Send
      </Button>
    </Flex>
  );
};

export default Footer;
