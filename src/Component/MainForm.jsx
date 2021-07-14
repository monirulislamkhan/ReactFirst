const ProjectForm = () => {
  return (
    <form>
      {/* role="form" name="form1" method="post" className="contactform1" */}
      <div className="mb-3"><input type="text" name="name" className="form-control" placeholder="Name" /></div>
      <div className="mb-3"><input type="email" name="email" className="form-control" placeholder="Email" /></div>
      <input type="hidden" name="pname" value="Unity The Amaryllis Phase 1" />
      <div className="mb-3"><select name="country" id="country" className="form-control">
        {/* onChange="countrycode(this.options[this.selectedIndex].value)" */}
        <option>Select Country</option>
      </select></div>
      <input type="hidden" name="comment" value="I need to know more about this.." />
      <input type="hidden" name="utm_source" value="ipaddress49.205.183.67" />
      <input type="hidden" name="deviceInfo" value="DEVICEWebOperating System" />
      <div className="mb-3">
        <div className="input-group">
          <div className="input-group-prepend"><span className="input-group-text" id="phonecode1"></span></div>
          <input type="hidden" name="phonecodeVal" id="phonecodeVal1" value="" />
          <input type="tel" name="phone" placeholder="Phone No." className="form-control phone" />
        </div>
      </div>
      <button type="submit" name="submit" className="btn btn-primary btn-block" id="contact-form-btn"><i className="sym_contact-filled"></i> Assured Callback in 5 Mins</button>
    </form>
  )
}

export default ProjectForm;