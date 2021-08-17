import React from 'react';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import { DecisionCorner } from '../Component/DecisionCorner';
import { Loader } from '@googlemaps/js-api-loader';
const locationMap = (props) => {
  const loader = new Loader({
    apiKey: "AIzaSyDlZ-xZ5HRgV9z8VSKd2T5V4DvCOPfxqjA",
    version: "weekly",
    libraries: ["places"]
  });
  const mapOptions = {
    center: {
      lat: 28.515117,
      lng: 76.995763
    },
    zoom: 4
  };
  loader.load()
    .then((google) => {
      new google.maps.Map(document.getElementById("map"), mapOptions);
    })
    .catch(e => {
      // do something
    });
  return (
    <>
      <Header />
      <section className="inner_bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>{`Location Map -  ${window.name} Sector 108`}</h1>
              <div className="hm_map">
                <ul>
                  <li><input type="checkbox" name="mytype" className="chkbox" id="school" value="school" /><label for="school">School</label></li>
                  <li><input type="checkbox" name="mytype" className="chkbox" id="restaurant" value="restaurant" /><label for="restaurant" >Restaurant</label></li>
                  <li><input type="checkbox" name="mytype" className="chkbox" id="hospital" value="hospital" /><label for="hospital" >Hospital</label></li>
                  <li><input type="checkbox" name="mytype" className="chkbox" id="bus_station" value="bus_station" /><label for="bus_station" >Bus Stopedge</label></li>
                  <li><input type="checkbox" name="mytype" className="chkbox" id="park" value="park" /><label for="park" >Park</label></li>
                  <li><input type="checkbox" name="mytype" className="chkbox" id="bank" value="bank" /><label for="bank" >Bank</label></li>
                  <li><input type="checkbox" name="mytype" className="chkbox" id="bar" value="bar" /><label for="bar" >Bar</label></li>
                  <li><input type="checkbox" name="mytype" className="chkbox" id="movie_theater" value="movie_theater" /><label for="movie_theater" >Movie Theater</label></li>
                  <li><input type="checkbox" name="mytype" className="chkbox" id="night_club" value="night_club" /><label for="night_club" >Night Club</label></li>
                  <li><input type="checkbox" name="mytype" className="chkbox" id="supermarket" value="supermarket" /><label for="supermarket" >Super Market</label></li>
                  <li><input type="checkbox" name="mytype" className="chkbox" id="gym" value="gym" /><label for="gym" >Gym</label></li>
                  <li><input type="checkbox" name="mytype" className="chkbox" id="atm" value="atm" /><label for="atm" >ATM</label></li>
                </ul>
                <input id="address" type="hidden" value="Sector 108 Gurugram" onload="showMap();" />
                <input id="pic" type="hidden" value="" onload="showMap();" />
                <div id="map"></div>
                <input type="text" id="latitude" style={{ display: 'none' }} placeholder="Latitude" />
                <input type="text" id="longitude" style={{ display: 'none' }} placeholder="Longitude" />
                <input type="text" id="lat" value="28.515117" style={{ display: 'none' }} />
                < input type="text" id="long" value="76.995763" style={{ display: 'none' }} />
                <input type="button" id="show_btn" value="show  markers" onClick="showMarkers();" style={{ display: 'none' }} />
                <div id="test"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DecisionCorner />
      <Footer />
    </>
  )
};

export default locationMap;
