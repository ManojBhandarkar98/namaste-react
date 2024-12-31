import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import { createBrowserRouter,RouterProvider } from "react-router-dom";

//react Element
const jsxHeading = (<h1 id="heading">Namaste React using JSX 🚀</h1>);


//React Functional Component
const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>);
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path:"/contact",
        element: <Contact/>
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter} />); 
  //render react component - Component first letter Capital
//root.render(jsxHeading);    //render react Element