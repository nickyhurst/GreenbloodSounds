import React, { Component } from "react";
import ContactForm from "./ContactForm";

class GbsContact extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         rnName: '',
    //         rnEmail: '',
    //         rnSubject: '',
    //         rnMessage: '',
    //     };
    // }
    render() {
        return (
            <div className="contact-form--1">
                <div className="container">
                    <div className="row row--35 align-items-start">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <ContactForm />
                        </div>
                        {/* <div className="col-lg-6 order-2 order-lg-1">
                            <div className="section-title text-left mb--50">
                                <h2 className="title">{this.props.contactTitle}</h2>
                                <p className="description">What type of gig are you keen on?</p>
                            </div>
                            <div className="form-wrapper">
                                
                            </div>
                        </div> */}
                        <div className="col-lg-6 order-1 order-lg-2">
                            <div className="thumbnail mb_md--30 mb_sm--30">
                                <img src={`${this.props.contactImages}`} alt="trydo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default GbsContact;