import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { UserContextProvider } from "./contexts/Auth";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<UserContextProvider>
		<App />
	</UserContextProvider>
);
