import * as React from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/store.ts";
import { Provider } from "react-redux";
import App from './App.tsx';
import './index.css';

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
