import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBInput,
} from "mdbreact";

const ContactUs = (props) => {
  const notify = () =>
    toast(
      "Your Complaint has been Submitted. Our Contact Person will Contact you soon!"
    );
  return (
    <div
      style={{
        backgroundImage:
          "url(" + "https://wallpapercave.com/wp/KUy8J3z.jpg" + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <ToastContainer />
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form>
              <p className="h5 text-center mb-4">Write to us</p>
              <div className="grey-text">
                <MDBInput
                  label="Your name"
                  icon="user"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Your email"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Subject"
                  icon="tag"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  type="textarea"
                  rows="2"
                  label="Your message"
                  icon="pencil-alt"
                />
              </div>
              <div className="text-center">
                <MDBBtn
                  outline
                  color="secondary"
                  onClick={(e) => {
                    console.log(props);
                    props.history.push("/");
                    notify();
                  }}
                >
                  Send
                  <MDBIcon far icon="paper-plane" className="ml-1" />
                </MDBBtn>
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default ContactUs;
