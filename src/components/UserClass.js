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
      <div className="user-card max-w-[250px] mx-auto mt-10 p-6 border border-gray-100 rounded-lg items-center bg-gray-50 shadow-md">
        <img className="w-50" src={this.state.userinfo.avatar_url} />
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
