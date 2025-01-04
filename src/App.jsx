import { RouterProvider } from "react-router-dom";
import AppLayout from "./AppLayout";
import appRouter from "./Routes/AppRouter";
("./Routes/AppRouter");

function App() {
  return (
    <>
      <RouterProvider router={appRouter}>
        <AppLayout />
      </RouterProvider>
    </>
  );
}
export default App;
