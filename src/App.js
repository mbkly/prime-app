import logo from "./logo.svg";
import "./App.css";

import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Toast } from "primereact";

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import { useRef, useState } from "react";

function App() {
  const { text, setText } = useState("");
  const toastRef = useRef();
  const onButtonClick = () => {
    if (text)
      toastRef.current.show({
        severity: "info",
        summary: "success",
        detail: "text",
      });
    else
      toastRef.current.show({
        severity: "error",
        summary: "Error",
        detail: "Value is required",
      });
  };

  return (
    <div className="App">
      <Toast ref={toastRef} />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <span className="p-float-label">
          <InputText
            id="input-txt"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <label htmlFor="input-txt">Name</label>
        </span>
        <br />
        <Button
          type="button"
          label="Submit"
          icon="pi pi-check"
          onClick={onButtonClick}
        ></Button>
      </header>
    </div>
  );
}

export default App;
