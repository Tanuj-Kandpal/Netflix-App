import AppLayout from "./AppLayout";
("./Routes/AppRouter");
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
