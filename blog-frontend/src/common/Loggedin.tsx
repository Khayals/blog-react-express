import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {Login, Signup} from "../user";
import { Layout, notification } from 'antd';
const { Content } = Layout;

const Loggedin = () => {
    return (
        <div>
            <h1>Content</h1>
        </div>
    )
}

export default Loggedin
