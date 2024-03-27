import React from "react";
import './ClientsReview.css';
import testinomial1Img from '../images/testimonial-1.jpg';
import testinomial2Img from '../images/testimonial-2.jpg';
import testinomial3Img from '../images/testimonial-3.jpg';
import testinomial4Img from '../images/testimonial-4.jpg';

function ClientsReview(){
    return(
        <>
        
<div className="container-xxl py-5">
<div className="container">
<h1 className="text-center mb-5">Our Clients Say!!!</h1>
<div className="owl-carousel testimonial-carousel">
<div className="testimonial-item bg-light rounded p-4">
<i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
<p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
<div className="d-flex align-items-center">
<img className="img-fluid flex-shrink-0 rounded" src={testinomial1Img} style={{width: "50px", height: "50px"}} alt="testinomial1Img"/>
<div className="ps-3">
<h5 className="mb-1">Client Name</h5>
<small>Profession</small>
</div>
</div>
</div>
<div className="testimonial-item bg-light rounded p-4">
<i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
<p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
<div className="d-flex align-items-center">
<img className="img-fluid flex-shrink-0 rounded" src={testinomial2Img} style={{width: "50px", height: "50px"}} alt="testinomial1Img"/>
<div className="ps-3">
<h5 className="mb-1">Client Name</h5>
<small>Profession</small>
</div>
</div>
</div>
<div className="testimonial-item bg-light rounded p-4">
<i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
<p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
<div className="d-flex align-items-center">
<img className="img-fluid flex-shrink-0 rounded" src={testinomial3Img} style={{width: "50px", height: "50px"}} alt="testinomial1Img"/>
<div className="ps-3">
<h5 className="mb-1">Client Name</h5>
<small>Profession</small>
</div>
</div>
</div>
<div className="testimonial-item bg-light rounded p-4">
<i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
<p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
<div className="d-flex align-items-center">
<img className="img-fluid flex-shrink-0 rounded" src={testinomial4Img} style={{width: "50px", height: "50px"}} alt="testinomial1Img"/>
<div className="ps-3">
<h5 className="mb-1">Client Name</h5>
<small>Profession</small>
</div>
</div>
</div>
</div>
</div>
</div>
        </>
    );
}

export default ClientsReview;

