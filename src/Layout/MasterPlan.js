import { Helmet } from 'react-helmet';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import '@fancyapps/ui/dist/fancybox.esm';
import '@fancyapps/ui/dist/fancybox.css';
import { DecisionCorner } from '../Component/DecisionCorner';

const MasterPlan = () => {
  return (
    <>
      <Helmet>
        <title>Master Plan of Sobha City Gurgaon Sector 108</title>
        <meta
          name='description'
          content='Get the best master plan of  Sobha city Apartments having 39 acres luxurious development area in the mid of the tranquil territory in Sector 108 Gurgaon.'
        />
        <link rel='canonical' href='/master-plan.html' />
      </Helmet>
      <Header />
      <section className='inner_bg'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h1>{`Master Plan -  ${window.name} Sector 108`}</h1>
              <div className='locality'>
                <a
                  href='images/sobha-city-master-plan.jpg'
                  data-fancybox='Master Plan'
                  data-caption={`Master Plan - ${window.name} `}
                >
                  <img
                    width='1100' height='700'
                    src='images/sobha-city-master-plan.jpg'
                    className='img-fluid'
                    alt={`Master Plan - ${window.name} `}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <DecisionCorner />
      <Footer />
    </>
  );
};
export default MasterPlan;
