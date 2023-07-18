import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import Divider from "../components/Divider";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Messages from "../components/Messages";
import "regenerator-runtime";
let array = "Human: ";
const Chat = () => {
  const [messages, setMessages] = useState([
    {
      from: "computer",
      text: "আমি স্বাস্থ্যবট আপনার চিকিৎসা বিষয়ক Artificial Intelligence সহযোগী। আপনার কী স্বাস্থ্যসেবা প্রয়োজন ?",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = (inputMessage) => {
    if (!inputMessage.trim().length) {
      return;
    }
    const data = inputMessage;
    array += " " + data;
    console.log(array);
    setMessages((old) => [...old, { from: "me", text: data }]);
    setInputMessage("");
    let outputData = "";

    if (messages.length === 1) {
      outputData = "আপনার নাম বলুন?";
    }
    if (messages.length === 3) {
      outputData = "আপনার বয়স কত ?";
    }
    if (messages.length === 5) {
      outputData = "আপনার লক্ষণ গুলো বলুন";
    }
    if (messages.length === 7) {
      outputData = "আরেকটু বিস্তারিত বলুন";
      array += data;
    }
    if (messages.length === 9) {
      outputData = `আপনার লক্ষণ গুলো পরীক্ষা করা হয়েছে আপনার রোগ ${find_disease(
        array
      )} হতে পারে আপনি ${find_med(array)} ওষুধটি সেবন করুন `;
    }
    setTimeout(() => {
      setMessages((old) => [...old, { from: "computer", text: outputData }]);
    }, 1000);
  };

  return (
    <Flex w="100%" h="100vh" justify="center" align="center">
      <Flex w="80%" h="90%" flexDir="column">
        <Header />
        <Divider />
        <Messages messages={messages} />
        <Divider />
        <Footer
          inputMessage={inputMessage}
          setInputMessage={setInputMessage}
          handleSendMessage={handleSendMessage}
        />
      </Flex>
    </Flex>
  );
};

export default Chat;

const find_disease = (array) => {
  if (array.includes("শ্বাসকষ্ট")) {
  } else if (array.includes("কাঁপুনি দিয়ে জ্বর")) {
    return "ডেঙ্গু জ্বর";
  }
  return "ভাইরাল জ্বর";
};
const find_med = (array) => {
  return "প্যারাসিটামল";
};
