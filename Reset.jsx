import React,{Component} from 'react';
import axios from 'axios';

class Reset extends Component {

  constructor(props) {
    super(props);

    this.onChangePassword=this.onChangePassword.bind(this);
    this.onChangePassword2=this.onChangePassword2.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);

    this.state={
      password:'',
      password2:''
    }
  }

  onChangePassword(e){
    this.setState({
      password:e.target.value
    })
  }

  onChangePassword2(e){
    this.setState({
      password2:e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();

    const p1=this.state.password;
    const p2=this.state.password2;

    if(p1 === p2){
      const password={
        password:p1
      }

      console.log(password);

      axios.post("http://localhost:3000/reset/"+this.props.match.params.id, password)
        .then(res => {
          console.log(res.data);
          window.alert("Password Change Successfuly!! Login to Continue. "+ res.data.description);

          window.location='/login';
        })
        .catch(err => {
          console.log(err);
          window.alert("Error!! Might token has been expired");
        })

      // window.location="/";
    }else{

      window.alert("Password does not matches");
    }

    this.setState({
      password:'',
      password2:''
    })

  }

  render(){
    return(
      <div className="box">
        <div className="main-box">
          <form onSubmit={this.handleSubmit}>
            Enter new Password:
            <br /> <br />
            <input
                    type="password"
                    name="password"
                    placeholder="new Password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    required
            />
            <br/> <br />
            Confirm Password:
            <br /> <br />
            <input type="password"
                    name="password2"
                    placeholder="confirm Password"
                    value={this.state.password2}
                    onChange={this.onChangePassword2}
                    required
            />
            <br/> <br />
            <button className="btn" type="submit" name="button" >Submit</button>
          </form>
        </div>
      </div>
    )
  }
}


export default Reset;
