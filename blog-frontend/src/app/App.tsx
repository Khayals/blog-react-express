import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {Login, Signup} from "../pages/user";
import Loggedin from "../common/Loggedin";
import { Layout, notification } from 'antd';
const { Content } = Layout;

function App() {
  return (
    <Layout style={{height: "100vh"}}>
      <Content className="app-content">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Loggedin} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
            </Switch>
          </BrowserRouter>
      </Content>
    </Layout>
  );
 
}

export default App;
