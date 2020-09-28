import React,{Component} from "react";
import Button from './Button';
import axios from 'axios';

class Login extends Component{
  constructor(props){
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state={
      username:'',
      password:''
    }
  }

  onChangeEmail(e){
    this.setState({
      username:e.target.value
    })
  }

  onChangePassword(e){
    this.setState({
      password:e.target.value
    })
  }

  onSubmit(e){
    e.preventDefault();

    const user={
      username:this.state.username,
      password:this.state.password
    }

    //console.log(user);

    axios.post("http://localhost:3000/login",user)
      .then(res => {
        const name=user.username;
        window.location='/home/'+name;
      })
      .catch(err => {
        window.alert("Username or Password is wrong!!. Try again!!.");
        window.location='/login';
      });

    this.setState({
      username:'',
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
              <section id="login">
                <form onSubmit={this.onSubmit}>
                  Email : <br /> <input type="email" name="username" placeholder="Email Id" value={this.state.username} onChange={this.onChangeEmail} required /> <br /><br />
                  Password: <br /><input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.onChangePassword} required /> <br /><br />
                  <button className="btn" type="submit" name="button" >Signup</button>
                </form>
                <a href="forgot-password">Forgot password?</a>
              </section>
            </div>
          </div>
    )
  }
}


export default Login;
