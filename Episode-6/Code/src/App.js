import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "../style.css";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
//import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

//import About from "./components/About";

const styleCard = {
  backgroundColor: "#f0f0f0",
};
//Note --> to wriye inline style we have to pass it as a object

/*_
Q What is a component ?
Ans --> it is just a normal js function which returns JSX CODE
_*/

const Grocery = lazy(() => import("./components/Grocery"));

const About = lazy(() => import("./components/About"));

const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));

const AppLayout = () => {
  console.log(<Body />); // this will be an Normal Javascript Object
  return (
    <div className="app">
      <Header />
      <Outlet />
      {/** if path= "/" then  load Body */}
      {/** if path= "/about" then  load <About/> */}
      {/** if path= "/contact" then  load <Contact/> */}
      {/*to Make the above functionality  we have to make Children ROutes of AppLayOut and we also have to make use of Outlet component  given by react-router-dom so that it will replaced accordingly as per the route */}
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    //This is Children route of AppLayOut children is list of
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "restaurants/:resId",
        element: (
          <Suspense fallback={<h1>Loading </h1>}>
            <RestaurantMenu />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

/**
 What are props in React?
 Ans -->  Props are short form for properties, so these properties are something which can be passed to the componenet If we want to dynamically pass the data to the component we can pass it using props

 As we know know that functional componenet are th JS function which the piece of JSX code Similarly props are like the normal argument to a function


 Q. What is config driven UI?
 --> When we make use of Config Driven UI means It will display the webpage according to the data that we have recieved 
 exaample--> if Swiggy has different offers for different cities so we can't make the whole new pahe for different citites Using data we can display the actual data for particuar city with all the info available for 
 
 QWhat is use to make reusable componeney ?

 --> we can pass the dynamic data

 Q2 .  What is USe of "?." in  js

 --> In JavaScript, the ?. operator, known as the "optional chaining" operator, is used to safely access the properties or methods of an object without causing an error if the property or method does not exist. It is especially useful when working with nested objects or when you're uncertain whether a property or method is defined. The ?. operator essentially performs a check before attempting to access the property or call the method

 its is applicable for arrays and objects 

 Q3 . What is the warning of key prop
 --> whenever we are dispalying the list using map because Js Expects the every item should be unique which be like the id for every item

 But the main reason for this is because it will help the react during the re-rendering the component if new component is added then react will not re-render the whole component it will just add to the existing one 
 but if  did not provide the key then react will re-render the entire component


 */

/**
  When we have to create Route we will have to create Routing Configuratiion

  Q . What is C0nfiguration ?
  --> configuration is the information that will define what will happen on a specific route 
  suppose we are calling the path "/about" so it will twll browser router what will happen when the route is  "/about"

  this is done using createBrowserROuter whis takes the  list of path in the form of object

  Below is the configuration

  const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
  


Once the Configuration is completed we need to provide this configuration to render so we need to import the component called routerProvider from react-router-dom

earlier we use to do  root.render(<AppLayout/>
but now we have to do  root.render(<RouterProvider router={appRouter} />);


React router dom gives us a hook  useRouterError


Note-- Outlet info 

if we need the the component on every page  we can do it in 2 ways normal way isto call componenet on every Page 

but we can do this with the help Outlet component in the Router dom 
for example if we nned the header on every page then
Then firstly we will have to bring all the component inside the children  and in AppLayout keep the Component as it that is needed everytime
and below that write the <outlet/> as a component

Q There are 2 types of Routing inside 

--> Client side Routing --> here we are not making any network calls because all the component  already present in our app since componnents are getting interchanged when we click on a link
--> Server side routing --> Here network call is everytime when navigate between different pages it reload the entire page it takes takes place when we use anchor tag

  */

/**
 --Chunking
 --Code Splitting
 --Dynamic Bundling
 --Lazy Loading
 --on demand loading
 --Dynamic Loading

 All these are nothing but breaking down app into smaller chunks this help to get the code of particular component when it is actually needed 
 In general we do call the code of every file when it is not needed it will hinder the performance of an app

 it is like when the user move to a new page then only get the code of the component 

 for this React gives us the function called lazy which accepts the callBack Function and inside the callBack function we have to call the function called  "import" which accepts the path of the component and this "import" is not the import which we use in general

 When we try to work with lazy our browser will throw error and page will not get loaded(since it will take some time to fetch the data of component) since the react tries to display the page but at the momemt the code is not present Since (componet with lazy will be seperate from main bundle) lazy will call the code at the moment when user clicks till that time react throw error "component Suspended"

 To overcome this React gives a Component "Suspense" to overcome the above error we can wrap a component in Suspense which accepts the attribute/placehoder called Fallback it will tell what should react render when the code is not available
 Fallback will accepts JSX
 */
