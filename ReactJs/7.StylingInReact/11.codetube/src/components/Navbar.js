import { Component } from "react";

class Navbar extends Component {

  render() {
    console.log("Navbar props",this.props);
    let {cartCount} =this.props;

    return (
      <div className="navbar">
        <img
          src="https://res.cloudinary.com/dl26pbek4/image/upload/v1675072763/code_srz4jx.png"
          alt="logo"
        />
        <div>
          <img
            src="https://res.cloudinary.com/dl26pbek4/image/upload/v1675075232/bag_1_qns6wh.png"
            alt="bag"
          />
          <strong>{cartCount}</strong>
        </div>
      </div>
    );
  }
}

export default Navbar;
