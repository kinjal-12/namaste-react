import React from "react";

class UserClass extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    console.log(this.props.name + "Child Constructor");
    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
        avatar_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt_uA-pyLgNIuehBok9Xfne-MPvY9T0sBEVo6nYAjSggI9eumjaXqzccE&s",
      },
    };
  }

  async componentDidMount() {
    console.log(this.props.name + "Child componentDidMount");
    // API calls
    const data = await fetch("https://api.github.com/users/kinjal-12");
    const json = await data.json();
    console.log(json);

    this.setState({ userInfo: json });
  }

  componentDidUpdate() {
    console.log(this.props.name + "child component did update");
  }

  componentWillUnmount() {
    console.log(this.props.name + "child component will unmount");
  }

  render() {
    // const { name, location } = this.props;
    const { name, location, avatar_url } = this.state.userInfo;
    console.log(this.props.name + "Child render");

    return (
      <div className="user-card">
        <img src={avatar_url} style={{ width: "50px" }}></img>
        <h3>Name: {name}</h3>
        <h3>Location: {location}</h3>
      </div>
    );
  }
}

export default UserClass;

/**
 *
 * --- Mounting Cycle ---
 * Constructor(Dummy)
 * Render(Dummy)
 *      <HTML (Dummy)>
 * ComponentDidMount
 *      <API Call>
 *      <this.setState>
 *
 * --- Update(reconciliation) Cycle ----
 * render(api_data)
 * <HTML (api_data)>
 * ComponentDidUpdate
 *
 *--- Unmounting Cycle ---
 * when going to another page
 */
