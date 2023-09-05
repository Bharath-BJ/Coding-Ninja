import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />,
  </StrictMode>
);


// Unlike what we know as absolute and relative path, in react absolute starts after the base address
// absolute path - mentioning complete route from parent to last children Eg: /root/list/item1
// relative path - mentioning children path wrt to the parent path Eg: item1
// index:true meaning no more routing wrt to the parent route