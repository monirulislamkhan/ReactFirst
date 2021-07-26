import React from 'react';
const ProjectForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="Name">Full Name</label>
        <input type="text" className="form-control" id="Name" placeholder="Enter Your Name" />
      </div>

      <div className="mb-3">
        <label htmlFor="Email">Email Id</label>
        <input type="email" className="form-control" id="Email" placeholder="Enter Email" />
      </div>

      <div className="mb-3">
        <label htmlFor="Select">Country</label>
        <select className="form-select" id="Select" aria-label=" label select example">
          <option value="1" defaultValue>India</option>
          <option value="2">Sri Lanka</option>
          <option value="3">Nepal</option>
        </select>
      </div>

      <label htmlFor="Select">Mobile No.</label>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">+91</span>
        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
      </div>

      <div className="d-grid">
        <button type="submit" name="submit" className="btn btn-primary btn-lg" id="contact-form-btn">Request A Call</button>
      </div>
    </form>
  )
}

export default ProjectForm;