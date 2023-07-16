import { ChakraProvider, theme } from "@chakra-ui/react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Html5QrcodePlugin from "./pages/QrScanner";
import "regenerator-runtime";
import Chat from "./pages/Chat";
import "./App.css";

const App = () => {
  const onNewScanResult = (decodedText, decodedResult) => {
    console.log(decodedText, decodedResult);
  };
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
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
            }
          />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
