import React, {Component} from 'react';
import './lectures.css';


class Membership extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  sectionTitle(){
    return(
      <div className="row">
        <div className="col-lg-12 text-center">
            <h2 className="section-heading subpageHeading">Membership</h2>
        </div>
      </div>
    )
  }

  drawLectures(){
    var youtube = <i className="fab fa-youtube"></i>
    var link = <i className="fas fa-external-link-alt"></i>

    var design1 = <div className="singleLectureContainer">
      <div className="singleWebsiteCard">
         <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/hslee/src/images/designs/1.png" alt="projectimage"/>
        <div className="projectText">
          <p><h5>달빛막창</h5></p>
            <p className="bookDescription">
              <strong>로고 디자인</strong><br/>
              달빛막창 로고
            </p>
        </div>
      </div>
    </div>

    var design2 = <div className="singleLectureContainer">
      <div className="singleWebsiteCard">
        <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/hslee/src/images/designs/2.png" alt="projectimage"/>
        <div className="projectText">
          <p><h5>Baby Leopard</h5></p>
            <p className="bookDescription">
            </p>
        </div>
      </div>
    </div>

    var design3 = <div className="singleLectureContainer">
      <div className="singleWebsiteCard">
        <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/hslee/src/images/designs/3.png" alt="projectimage"/>
        <div className="projectText">
          <p><h5>Jung Se Won</h5></p>
            <p className="bookDescription">
            </p>
        </div>
      </div>
    </div>  

    return (
      <div className="websitesContainer">
        {design1}
        {design2}
        {design3}
      </div>
    )
  }

  render() {
    return (
      <section id="lectures" className="animated bounceInDown">
          {this.sectionTitle()}
          {this.drawLectures()}
      </section>
    );
  }
}
  
export default Membership;