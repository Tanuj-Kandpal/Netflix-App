import AppLayout from "./AppLayout";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <AppLayout />
      <Analytics />
    </>
  );
}
export default App;
