import { ChakraProvider, theme } from "@chakra-ui/react";
import Html5QrcodePlugin from "./pages/QrScanner";
import Chat from "./pages/Chat";

const App = () => {
  const onNewScanResult = (decodedText, decodedResult) => {
    console.log(decodedText, decodedResult);
  };
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <section className="App-section">
          <br />
          <br />
          <br />
          <Html5QrcodePlugin
            fps={10}
            qrbox={250}
            disableFlip={false}
            qrCodeSuccessCallback={onNewScanResult}
          />
        </section>
      </div>
      <Chat />
    </ChakraProvider>
  );
};

export default App;
