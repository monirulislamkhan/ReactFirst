import { Helmet } from 'react-helmet';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
const Disclaimer = () => {
  return (
    <>
      <Helmet>
        <title>Disclaimer</title>
        <link rel='canonical' href='/disclaimer.html' />
      </Helmet>
      <Header />
      <section className="dis_con">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="dis_heading">Disclaimer</div>
              <p><strong>Disclaimer :</strong> This website is in the process of being updated. By accessing this website, the viewer confirms that the information including brochures and marketing collaterals on this website are solely for informational purposes only and the viewer has not relied on this information for making any booking/purchase in any project of the Company. Nothing on this website, constitutes advertising, marketing, booking, selling or an offer for sale, or invitation to purchase a unit in any project by the Company. The Company is not liable for any consequence of any action taken by the viewer relying on such material / information on this website.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Disclaimer;
