import { ChakraProvider, theme, Flex } from "@chakra-ui/react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import Html5QrcodePlugin from "./pages/QrScanner";
import "regenerator-runtime";
import Chat from "./pages/Chat";
import "./App.css";

const App = () => {
  const onNewScanResult = (decodedText, decodedResult) => {
    console.log(decodedText);
    if (decodedText == "MyPassword") {
      const navigate = useNavigate();
      navigate("/chat");
    }
  };
  return (
    <ChakraProvider theme={theme}>
      <nav
        style={{
          backgroundColor: "red",
          color: "white",
          display: "flex",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <Flex style={{ margin: "auto", fontSize: "24px", fontWeight: "bold" }}>
          <FaPlus
            style={{ fontSize: "24px", marginTop: "8px", marginRight: "10px" }}
          />
          <h1>Medisync</h1>
        </Flex>
      </nav>
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
                    // qrCodeSuccessCallback={onNewScanResult}
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
