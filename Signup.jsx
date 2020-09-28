import React,{Component} from "react";
import Button from "./Button";
import axios from 'axios';

class Signup extends Component{
  constructor(props){
    super(props);

    this.onChangefname = this.onChangefname.bind(this);
    this.onChangelname = this.onChangelname.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state={
      fname:'',
      lname:'',
      Email_id:'',
      password:''
    }
  }

  onChangefname(e) {
    this.setState({
      fname: e.target.value
    })
  }

  onChangelname(e){
    this.setState({
      lname:e.target.value
    })
  }

  onChangeEmail(e){
    this.setState({
      Email_id:e.target.value
    })
  }

  onChangePassword(e){
    this.setState({
      password:e.target.value
    })
  }

  onSubmit(e){
    e.preventDefault();

    const newuser={
      fname:this.state.fname,
      lname:this.state.lname,
      Email_id:this.state.Email_id,
      password:this.state.password
    }

    //console.log(newuser);

    axios.post('http://localhost:3000/signup', newuser)
      .then(res => {
        //console.log(res.data);
        window.alert("You have Successfully Registered. Login to Continue!!");
        window.location='/login';
      })
      .catch(err => {
        //console.log(err)
        window.alert("Error!! Try again with different Email Id");

      });

    this.setState({
      fname:'',
      lname:'',
      Email_id:'',
      password:''
    })
  }


  render(){
    return(
          <div className="box">
            <div className="buttons">
              <Button
                href="signup"
                text="Signup"
              />
              <Button
                href="login"
                text="Login"
              />
            </div>
            <div className="main-box">
              <section id="signup">
                <form onSubmit={this.onSubmit}>
                  First Name: <br /> <input type="text" name="fname" placeholder="first name" value={this.state.fname} onChange={this.onChangefname} required /> <br /><br />
                  Last Name: <br /> <input type="text" name="lname" placeholder="last name" value={this.state.lname} onChange={this.onChangelname} required /> <br /><br />
                  Email : <br /> <input type="email" name="Email_id" placeholder="Email Id" value={this.state.Email_id} onChange={this.onChangeEmail} required /> <br /><br />
                  Password: <br /><input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.onChangePassword} required /> <br /><br />
                  <button className="btn" type="submit" name="button" >Signup</button>
                </form>
              </section>
            </div>
          </div>
    )
  }
}


export default Signup;
