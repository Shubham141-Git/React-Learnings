import React from "react";

class UserClass extends React.Component {
  //Constructor can be used to access the props and is used to define the state of the componenet

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0,
      userInfo: {
        name: "",
        location: "",
        avatar_url: "",
      },
    };
    console.log(props);
    console.log(this.props.name + "contructor called");
  }

  async componentDidMount() {
    console.log(this.props.name + "Childs componentDidMount");

    const data = await fetch("https://api.github.com/users/Shubham141-git");
    const json = await data.json();
    console.log(json);

    this.setState({ userInfo: json });

    //Note --> when user moves to different pages of application  this setInterval will not stop it run in the background even if the user has switched to different page so to clrar interval we have to use clearinterval in unmounting phase so that it will clear the interval
    this.timer = setInterval(() => {
      console.log("react namste");
    }, 1000);
    //console.log("fgfng");
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.count !== prevState.count ||
      this.state.count2 !== prevState.count2
    ) {
      //do something for the chagednstate
    }

    //this is like sing 2nd useEffect hook for diifrerent api
    if (this.state.name !== prevState.name) {
      //do something for the chagednstate
    }
  }

  componentWillUnmount() {
    //it will be called when we are leaving the page
    clearInterval(this.timer);
    console.log("unmounting");
  }
  //render will return piece of jsx
  render() {
    console.log(this.props.name + "render called");
    //destructing
    //const { name } = this.props;
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        {/* <h2>Count in class = {this.state.count}</h2>
        <button
          onClick={() => {
            //Never update state variablle direct like--> this.state.count= this.state.count+1
            //in class based component react will provide the setState method which contains the object with the values to change its state
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          Increase Count
        </button>
        <h2>Count2 in class = {this.state.count2}</h2> */}
        <img src={avatar_url} />
        <h2>Name :{name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : @shubham141</h4>
      </div>
    );
  }
}
export default UserClass;

//extends  React.Component will tell that this is class based component and react start tracking it

// A class Based componenet is a class which extends react.componenet and has render method which returns piece of jsx

//here React.component is calss from react

//Q.  Why do we need to write super(props) and why we make use of this.props

/**
 * Life cycle method
 * 
 *Mounting-->
 
When a class componnet is instantiated the firstly the constructor is called  and the state variable are created with some default value then te render mthod is called in which the component is loaded with the default state variable value
thne the componnetDidMount will be called  which will make an api call and get the data and the state is updated using this.setState 

Udating Phase-->

Since in Mounting setState is called it triggers the updating the dom  which will again the call the render method with the new data new state variable and then componenetDidUpdate is called and it is called after every update it is loke the dependacy array which make api call on state change

UNmounting Phase -->

When the compnent will dissappear from the dom  then the componentWill UnMount will be called 
component will unmount when we go to new page


Note--> after 1st render componentdidUpdate is called and after every subsequent render componentDidUpdate is called it means it is updated 

in useEffect we use empty dependency array--> it means it will be called only after intial render

Q .why it is array in the dependancy array
--> bacause the in compponentDidUpdate we have  multiple  conditions in if bracket so we have an array list of different conditions

Q. Suppose we have differwnt pi to be called on othwer state change
--> if fucntional componenet we use 2 useEffect but in class based component we have to use 2 if else condition

Q.what is use of componentWillUmount
-->


when the component is mounted then the 
componenetDidMount is called this method is  used to make apiCalls because    once the component is loaded  we need the fetch the details which should be filled  into the components this will make better user Experience      




 */
