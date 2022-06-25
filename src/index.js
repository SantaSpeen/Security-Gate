import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import {ConfigProvider, AdaptivityProvider} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import App from "./app/App";


const root = ReactDOMClient.createRoot(document.getElementById("app"));

 root.render(
        <ConfigProvider locale={"ru"} platform={"ios"} appearance={"dark"}>
            <AdaptivityProvider>
                <App/>
            </AdaptivityProvider>
        </ConfigProvider>
 )