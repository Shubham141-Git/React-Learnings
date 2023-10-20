import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("h1", { id: "heading" }, "Namaste react");

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(parent);
//console.log(parent);

const jsxHeading = <h1 id="shubham">Heading</h1>;
//console.log(jsxHeading);

/**
  How to Create the Script?

  Ans --> In Package.json go to Script and add the required script

  Example--> TO execute the bundler of parcel we always write npx parcel index.html so we can create the script for the same so modify the script accordingly 

  "scripts": {
    "test": "jest"
    "start":"parcel index.html" --> will build the development build
    "build" :"parcel build index.html" --> this will buils the production build
  },

  so here we have added the 
    "start":"parcel index.html" --> this will build the development build
    Now every time we dont have to write npx parcel index.html
    We can just write "npm start" this will  automatically trigger the commant npx parcel index.html and we will get the development build hosted on local

    To Build the production Build --> we have write  parcel build index.html

    Q2. 

    const parent = React.createElement("h1" ,{id:"heading"} , "Namaste react");

Condole.log(parent) --> At the end of day this is an object not an react element


const root = ReactDOM.createRoot(document.getElementById("root")); --> this will create the root for our react App what will happens inside react will happen inside root

root.render(parent);  --> render will take the object created by React.createElement  converts it to an html and push it to the browser and it will replace Everything inside the root

NOTE--> React.creeateElement will not give us an React Element this basically create the Object And When we Render it ON DOM then it becomes the HTML element


Q3 . What is JSX?

Ans --> Firstly JSX is not the part of React... 

const jsxHeading = <h1 id="shubham">Heading</h1> --> this is the way to create  JSX 

NOTE --> JSX is NOT HTML inside Javascript JSX is different than HTML

JSX is HTML-Like Syntax or XML-Like

Way to create ReactElement using REact  ->
    const parent = React.createElement("h1" ,{id:"heading"} , "Namaste react"); -->this code is not developer friendly


    Way to create React element usong jsx -->
    const jsxHeading = <h1 id="shubham">Heading</h1> --> this code is developer friendly.. using this our code looks much cleaner than react.createElement

    Above Both are the Objects

    Is JSX  is a valid javascript-->  no JSX Is not the  javascript and JS Engine Cannot Understand code written in JSX Because JS engine  only 
    understand EcmaScript which the standard JavaScript

    Browser dont Understand the JSX and JS engine cannot Read JSX code
    SO JSX is Transpiled before it goes to JS ENgine then js Engine recieves the code

    Transpiled means converting the code to such a form that browser/JS engine  can understand

Transpilation is done by the package called as "Babel" 


Babel is JavaScript Compilier it takes the JSX and converts  code that browser understands

Basically Babel will Convert <h1 id ="heading">Namaste react</h1> to
 React.createElement("h1" ,{id:"heading"} , "Namaste react")

Q 3 .  Difference between JSX and HTml?

 Ans --> In HTML we  give using class = "htmlCLass"
 where As in Jsx we have to give Class LIke className = "htmlClass"

 SO in JSX we have to follow camel case convention to  write attribute

 Q4 . Single line and Multiple line jsx

 Ans --> if we have to write the jsx im multiple line we will have to write it in Round brackets



                     //REACT COMPONENT

  What is react component?

  Ans --> There 2 ways to Create component

  A. Class based COmponent --> older way
   uses Javascript classes to crete class based component
  B. Functional based Component -->  Newer way
  uses Javascript function to create  functional based component

  Q1. what is react Functional component?

  Ans 
  
  It is just Normal JAvaScript Function which return the JSX code  to Create functional component we need to Write the  first letter in capital letters so that react understand it is a Component


    


 */

//Functional component

const HeadingComponent = () => {
  return <h1 className="heading">Namaste react functional component</h1>;
};

const HeadingComponent2 = () => {
  return (
    <div>
      {element}
      <Title />
      <h1 className="heading">Namaste react functional component</h1>
    </div>
  );
};

//HeadingComponent2 and HeadingComponent both are the same but different ways to write it

//React Element --> Below writtten is the React element

const heading = <h1 className="heading">Namaste react functional component</h1>;

//q2.How to render the ReactComponnent

root.render(<HeadingComponent2 />);

//TO render the react component we have to wrap it inside the angular Bracket

//Q 3 . Suppoese we have n number of react components how to render the new components into existing component?

const Title = () => {
  return <h1>React component 2</h1>;
};

// so to put Title inside the HeadingComponent2 we only have to Pass <Title/> into it

/**
 COMPONENT COMPOSITION
  
 const HeadingComponent2 = () => {
  <div>
    <Title/>

    {Title()} -->this will do the same as  <Title/> here we are calling the function

    <Title></Title> --> Another way to call the Component

  <h1 className="heading">Namaste react functional component</h1>
  </div>
};
 */

// This is also called as componenet composition to compose 2 components into one another

//Q4 . How to put the React element inside the component

const ele = <h5>element inside element</h5>;

const element = (
  <div>
    <h1>This is an React Element</h1>
    {ele} passingelement inside another element
  </div>
);

// Ans --> TO Pass an Element we have to Pass the element inside curly brakets. Curly brackets will help us to execute Any piece of JavaScript code . Whne any component is render it will execute the code inside {}

/**
 
  
 const HeadingComponent2 = () => {
  <div>
  {element} -->Passing an  React element inside the component

  {<h1> Element  </h1>}

  {100+43546} --> can execute js inside {}

    <Title/>  -->PAssing the component inside the component

  <h1 className="heading">Namaste react functional component</h1>
  </div>
};
 */

//Note--> we can poass component inside an element but bad pratice

//We CAn CAll the function inside the curly brackets

//Note --> when ever JSx execute the the code inside curly bracket it wont blindly execute it it will sanitize the code takes care of malicios attacks/injection attacks

//JSX makes our Code Readable
