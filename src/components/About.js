import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
// import React from "react";
// class About extends React.Component {
// OR
class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }

  componentDidMount(){
    // console.log("Parent componentDidMount");
  }

  render() {
    // console.log("Parent render");

    return (
      <div>
        <h1>About</h1>
        <h2>This is about us page</h2>
        {/* <User name={"Kinjal Chauhan(Function)"} location={"Gandhinagar"}/> */}
        <UserClass name={"Kinjal Chauhan(Class)"} location={"Gandhinagar"} />
      </div>
    );
  }
}

/* 
- Parent Constructor
- Parent render

  - First Child Constructor
  - First Child render

  - Second Child Constructor
  - Second Child render

  - First Child componentDidMount
  - Second Child componentDidMount
  
Parent componentDidMount
*/

export default About;
