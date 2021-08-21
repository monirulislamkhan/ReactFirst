import axios from 'axios';

axios.get(`http://tatahousingnewproject.com/admin/wp-json/v1/GetCountry`).then(response => {
  document.getElementById('country').innerHTML = response.data;
});

const onChangeHandler = (fieldName, value)=>{    
  if(fieldName==="country"){

    axios.post('http://tatahousingnewproject.com/admin/wp-json/v1/GetCountryCodeFromDataBase', {code:value}).then(response => {
      
      document.getElementById('phonecode').innerHTML = response.data;
    });
  }
}

const onSubmitHandler = (e)=>{
  e.preventDefault();
    var form = document.querySelector('form');
    var data = new FormData(form);
    
    axios.post('http://tatahousingnewproject.com/admin/wp-json/v1/AddUserInformation', data).then(response => {
      
    }).catch(error => {
      
    });
}


const ProjectForm = () => {
  return (
    <>
      <form role="form" name="form1" method="post" className="contactform" onSubmit={(e)=>{onSubmitHandler(e)}}>
        <div className="mb-3">
          <label htmlFor="Name">Full Name</label>
          <input type="text" className="form-control" name="name" id="Name" placeholder="Enter Your Name" />
        </div>

        <div className="mb-3">
          <label htmlFor="Email">Email Id</label>
          <input type="email" className="form-control" name="email" id="Email" placeholder="Enter Your Email" />
        </div>

        <div className="mb-3">
          <label htmlFor="Select">Country</label>
          <select className="form-select" id="country" name="country" aria-label=" label select example" onChange={(e)=>{ onChangeHandler("country",e.target.value)}}>
            
          </select>
        </div>

        <label htmlFor="Select">Mobile No.</label>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1 phonecode" id="phonecode"></span>
          <input type="text" className="form-control" name="phone" placeholder="Enter Your Mobile Number" aria-label="Username" aria-describedby="basic-addon1" />
        </div>

        <div className="d-grid">
          <button type="submit" name="submit" className="btn btn-primary btn-lg" id="contact-form-btn">Request A Call</button>
        </div>
      </form>
    </>
  )
}

export default ProjectForm;