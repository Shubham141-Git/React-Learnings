import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

// const About = () => {
//   return (
//     <div>
//       <User name={"Shubham Satpute (fn)"} />
//       <UserClass name={"Shubham Satpute (class"} />
//     </div>
//   );
// };

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Abouut constructor called");
  }

  componentDidMount() {
    console.log("CompnentDidMount is called of About");
  }

  render() {
    console.log("render called of About");
    return (
      <div>
        <User name={"Shubham Satpute (fn)"} />
        <UserClass name={"Shubham Satpute (class"} />
        <UserClass name={"Elon musk(class"} />
      </div>
    );
  }
}

export default About;

//Note --> when the child is render through parent then firstly the componentDidmount method of  child is called then after th parents ComponentDidMount method is called so here now the UserClass components ComponenetDidMount Method is called then after the  About's componentDidMount method is called
//Inshort we can say that childs component life cycle methods are triggered first and after executing them then parents remaining life cycle methods are executed

//Q what will be the lifecycle when the parent componenet has 2 childeren component
/**
 
-Parent Contructor called
-Parent render called
   --Shubham Contructor
   --Shubham render called
   --shubham componenetdidMount

   --Elon Contructor
   --Elon render called
   --Elon componenetdidMount

-Parent componentDidMount Called

The above one will be wrong

The right wiil be -->

Abouut constructor called
render called of About
  -- Shubham Satpute (classcontructor called
   --Shubham Satpute (classrender called

  --Elon musk(classcontructor called
  --Elon musk(classrender called

    --over here dom manipulation tskes place i.e reconciliation starts here (in a single batch both childrens are uppdated which is optimision of react)
  --Shubham Satpute (classChilds componentDidMount
  --Elon musk(classChilds componentDidMount

About componentDidMount called

Here react will batch the render phase and commit phase
Because  when commit phase starts react tries to update the DOM and dom manipulation is most expensive task so react batches the render phase which makes react fast



 */
