import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userinfo: {
        name: "Krutik Khandhadiya",
        location: "Gandhinagar, Gujarat",
        avatar_url: "https://avatars.githubusercontent.com/u/123456789?v=4",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/krutikk");
    const json = await data.json();
    console.log(json);
    this.setState({
      userinfo: json,
    });
  }
  render() {
    return (
      <div className="user-card">
        <img src={this.state.userinfo.avatar_url} />
        <h1>Name : {this.state.userinfo.name} </h1>
        <p>Location : {this.state.userinfo.location}</p>
      </div>
    );
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
  }
}
export default UserClass;

//Parent constructorx
//Parent render
//First Child constructor
//First Child render
//Secocnd Child constructor
//Secocnd Child render
//First Child component DidMount
//Secocnd Child componentDidMount
//Parent componentDidMount
