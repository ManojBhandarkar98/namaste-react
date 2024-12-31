import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import Error from "./src/components/Error";

//react Element
const jsxHeading = (<h1 id="heading">Namaste React using JSX 🚀</h1>);


//React Functional Component
const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Outlet/>
            
        </div>);
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path:"/contact",
                element: <Contact/>
            }
        ],
        errorElement:<Error/>
    }
   
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter} />); 
  //render react component - Component first letter Capital
//root.render(jsxHeading);    //render react Element