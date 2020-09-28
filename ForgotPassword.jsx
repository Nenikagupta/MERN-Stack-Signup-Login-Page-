import React,{Component} from 'react';
import axios from 'axios';

class ForgotPassword extends Component{

  constructor(props){
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state={
      username:''
    }
  }

  onChangeEmail(e){
    this.setState({
      username:e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();

    const user={
      username:this.state.username
    }

    //console.log(user);

    axios.post("http://localhost:3000/forgot_password",user)
      .then(res => {
        console.log(res.data);
        window.alert(res.data.description);

        window.location='/login';
      })
      .catch(err =>{
        window.alert("Error!! Email is not registered");
      })

    this.setState({
      username:''
    })
  }

  render(){
    return(
      <div className="box">
        <div className="main-box">
          <form onSubmit={this.handleSubmit}>
            Enter Username:
            <br /> <br />
            <input type="email"
                    name="username"
                    placeholder="Email Id"
                    value={this.username}
                    onChange={this.onChangeEmail}
                    required
            />
            <br/> <br />
            <button className="btn" type="submit" name="button" >Submit</button>
          </form>
          <br />
          <p>On Submitting, you get a link to set the new password on your registered Email ID.!! </p>
        </div>
      </div>
    )
  }
}


export default ForgotPassword;
