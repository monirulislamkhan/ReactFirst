import axios from 'axios';
import { useState, useEffect } from "react";


let nameInput;
let emailInput;
let countryInput;
let phoneInput;
let ApiUrl = 'http://www.sobhacitygurgaon.org.in/blog/wp-json/v1/';

const onSubmitHandler = (e)=>{  
  e.preventDefault();

  let name = nameInput.value;
  let email = emailInput.value;
  let country = countryInput.value;
  let phone = phoneInput.value;

  const data = {
    'name': name,
    'email': email,
    'country': country,
    'phone': phone
  }

  axios.post(ApiUrl+'AddUserInformation', data).then(response => {
      
      console.log(response.data.Data.msg);

      if(response.data.Data.error === true){
        //document.getElementById("contact-form-btn").removeAttribute('disabled');
        alert(response.data.Data.msg);
                
      }else{
        window.location.href = "thank-you.html";
      }
  }).catch(error => {
    
  });
}

function MainForm() {

  const [phonecode, setPhoneCode] = useState("");
  const onChangeHandler = (fieldName, value)=>{    
    if(fieldName==="country"){
      axios.post(ApiUrl+'GetCountryCodeFromDataBase', {code:value}).then(response => {
        setPhoneCode(response.data);
      });
    }
  }


  const [articles, setArticles] = useState([]);
  useEffect(() => {
  fetch(ApiUrl+"GetCountry")
    .then(res => res.json())
    .then(result => setArticles(result))
  }, []);  
  return (
    <>
      <form role="form" name="form1" method="post" className="contactform" onSubmit={(e)=>{onSubmitHandler(e)}}>
        <div className="mb-3">
          <label htmlFor="Name">Full Name</label>
          <input type="text" className="form-control" name="name" id="Name" ref={ el => nameInput = el } placeholder="Enter Your Name" />
        </div>

        <div className="mb-3">
          <label htmlFor="Email">Email Id</label>
          <input type="email" className="form-control" name="email" id="Email" ref={ el => emailInput = el } placeholder="Enter Your Email" />
        </div>

        <div className="mb-3">
          <label htmlFor="Select">Country</label>
          <select className="form-select" id="country" name="country" aria-label=" label select example" ref={ el => countryInput = el } onChange={(e)=>{ onChangeHandler("country",e.target.value)}}>
            <option value="">Select Country</option>
              {articles.map((country) => (
                <option value={country.id} key={country.id}>{country.name}</option>
              ))}
          </select>
        </div>

        <label htmlFor="Select">Mobile No.</label>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1 phonecode">{phonecode}</span>
          <input type="text" className="form-control" name="phone" placeholder="Enter Your Mobile Number" ref={ el => phoneInput = el } aria-label="Username" aria-describedby="basic-addon1" />
        </div>

        <div className="d-grid">
          <button type="submit" name="submit" className="btn btn-primary btn-lg" id="contact-form-btn">Request A Call</button>
        </div>
      </form>
    </>
  )

}
export default MainForm;