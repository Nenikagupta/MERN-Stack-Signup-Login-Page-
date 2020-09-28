import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';

class Home extends Component {

  constructor(props){
    super(props);

    const name=this.props.match.params.id;
    const truncate_name=name.slice(0,8)+'..';
    this.state={
      username:truncate_name
    }
  }

  componentDidMount(){
    axios.get("http://localhost:3000/isuser/"+this.props.match.params.id)
      .then(res => console.log(res.data))
      .catch(err => {
        window.alert("User not found!! first login");

        window.location="/"
      });
  }

  render(){
    return (
      <div>
        <Header
          username={this.state.username}
        />
        <Footer />
      </div>
    )
  }
}


export default Home;
