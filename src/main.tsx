import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.tsx";

const rootElement = document.getElementById("root")!;
const reactRoot = createRoot(rootElement);

reactRoot.render(<App />);
