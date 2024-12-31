import { createBrowserRouter, Outlet } from "react-router-dom";

function AppRouter(){
    
    const appRouter = createBrowserRouter([
        {
            path  :"",
            element:"",
            errorElement: "",
            children:[
                {
                    path: "",
                    element: "",
                },
                {
                    path: "/Home/:homeId",
                    element: "",
                }
            ] 

        }
    ])
    
    
    return <>


    </>
}

export default AppRouter;