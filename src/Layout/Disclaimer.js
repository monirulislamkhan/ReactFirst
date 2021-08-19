import { Helmet } from 'react-helmet';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
const Disclaimer = () => {
  return (
    <>
      <Helmet>
        <title></title>
        <meta name='description' content='' />
        <link rel='canonical' href='/.html' />
      </Helmet>
      <Header />
      <div className='container'>Disclaimer</div>
      <Footer />
    </>
  );
};

export default Disclaimer;
