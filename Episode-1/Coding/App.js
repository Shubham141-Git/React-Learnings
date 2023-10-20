// <!-- Program of hello world using react -->

//Step-1 --> firstly we will create the Tag/ element using React.createElement
//Createelement tekes 3 arguments
//a.what tag u ned to creat , b. an object(in which we can pass attribute to a element like class ,id etc) , c. what we need to put in the tag

//NOTE --> Creating the element is a core thing of React so it comes from 1st CDN link

const head = React.createElement(
  "h1",
  { id: "heading" },
  "this argument is used to put text into the tag"
);

console.log(head); // this will give us the object i.e every element in the rect is object

//Neasted element
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "Child" },
    React.createElement("div", {}, "I am an h1 tag")
  )
);

console.log(parent); // this parent is not an html it is an object

//Sibling example --->  TO make the sibling element  3rd argument of React.createElement accepts the  Array which enable us to crete more siblings

const parent2 = React.createElement(
  "div",
  { id: "parent2" },
  React.createElement("div", { id: "Child2" }, [
    React.createElement("h1", {}, "I am an h1 tag"),

    React.createElement("h2", {}, "I am an h2 tag"),
  ])
);

/**
 
 */

//Step-2 --> we need to put the tag/element inside the root for this we need to tell react that what is the root where we need to render the stuff for this we need to create root inside react
// React need to have a root where it can do all the DOM manipulation

//Note ==> Creating a root and rendering somthing inside it  , it the job of ReactDom which comes from 2nd CDN Link so we use ReactDom.createRoot

const root2 = ReactDOM.createRoot(document.getElementById("root"));

//Step 3 --> now we need to attach the Created element inside the root so render method will attach the Created element in the root. it will basicaly take object(head) convert into h1 tag and put it into DOM

root2.render(parent2);

//Note --> Root.render will replace(not appended) the already existiing element inside the root by the new element  i.e react will take control
//Anything which is outSide the root will not be replaced  it will be as it is
//Note --> React was built with the intention that we want to manipulate the Dom using JS since it is (DOM manipulation i.e DOM nodes need to be manipulated) mostly costly operation

/**
 How do we crate the nested element using react
 <div id ="parent">
    <div id = "Child">
       <h1>Neasted Element</h1>
    </div>
 </div>

 const parent =React.createElement("div" , {id:"parent"} , 
 React.createElement("div" , {id:"Child"} , 
 React.createElement("h1" , {},"I am an h1 tag")))

 React.CreateElement  --> will not create  us an HTML it will  give us an oject and this React object \is converted into an HTML when it is rendering to Dom

 2 . how to create the sibling
  <div id ="parent">
    <div id = "Child">
       <h1>Neasted Element</h1>
       <h1> Sibling</h1>
    </div>

    TO make the sibling element  3rd argument of React.createElement accepts the  Array which enable us to crete more siblings


     const parent =React.createElement("div" , {id:"parent"} , 
 React.createElement("div" , {id:"Child"} ,[

  React.createElement("h1" , {},"I am an h1 tag");

   React.createElement("h2" , {},"I am an h2 tag");

 ] 
 ))

 </div>



 */
