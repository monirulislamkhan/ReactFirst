import React from 'react';
import '../Assets/scss/blog.scss';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Footer from '../Component/Footer';
import { DecisionCorner } from '../Component/DecisionCorner';
const WhyInvest = (props) => {
  return (
    <>
      <Helmet>
        <title>Properties in Dwarka Expressway with High ROI</title>
        <meta
          name='description'
          content='Dwarka Expressway Properties like Sobha City Gurgaon by Sobha Ltd with high return over investment, ultra luxury amenities,easy payment plan and smart apartments.'
        />
        <link
          rel='canonical'
          href='/properties-in-dwarka-expressway-with-high-roi.html'
        />
      </Helmet>
      <nav className='navbar navbar-expand-lg fixed-top navbar-dark bg-dark'>
        <Link className='navbar-brand' to='/'>
          <img src='/images/logo.svg' alt={window.name}  title={window.name} height='50' width='153' />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            <li className={`nav-item`}>
              <Link className='nav-link ' to='/'>
                Home
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <main>
        <section
          className='bnr_sec_inner'
          style={{ backgroundImage: 'url(images/main-banner.webp)' }}
        ></section>
        <section className='master_content'>
          <div className='container-fluid'>
            <div className='row justify-content-center'>
              <div className='col-lg-8'>
                <div className='box_layout'>
                  <h1>Properties in Dwarka Expressway with High ROI</h1>
                  <blockquote>
                    <p>
                      Dwarka Expressway in its first phase was developed to
                      connect Dwarka in Delhi to Palm Vihar in Gurugram. Further
                      extended to the Kherki Daula toll plaza, intercepting
                      NH-48.
                    </p>
                  </blockquote>
                  <figure>
                    <img
                      width='1024' height='550'
                      src='images/sub-banner.webp'
                      className='img-fluid'
                      alt='Properties in Dwarka Expressway with High ROI'
                      title='Properties in Dwarka Expressway with High ROI'
                    />
                  </figure>
                  <h2 className='text-lg-center'>
                    Sobha City Dwarka Expressway
                  </h2>
                  <p className='text-lg-center'>
                    This is scattered over 18 kms where it elicits eight-lane
                    and 150 metre wide Expressway to outline feasible
                    connectivity between Delhi, Manesar and Gurgaon (now called
                    as Gurugram). Mainly sectors 109, 113, 105, 99, 37D, 88 B
                    and even more sectors fall on Dwarka Expressway to offer a
                    wide range of sectors enjoying premium connectivity to New
                    Delhi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='ano_sec why_bg'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-10'>
                <h3 className='text-lg-center'>
                  THE WHOLE PERSPECTIVE OF DWARKA EXPRESSWAY HAS CHANGED
                </h3>
                <p className='text-lg-center'>
                  Today it is an essential platform displaying top notch
                  residential and commercial project by the most trusted and
                  reputed builders such as Sobha LTD, Tata Housing, Godrej
                  Properties, Vatika builder, Shapoorji Pallonji Real Estate and
                  even more. Kudos to the builders as they have completely
                  changed the outlook of Dwarka Expressway and now buyers got
                  the secured properties that promise high ROI.
                </p>
              </div>
            </div>
            <div className='row'>
              <figure className='col-lg-6 order-lg-1'>
                <img
                  width='540' height='540'
                  src='images/01.webp'
                  className='img-fluid shadow'
                  alt='THE WHOLE PERSPECTIVE OF DWARKA EXPRESSWAY HAS CHANGED'
                  title='THE WHOLE PERSPECTIVE OF DWARKA EXPRESSWAY HAS CHANGED'
                />
              </figure>
              <div className='col-lg-6'>
                <div className='ano_sec__inner'>
                  <h3>ADDITION OF METRO TO ESCALATE ITS POTENTIAL</h3>
                  <p>
                    The presence of metro has improved the overall connectivity
                    in Gurgaon and both metros project Mass Rapid Transport
                    System and Rapid Rail Transport System enjoys the highest
                    ridership to have better connectivity throughout the time.
                    This brings new potential to these sectors where metro
                    becomes the core factors of its demand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='ano_sec'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-10'>
                <h3>EXCLUSIVE RANGE OF PREMIUM PROPERTIES WITH HIGH ROI</h3>
              </div>
            </div>
            <div className='row'>
              <figure className='col-lg-6'>
                <img
                  width='540' height='540'
                  src='images/02.webp'
                  className='img-fluid shadow'
                  alt='EXCLUSIVE RANGE OF PREMIUM PROPERTIES WITH HIGH ROI'
                  title='EXCLUSIVE RANGE OF PREMIUM PROPERTIES WITH HIGH ROI'
                />
              </figure>
              <div className='col-lg-6'>
                <div className='ano_sec__inner'>
                  <p>
                    More than 100 projects available offering perfect
                    combination of 2, 3 and 4 BHK apartments and all of them are
                    well planned and organised to outline smart floor plan where
                    one can have its utmost use of the space and with this, the
                    high range of modern amenities add different activities and
                    also, more than 70 per cent area is filled with greenery to
                    keep the environment 100 per cent healthy.
                  </p>
                  <p>
                    <strong>
                      Top residential properties for a better lifestyle:-{' '}
                    </strong>
                  </p>
                  <ul>
                    <li>Mahindra Aura</li>
                    <li>Experion The Heartsong</li>
                    <li>Sobha City Gurgaon</li>
                    <li>Vatika Turning Point</li>
                    <li>Puri Emerald Bay</li>
                    <li>Joyville Gurgaon Sector 102</li>
                    <li>Godrej Sector 85 Gurgaon</li>
                    <li>TATA La VIDA</li>
                    <li>Tata Gurgaon Gateway</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='ano_sec why_bg'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <h3>DWARKA EXPRESSWAY PROPERTY ASSESSMENT</h3>
              </div>
            </div>
            <div className='row'>
              <figure className='col-lg-6 order-lg-1'>
                <img
                  width='540' height='540'
                  src='images/03.webp'
                  className='img-fluid shadow'
                  alt='DWARKA EXPRESSWAY PROPERTY ASSESSMENT'
                  title='DWARKA EXPRESSWAY PROPERTY ASSESSMENT'
                />
              </figure>
              <div className='col-lg-6'>
                <div className='ano_sec__inner'>
                  <p>
                    In the last 5 years, Dwarka Expressway has shown immense
                    growth in property development where more than 30,000 units
                    have been delivered, but at certain years an intense fall
                    has been seen because of some issues where the number of the
                    developments were less comparatively.
                  </p>

                  <p>
                    DeMo, RERA, GST and delay in possession where the main
                    pitfalls that had disturbed the flow of demand and supply,
                    but things are much better now builders are working strongly
                    to bring projects on time with robust quality construction.
                  </p>

                  <p>
                    <strong>PUSH IN PRICE - </strong> Data of 5 years elicits
                    the constant growth in the price range which is probably
                    more than Rs 5,200 per sq ft that is comparison is more than
                    12% in the past years.
                  </p>

                  <p>
                    Despite many obstacles Dwarka Expressway experience the
                    escalation in the price value in recent years. So Dwarka
                    Expressway works as a lucrative land of investment where
                    buyers (both home buyers and investors) can fetch high ROI
                    in its upcoming time.
                  </p>
                  <h5>PROPERTY BIFURCATION</h5>
                  <p>
                    <strong>Particularly on Dwarka Expressway</strong>
                  </p>
                  <ul>
                    <li>90 % Residential apartments </li>
                    <li>6 % Independent Villas</li>
                    <li>4 % Other types of properties</li>
                    <li>0% Serviced apartments </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-12'>
                <p>
                  This showcases that one can find a high range of residential
                  apartments on Dwarka Expressway from low to high price range.
                  And other types of options are available as well depending on
                  the need of the buyer.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='ano_sec'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <h3>PROMINENT ZONE ALONG DWARKA EXPRESSWAY</h3>
              </div>
            </div>
            <div className='row'>
              <figure className='col-lg-6'>
                <img
                  width='540' height='540'
                  src='images/04.webp'
                  className='img-fluid shadow'
                  alt='PROMINENT ZONE ALONG DWARKA EXPRESSWAY'
                  title='PROMINENT ZONE ALONG DWARKA EXPRESSWAY'
                />
              </figure>
              <div className='col-lg-6'>
                <div className='ano_sec__inner'>
                  <p>
                    There are many important sectors and out of them Sector 83,
                    84 and 102 are the cream of the crops to plan for investment
                    in the residential sector.
                  </p>
                  <ul>
                    <li className='w-100'>
                      Sector 83- Capital Price (Rs 5,460)/ Monthly Rent (Rs
                      11,000-12,600 for 3 BHK)
                    </li>
                    <li className='w-100'>
                      Sector 84- Capital Price (Rs 5,000)/ Monthly Rent (Not
                      clear for 3 BHK)
                    </li>
                    <li className='w-100'>
                      Sector 102- Capital Price (Rs 5400)/ Monthly Rent (Rs
                      16,500-18,00 for 3 BHK)
                    </li>
                  </ul>
                  <div className='h4 mb-2 pb-1'>PROPERTIES UNDER 1 CR</div>
                  <ul>
                    <li>M3M Woodshire sector 107</li>
                    <li>Imperia Aashiyara sector 37C</li>
                    <li>Joyville Gurgaon sector 102</li>
                    <li>Shree Krishna Homes sector 30</li>
                    <li>ATS Marigold sector 89A</li>
                    <li>Paras Dews, Dwarka Expressway</li>
                    <li>Raheja Vanya Sector 99A</li>
                    <li>GLS Avenue 51 sector 92</li>
                    <li>Hero Homes Gurgaon sector 104</li>
                    <li>Pareena Om apartments sector 112</li>
                    <li>ATS Grandstand Sector 99A</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='ano_sec why_bg'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <h3>HIGH INFLUENCE OF COMMERCIAL SECTOR</h3>
              </div>
            </div>
            <div className='row'>
              <figure className='col-lg-6 order-lg-1'>
                <img
                  width='540' height='540'
                  src='images/05.webp'
                  className='img-fluid shadow'
                  alt='HIGH INFLUENCE OF COMMERCIAL SECTOR'
                  title='HIGH INFLUENCE OF COMMERCIAL SECTOR'
                />
              </figure>
              <div className='col-lg-6'>
                <div className='ano_sec__inner'>
                  <p>
                    Robust development in commercial sector along with
                    residential escalates the overall growth of Dwarka
                    Expressway. Commercial sector with its optimistic impact
                    brings wide range of opportunities for the locals and even
                    push in an employment rate and collectively, it fetches high
                    attention and in its upcoming time more strong developments
                    will sway the investors.{' '}
                  </p>
                  <h3>
                    MEET THE LOW TO HIGH PROPERTY PRICE RANGE ON DWARKA
                    EXPRESSWAY
                  </h3>
                  <p>
                    Dwarka Expressway is one platform that brings low to a high
                    price range that could fulfil the desires of the basic buyer
                    to a modern buyer who is looking for an intact modern
                    project.
                  </p>

                  <p>
                    From 50 lacs onwards one can find an impressive range of
                    projects and then there is another segment where one can
                    find expensive properties serving premium services and
                    futuristic floor plan. So as per the budget and choice,
                    buyers can have a lucrative selection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='ano_sec'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <h3>CHERISH FEASIBLE CONNECTIVITY</h3>
              </div>
            </div>
            <div className='row'>
              <figure className='col-lg-6'>
                <img
                  width='540' height='540'
                  src='images/06.webp'
                  className='img-fluid shadow'
                  alt='CHERISH FEASIBLE CONNECTIVITY'
                  title='CHERISH FEASIBLE CONNECTIVITY'
                />
              </figure>
              <div className='col-lg-6'>
                <div className='ano_sec__inner'>
                  <p>
                    Dwarka Expressway enjoys connectivity of Mahipalpur Shiv
                    Murti to IGI Airport T3 tunnel. New 4 lane shallow 1.5 km
                    tunnel built from north to south as part of Dwarka
                    Expressway to Terminal 3 of Indira Gandhi International
                    Airport. It elicits easy commuting from Vasant Kunj, IIT
                    Delhi, Mehrauli and Munirka. About 18.9 km stretch of the
                    expressway scattered on Gurugram and rest 9.5 Km is in the
                    territories of Delhi to create an exclusive link between
                    Gurgaon and Delhi.
                  </p>

                  <p>
                    Experience more than 25 commercial hubs top up with offices,
                    restaurants, entertainment zone, food court and even more to
                    have smooth access for all.{' '}
                  </p>
                  <p>
                    Easy drive to IGI Airport and Delhi border gleans more
                    attention and brings smooth connectivity overall.
                  </p>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-12 mt-4'>
                <div className='h3 text-lg-center'>CONCLUSION</div>
                <p className='text-lg-center'>
                  So high potential of Dwarka Expressway improves the prospect
                  of it to add an impressive range of modern residential
                  projects where one can meet the cream of the crop lifestyle
                  and stay at a place that connects better and add a pool of
                  opportunities. In toto, Dwarka Expressway will ensure high
                  return value and rapid development to ensure smooth stay.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <DecisionCorner />
      <Footer />
    </>
  );
};

export default WhyInvest;
