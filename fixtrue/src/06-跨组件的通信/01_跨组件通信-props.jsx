import React, { Component } from "react";

class ProfileHeader extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <h3>{this.props.age}</h3>
      </div>
    );
  }
}

class Profile extends Component {
  render() {
    return (
      <div>
        <ProfileHeader {...this.props} />
      </div>
    );
  }
}

export default class App extends Component {
  render() {
        return(
          <div>
            <h4>Profile组件</h4>
            <Profile name={"杜审言"} age={28}/>
          </div>
        );
  }
}
