import { renderToString } from "react-dom/server";
import App from "./App.jsx";

// Build-time only: renders the page to static HTML so crawlers and link
// scrapers get real markup instead of an empty <div id="root">.
//
// No router wrapper here on purpose — App declares no routes, and BrowserRouter
// emits no DOM of its own, so this markup matches what the client hydrates.
export function render() {
  return renderToString(<App />);
}
