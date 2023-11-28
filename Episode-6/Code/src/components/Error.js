import React from "react";

import { useRouteError } from "react-router-dom";

//useRouteError will give the detailed info of the error occured on our screev it is the hook given by react-router-dom

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>
        Oop's! <br />
        Something Went Wrong
      </h1>
      <h2>
        {err.status} : {err.statusText}
      </h2>
    </div>
  );
};

export default Error;
