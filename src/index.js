import React from "react";
import ReactDOM from "react-dom";
import HeaderBar from "./components/headerBar/HeaderBar";
import CreateForm from "./components/create-form";
import "./index.css";
import "./responsive.css";

const img = "http://www.insiten.com/wp-content/uploads/2017/12/logo_243_50.png";
ReactDOM.render(
  <div>
    <HeaderBar title="Insiten" img={img} />,<CreateForm />
  </div>,
  document.getElementById("root")
);
