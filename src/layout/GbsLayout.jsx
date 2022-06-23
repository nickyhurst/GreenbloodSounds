import React from 'react';
import { Parallax } from "react-parallax";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Helmet from "../component/common/Helmet";
import TextLoop from "react-text-loop";
import GBSHeader from "../component/header/GbsHeader";
import GBSFooter from "../component/footer/GbsFooter";
import GBSTabs from "../elements/tab/GbsTabs";
import ArchiveList from "../elements/archive/ArchiveListItems";
import UpcomingGigs from "../elements/service/UpcomingGigs";
import UpcomingGigsItems from '../component/data/UpcomingGigs';
import GbsContact from '../elements/contact/GbsContact';

const SlideList = [
    {
        textPosition: 'text-left',
        category: '',
        description: '',
        buttonText: '',
        buttonLink: ''
    }
]

const image1 =
    "assets/images/bg/paralax/gbs-mid.jpg";

const image2 =
    "assets/images/bg/paralax/turntable.jpg";

const upcomingGigsAmount = () => {
    for (var prop in UpcomingGigsItems) {
        if (UpcomingGigsItems.hasOwnProperty(prop))
        return false;
    }
    return true;
} 


const GbsLayout = () => {
    let title = 'General Information',
        description = 'I am based in Dallas, TX, and Greenblood Sounds is not your typical DJ service. I am a vinyl-only DJ that specializes in certain types of music. My musical selections range from reggae such as \'Boss Reggae, Ska, and Rocksteady\' to more aggressive styles like \'Punk, HC, and Oi!\'. I also love to mix in some folky stuff from \'Celtic, Americana, into Traditional\' when it feels right. I typically work with pubs and bars, setting the mood for the night by starting up before the bands take the stage and then filling in the sounds while the bands change. I also run fun-filled rememberable nights of strictly vinyl sets based on the genres I specialize in.';
    //const PostList = BlogContent.slice(0 , 3);
    return (
        <div className="active-dark">
            
            <Helmet pageTitle="Greenblood Sounds - Ska and Punk Vinyl DJ in Dallas!" />

            <GBSHeader logo="symbol-dark" color="color-black" />

            {/* Start Slider Area   */}
            <section id="home" className="fix">
                <div className="slider-wrapper">
                    {/* Start Single Slide */}
                    {SlideList.map((value, index) => (
                        <div className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--gbs" key={index}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className={`inner ${value.textPosition}`}>
                                            {value.category ? <span>{value.category}</span> : ''}
                                            <h1 className="title">Greenblood Sounds <br />
                                                <TextLoop>
                                                    <span> Ska, Rocksteady, Soul</span>
                                                    <span> Punk, HC, Oi!</span>
                                                    <span> Celtic</span>
                                                </TextLoop>{" "}
                                            </h1>
                                            <h2>DJ based in Dallas, TX.</h2>
                                            {value.description ? (
                                                <p className="description">{value.description}</p>
                                            ) : (
                                                ''
                                            )}
                                            {value.buttonText ? (
                                                <div className="slide-btn">
                                                    <a className="rn-button-style--2 btn-primary-color" href={`${value.buttonLink}`}>{value.buttonText}</a>
                                                </div>
                                            ) : (
                                                ''
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* End Single Slide */}
                </div>
            </section>
            {/* End Slider Area   */}


            {/* Start Upcoming Area  */}
            <Parallax className="rn-paralax-service" bgImage={image1} strength={1000}>
                <section id="upcoming" className="service-area ptb--120">
                    <div className="container">
                        <div className="row align-items-start">
                            <div className="col-lg-12">
                                <div className="section-title service-style--2 text-center mb--30 mb_sm--0">
                                    <h2>Upcoming Gigs</h2>
                                    <h2>{upcomingGigsAmount()}</h2>

                                    {upcomingGigsAmount() && (
                                        <p className="text-white">New gig details will be listed here, once they are available.</p>
                                    )}

                                </div>
                            </div>
                        </div>
                        <UpcomingGigs item="6" column="col-lg-4 col-md-6 col-sm-6 col-12" />
                    </div>
                </section>
            </Parallax>
            {/* End Upcoming Area  */}

            {/* Start About Area */}
            <section id="about" className="fix">
                <div className="about-area ptb--120  bg_color--1">
                    <div className="about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img className="w-100" src="assets/images/about/about-nh.jpg" alt="Nicky Hurts" />
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">{title}</h2>
                                            <p className="description">{description}</p>
                                        </div>
                                        <div className="row mt--30">
                                            <GBSTabs tabStyle="tab-style--1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End About Area */}

            {/* Start Archive Area */}
            <Parallax className="rn-paralax-portfolio" bgImage={image2} strength={500} >

                <section id="archive" className="portfolio-area ptb--120" data-black-overlay="6">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title service-style--2 text-center mb--30 mb_sm--0">
                                    <h2 className="title">Recent Gigs</h2>
                                    <p>Here is a collection of fliers from previous gigs.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {/* Start Single Portfolio  */}
                            <ArchiveList styevariation="text-center mt--40" column="col-lg-4 col-md-6 col-sm-6 col-12" item="6" />
                        </div>
                    </div>
                </section>
            </Parallax>
            {/* End Archive Area */}

            {/* Start Contact Area */}
            <section id="contact" className="fix">
                <div className="rn-contact-area ptb--120 bg_color--1">
                    <GbsContact contactImages="assets/images/about/contact-opt.jpg" contactTitle="Let's Connect!" />
                </div>
            </section>
            {/* End Contact Area */}

            <GBSFooter />

            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}
            
            
            

            
       </div>
    )
}

export default GbsLayout;