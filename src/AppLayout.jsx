import App from "./App";
import { Analytics } from "@vercel/analytics/react";
function AppLayout() {
  return (
    <>
      <App />
      <Analytics />
    </>
  );
}

export default AppLayout;
