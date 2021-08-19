import Header from '../Component/Header';
import Footer from '../Component/Footer';
const NotFoundPage = () => {
  return (
    <>
      <Header />
      <section className='four04_con'>
        <div className='container text-center'>
          <div className='h1'>404</div>
          <div className='lead'>Page not found</div>
          <div className='stext'>
            You've hit a wrong path. You may have followed an outdated link or
            entered an incorrect url.
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default NotFoundPage;
