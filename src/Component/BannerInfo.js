import React from 'react';
import { Link } from "react-router-dom";
import MainForm from '../Component/MainForm'
import { ProjectDetails } from '../Component/ProjectDetails'
export const BannerInfo = (props) => {
  return (
    <section className='banner_info'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-12'>
            <div className='p_tit'>
              <h1>{window.name}</h1>
              <div className='tit_tag'>
                Spacious 3 Bedroom & Home Office Residences with incredible
                benefits.
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-4 order-lg-1'>
            <div className='right_form'>
              <div className='frm_call'>
                <Link to='tel:+911149500008' rel='nofollow'>
                  <i className="fas fa-phone-alt"></i> +91 11 4950 0008
                </Link>
              </div>
              <div className='frm_heading'>EXPRESS YOUR INTEREST.</div>
              <div className='frm_inner'>
                <MainForm />
                <div className='mt-2 nshare'>
                  <small>
                    We will not share your email &amp; Number. No spam.
                  </small>
                </div>
              </div>
            </div>
          </div>
          <ProjectDetails />
        </div>
      </div>
    </section>
  )
}