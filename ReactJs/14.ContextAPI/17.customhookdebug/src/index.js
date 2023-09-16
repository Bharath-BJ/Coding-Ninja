import { createRoot } from "react-dom/client";

import App from "./AppRoot";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);

/*Custom Hook Debug
Send Feedback
Debug the react app to fix issues with rendering and custom hooks.
The Dialecto app has been refactored to use custom providers and hooks, but the components are not rendering and the custom hooks are not working as expected.
Debug the app to fix these issues.

Bugs were props.children not declared and getValue employed instead of useValue for custom hooks
 */