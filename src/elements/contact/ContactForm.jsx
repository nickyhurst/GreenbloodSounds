import React, { useState, useReducer } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';

const initialState = {
    from_name: '',
    reply_to: '',
    phone: '',
    subject: '',
    message: ''
};

function reducer(state, action) {
    switch (action.type) {
        case 'from_name':
            return { ...state, from_name: action.value };
        case 'reply_to':
            return { ...state, reply_to: action.value };
        case 'phone':
            return { ...state, phone: action.value };
        case 'subject':
            return { ...state, subject: action.value };
        case 'message':
            return { ...state, message: action.value };
        default:
            throw new Error();
    }
}

export default function ContactForm() {
    const [formState, dispatch] = useReducer(reducer, initialState);
    const [showFormErr, setShowFormErr] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState({ title: '', paragraph: '' });
    const [showCaptcha, setShowCaptcha] = useState(false);
    const { from_name, reply_to, phone = 'n/a', subject = 'GBS Contact Form', message } = formState;

    const submitFormAndShowCaptcha = (e) => {
        e.preventDefault();
        setShowCaptcha(true);
    };

    const sendEmail = (captchaValue) => {
        if (from_name === '' || reply_to === '' || message === '') {
            setShowFormErr(true);
            return;
        }

        const params = {
            ...formState,
            'g-recaptcha-response': captchaValue
        };

        setFormSubmitted({ title: 'Sending message...', paragraph: '' });

        emailjs
            .send(process.env.REACT_APP_EMAIL_JS_SERVICE, process.env.REACT_APP_EMAIL_JS_TEMPLATE, params, process.env.REACT_APP_EMAIL_JS_USER)
            .then(
                ({ status }) => {
                    if (status === 200) {
                        setFormSubmitted({
                            title: `Thank you, ${from_name}!`,
                            paragraph: 'We have received your message and shall be in contact soon.'
                        });
                    } else {
                        setFormSubmitted({
                            title: 'Unexpected status code returned from EmailJS, try again later',
                            paragraph: 'Please contact us either by phone or email.'
                        });
                    }
                },
                (err) => {
                    // eslint-disable-next-line no-console
                    console.log(err);
                    setFormSubmitted({
                        title: 'Error sending message, try again later',
                        paragraph: 'Please contact us either by phone or email.'
                    });
                }
            );
    };

    return formSubmitted.title === '' ? (
        <div>
            <div className="section-title text-left mb--50 mt--50">
                <h2 className="title">Let's Connect!</h2>
                <p className="description">What type of gig are you keen on?</p>
            </div>
            <div className="form-wrapper">
                {!showCaptcha ? (
                    <form action="" onSubmit={submitFormAndShowCaptcha}>
                        <div className="rn-form-group">
                            <input
                                id="contact-form-name"
                                type="text"
                                placeholder="Your Name *"
                                value={from_name}
                                onChange={(e) => dispatch({ type: 'from_name', value: e.target.value })}
                                required
                            />
                        </div>

                        <div className="rn-form-group">
                            <input
                                type="email"
                                name="reply_to"
                                placeholder="Your Email *"
                                value={reply_to}
                                onChange={(e) => dispatch({ type: 'reply_to', value: e.target.value })}
                                required
                            />
                        </div>

                        <div className="rn-form-group">
                            <input
                                type="text"
                                name="phone"
                                placeholder="Phone Number"
                                value={phone}
                                onChange={(e) => dispatch({ type: 'phone', value: e.target.value })}
                            />
                        </div>

                        <div className="rn-form-group">
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={subject}
                                onChange={(e) => dispatch({ type: 'subject', value: e.target.value })}
                            />
                        </div>

                        <div className="rn-form-group">
                            <textarea
                                name="message"
                                placeholder="Your Message *"
                                value={message}
                                onChange={(e) => dispatch({ type: 'message', value: e.target.value })}
                                required
                            />
                        </div>

                        <div className="rn-form-group">
                            {showFormErr ? (
                                <p className="sm:mr-4 text-red-400">Please fill in all boxes to send a message</p>
                            ) : null}

                            <button
                                className="rn-button-style--2 btn-solid"
                                type="submit"
                                value="submit"
                                name="submit"
                                id="mc-embedded-subscribe"
                            >
                                Submit Now
                            </button>
                        </div>
                    </form>
                ) : (
                    <ReCAPTCHA sitekey={process.env.REACT_APP_CAPTCHA_SITE_KEY} onChange={sendEmail} />
                )}
            </div>
        </div>
    ) : (
        <div className="section-title text-left mb--50 mt--50">
            <h2>{formSubmitted.title}</h2>
            <p class="description">{formSubmitted.paragraph}</p>
        </div>
    );
}
