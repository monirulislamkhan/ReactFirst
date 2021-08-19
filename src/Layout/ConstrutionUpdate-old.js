import Header from '../Component/Header';
import Footer from '../Component/Footer';
import { DecisionCorner } from '../Component/DecisionCorner';
const ConstrutionUpdate = () => {
  return (
    <>
      <Header />
      <section className='inner_bg'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h1>{`${window.name} Construction Update`}</h1>
            </div>
          </div>
        </div>
      </section>
      <DecisionCorner />
      <Footer />
    </>
  );
};

export default ConstrutionUpdate;
