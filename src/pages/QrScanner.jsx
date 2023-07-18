import { Html5QrcodeScanner } from "html5-qrcode";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const qrcodeRegionId = "html5qr-code-full-region";

// Creates the configuration object for Html5QrcodeScanner.
const createConfig = (props) => {
  let config = {};
  if (props.fps) {
    config.fps = props.fps;
  }
  if (props.qrbox) {
    config.qrbox = props.qrbox;
  }
  if (props.aspectRatio) {
    config.aspectRatio = props.aspectRatio;
  }
  return config;
};

const Html5QrcodePlugin = (props) => {
  const [isSucsess, setIsSucsess] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    // when component mounts
    const config = createConfig(props);
    const verbose = props.verbose === true;
    // Suceess callback is required.
    // if (!props.qrCodeSuccessCallback) {
    //   throw "qrCodeSuccessCallback is required callback.";
    // }
    const html5QrcodeScanner = new Html5QrcodeScanner(
      qrcodeRegionId,
      config,
      verbose
    );
    const qrCodeSuccessCallback = (decodedText, decodedResult) => {
      console.log(decodedText);
      html5QrcodeScanner.clear();
      setIsSucsess(true);
    };
    html5QrcodeScanner.render(qrCodeSuccessCallback, props.qrCodeErrorCallback);

    // cleanup function when component will unmount
    return () => {
      html5QrcodeScanner.clear().catch((error) => {
        console.error("Failed to clear html5QrcodeScanner. ", error);
      });
    };
  }, []);

  return (
    <>
      <div id={qrcodeRegionId} />
      {isSucsess ? (
        <>
          <div>Logged In Successfully</div>
          <button onClick={() => navigate("/chat")}>Start Chatting</button>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Html5QrcodePlugin;
