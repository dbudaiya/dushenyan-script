import React, { Component } from "react";

class ProfileHeader extends Component {
  render() {
    console.log(this.context);
    return (
      <div>
        <h2>{this.context.name}</h2>
        <h3>{this.context.age}</h3>
      </div>
    );
  }
}

export default ProfileHeader
