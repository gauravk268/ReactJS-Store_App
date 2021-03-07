import React from "react";
import "./style/contact.css";
import contact_detail from "./data/contact";

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact contact-title"><h1>Contact Page</h1></div>

      <div className="contact contact-form">
        <div className="contact-form-body contact-detail" >
          <div>Name: {contact_detail.name}</div>
          <div>Email: {contact_detail.email}</div>
          <div>Mobile: {contact_detail.mobile}</div>
          <div>Address: {contact_detail.address}</div>
        </div>

        <div className="contact-form-body" ></div>

				<div className="contact-form-body feedback-wrapper">
					<form action="/feedback" method="post">

						<div className="feedback-element feedback-head">
							<div className="form-group">
								<label htmlFor="name"><h4>Name</h4></label>
								<input type="text" className="form-control" name="name" placeholder="Enter name" required></input>
							</div>

							<div className="form-group">
								<label htmlFor="email"><h4>Email address</h4></label>
								<input type="email" className="form-control" name="email" aria-describedby="emailHelp"
									placeholder="Enter email" required></input>
								<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
							</div>
						</div>

						<div className="feedback-element feedback-body">
							<div className="form-group">
								<label htmlFor="feedback"><h4>Feedback</h4></label>
								<textarea className="form-control" name="feedback"></textarea>
							</div>
							<button type="submit" className="btn btn-info">Send</button>
						</div>

					</form>
				</div>

      </div>
    </div>
  );
};

export default Contact;
