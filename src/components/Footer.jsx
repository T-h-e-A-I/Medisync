import { Flex, Input, Button, IconButton } from "@chakra-ui/react";
import { FaMicrophone, FaTrash } from "react-icons/fa";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "regenerator-runtime";
import { useEffect } from "react";

const Footer = ({ inputMessage, setInputMessage, handleSendMessage }) => {
  useEffect(() => startListening, []);
  const startListening = () =>
    SpeechRecognition.startListening({ continuous: false, language: "bn-BD" });
  let { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  const stopListening = () => {
    console.log(transcript);
    SpeechRecognition.stopListening();
    startListening();
  };
  if (!browserSupportsSpeechRecognition) {
    return null;
  }
  const handleClear = () => {
    transcript = "";
  };
  return (
    <Flex w="100%" mt="5">
      <Input
        placeholder="Say Something..."
        border="none"
        borderRadius="none"
        _focus={{
          border: "1px solid black",
        }}
        value={transcript}
        onChange={(e) => setInputMessage(e.target.value)}
      />
      <IconButton
        icon={<FaMicrophone />}
        onClick={() => {
          SpeechRecognition.stopListening();
          startListening();
          setInputMessage(transcript);
          handleSendMessage(transcript);
        }}
        aria-label="Microphone Button"
      />
      <IconButton
        icon={<FaTrash />}
        aria-label="Clear"
        onClick={handleClear}
        ml="5px"
      />
    </Flex>
  );
};

export default Footer;
