import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import {ConfigProvider, AdaptivityProvider, WebviewType} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import App from "./app/App";


const root = ReactDOMClient.createRoot(document.getElementById("app"));

 root.render(
        <ConfigProvider locale={"ru"} webviewType={WebviewType.INTERNAL}>
            <AdaptivityProvider>
                <App/>
            </AdaptivityProvider>
        </ConfigProvider>
 )