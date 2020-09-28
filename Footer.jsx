import React,{Component} from "react";

class Footer extends Component{

  render(){
    return(
      <div>
        <div className="header">
          <div class="container">
            <nav>
              <div class="burger-menu-icon">
                <div class="line-1"></div>
                <div class="line-2"></div>
                <div class="line-3"></div>
              </div>
              <ul class="nav-list">
                <li class="nav-item">
                  <a href="" class="nav-link"></a>
                </li>
                <li class="nav-item">
                  <a href="notes" class="nav-link"><i className="fas fa-note fa-1x"> Make your Notes </i></a>
                </li>
                <li class="nav-item">
                  <a href="tictactoc" class="nav-link"><i className="fas fa-game fa-1x">Tic Tac Toc </i></a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="footer">
          <img id="preview" src="https://picsum.photos/200" alt="abc" />
        </div>
      </div>
    );
  }
}


export default Footer;
