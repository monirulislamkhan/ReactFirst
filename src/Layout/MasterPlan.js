import Header from '../Component/Header';
import Footer from '../Component/Footer';
import "@fancyapps/ui/dist/fancybox.esm";
import "@fancyapps/ui/dist/fancybox.css";
import { DecisionCorner } from '../Component/DecisionCorner';

const MasterPlan = () => {
  return (
    <>
      <Header />
      <section className="inner_bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>{`Master Plan -  ${window.name} Sector 108`}</h1>
              <div className="locality">
                <a href="images/sobha-city-master-plan.jpg" data-fancybox="gallery" data-caption={`Master Plan - ${window.name} `}>
                  <img src="images/sobha-city-master-plan.jpg" className="img-fluid" alt={`Master Plan - ${window.name} `} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <DecisionCorner />
      <Footer />
    </>
  )
}
export default MasterPlan;
