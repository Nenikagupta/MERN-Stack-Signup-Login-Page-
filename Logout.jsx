import React,{Component} from "react";
import axios from "axios";

class Logout extends Component {

  componentDidMount(){
    axios.get('http://localhost:3000/logout')
      .then(res => {
        console.log(res.data);
        window.alert(res.data.title);
        window.location="/";
      })
      .catch(err => console.log(err));
  }

  render(){
    return(
      <div></div>
    );
  }

}

export default Logout;
