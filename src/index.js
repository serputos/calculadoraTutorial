import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Video1 from "./videosRedux/Video1";
import Video2 from "./videosRedux/Video2";
import Video3 from "./videosRedux/video3/Video3";
import Video4 from "./videosRedux/Video4/Video4";

ReactDOM.render(
  <React.StrictMode>
    {/* <Video1 />
        <Video2 />
          <Video3 />
    <App /> */}
    <Video4 />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
