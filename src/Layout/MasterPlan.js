import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import { DecisionCorner } from '../Component/DecisionCorner';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';


const images = [
  'images/sobha-city-master-plan.jpg'
];

class MasterPlan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }
  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <>
        <Header />
        <section className="inner_bg">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>{`Location Map -  ${window.name} Sector 108`}</h1>
                <div className="locality">
                  <img src='/images/sobha-city-master-plan.jpg' className="img-fluid" onClick={() => this.setState({ isOpen: true, photoIndex: 0 })} />
                  {/* <Link to="/images/sobha-city-master-plan.jpg" data-fancybox="gallery" data-caption={`Master Plan - ${window.name} `}><img src="images/sobha-city-master-plan.jpg" className="img-fluid" alt={`Master Plan - ${window.name} `} /></Link> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            // nextSrc={images[(photoIndex + 1) % images.length]}
            // prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
        <DecisionCorner />
        <Footer />
      </>
    );
  }
}

export default MasterPlan;
