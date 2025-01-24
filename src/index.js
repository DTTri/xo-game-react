import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { GameState } from "./context/GameContex";
import { ModalState } from "./context/ModalContext";
import { useState } from "react";
import Mdk from "@interlinklabs/mdk";

const Root = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log("isLoggedIn", isLoggedIn);
  console.log(Mdk);
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLoginFailure = () => {
    //console.error("Login failed");
  };

  return (
    <div>
      {!isLoggedIn ? (
        <Mdk
          appid="id__3d7bfspo6tody9rjzivm"
          onSuccess={handleLoginSuccess}
          onFailure={handleLoginFailure}
        >
          {({ open }) => (
            <div
              style={{
                textAlign: "center",
                marginTop: "20px",
              }}
            >
              <button
                onClick={open}
                style={{
                  padding: "10px 20px",
                  fontSize: "16px",
                }}
              >
                Login to Play XO Game
              </button>
            </div>
          )}
        </Mdk>
      ) : (
        <ModalState>
          <GameState>
            <App />
          </GameState>
        </ModalState>
      )}
    </div>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
