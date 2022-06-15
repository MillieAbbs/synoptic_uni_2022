import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import home from "./home/home";
import chatroom from "./chatroom/chatroom";
import Chatbot from "./chatbotpage/chatbot";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={home} />
        <Route exact path="/chat/:roomId" component={chatroom} />
        <Route exact path="/chatbot" component={Chatbot} />
      </Switch>
    </Router>
  );

}

export default App;