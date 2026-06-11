import { createRoot } from "react-dom/client";
import App from "./App";


const reactDesign = App()
const rootDiv = document.getElementById('root')
const rootElement = createRoot(rootDiv)
rootElement.render(reactDesign)