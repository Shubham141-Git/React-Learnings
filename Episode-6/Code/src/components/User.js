import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log("useEffect normal functional");
    //it wont stop when user navigate to different page
    const timer = setInterval(() => {
      console.log("react namste functionallllllllllll");
    }, 1000);

    //note---> to unmoint the things useEffect return the function to unmount the things

    return () => {
      console.log("useeffect return functional");
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {}, []);
  async function getUserInfo() {}
  return (
    <div className="user-card">
      <div>
        <h2>Count = {count}</h2>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increase Count
        </button>
      </div>

      <h2>Count2 = {count2}</h2>
      <h2>Name :{name}</h2>
      <h3>Location : Wardha</h3>
      <h4>Contact : @shubham141</h4>
    </div>
  );
};

export default User;
//

// In react component first of all we load our component  once the component is loaded with basic details then we make the api call and then filled the details if this is not done then we will have to wait till the details are fetched from an apicall and nothing will be shown on screen which is bas user Experience so firstly render component then make an api call
