import React from "react";

class UserClass extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    console.log( this.props.name +"Child Constructor");
  }

  componentDidMount(){
    console.log( this.props.name + "Child componentDidMount");
    // API calls
  }

  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;

    console.log( this.props.name  +"Child render");

    return (
      <div className="user-card">
        <h2>Count: {count}</h2>
        <button
          onClick={() => {
            // Never update state variables directly like this.state.count = 3
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase count{" "}
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact: @kinjal.chauhan</h3>
      </div>
    );
  }
}

export default UserClass;
