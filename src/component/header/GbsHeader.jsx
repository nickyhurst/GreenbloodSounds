import React, { Component } from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FiX, FiMenu } from "react-icons/fi";
import Scrollspy from "react-scrollspy";
import pageTitles from '../data/PageTitles';

const titleList = pageTitles;

const SocialShare = [
    { Social: <FaFacebookF />, link: 'https://www.facebook.com/greenbloodsounds/' },
    { Social: <FaInstagram />, link: 'https://www.instagram.com/greenbloodsounds/' },
]

class GbsHeader extends Component {
    constructor(props) {
        super(props);
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
        this.stickyHeader = this.stickyHeader.bind(this);
        //this.helmet = HelmetExport;
        //this.scrollList = React.createRef();
        //this.activeItem = this.activeItem.bind(this);

        //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
        window.addEventListener('load', function () {
            //console.log('All assets are loaded');
        })

    }

    // activeItem = () => {
    //     console.log("activeItem");
    //     const indexActive = this.scrolllist.current.state.inViewState.findIndex(
    //         (x) => x === true
    //         //console.log(x);
    //     );

    //     console.log(this.scrolllist.current.props.items[indexActive]);
    // }

    menuTrigger(el) {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')


    }

    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open')
    }

    stickyHeader() { }



    render() {

        window.addEventListener('scroll', function () {
            var value = window.scrollY;
            if (value > 100) {
                document.querySelector('.header--fixed').classList.add('sticky')
            } else {
                document.querySelector('.header--fixed').classList.remove('sticky')
            }
        });

        var elements = document.querySelectorAll(".has-droupdown > a");
        for (var i in elements) {
            if (elements.hasOwnProperty(i)) {
                elements[i].onclick = function () {
                    this.parentElement
                        .querySelector(".submenu")
                        .classList.toggle("active");
                    this.classList.toggle("open");
                };
            }
        }

        function handleUpdate(el) {
            document.querySelector('.header-wrapper').classList.remove('menu-open')
            if (Boolean(el)) {
                const id = "#" + el.id;
                const pTitle = titleList.find(t => t.hash === id);
                if (!(Boolean(pTitle))) {
                    document.title = "Page Not Found"
                } else {
                    document.title = pTitle.title;
                }
            }
        }

        // var elements = document.querySelectorAll('.has-droupdown > a');
        // for(var i in elements) {
        //     if(elements.hasOwnProperty(i)) {
        //         elements[i].onclick = function() {
        //             this.parentElement.querySelector('.submenu').classList.toggle("active");
        //             this.classList.toggle("open");
        //             console.log("Click event", this.classList);
        //         }
        //     }
        // }
        const { color = 'default-color' } = this.props;
        let logoUrl = (
            <img src="assets/images/logo/logo-all-dark.png" alt="Green Blood Sounds" />
        );
        // if(logo === 'light'){
        //     logoUrl = <img src="assets/images/logo/logo-light.png" alt="Green Blood Sounds" />;
        // }else if(logo === 'dark'){
        //     logoUrl = <img src="assets/images/logo/logo-symbol-dark.png" alt="Green Blood Soundsy" />;
        // }else if(logo === 'symbol-dark'){
        //     logoUrl = <img src="assets/images/logo/logo-all-dark.png" alt="Green Blood Sounds" />;
        // }else if(logo === 'symbol-light'){
        //     logoUrl = <img src="assets/images/logo/logo-symbol-light.png" alt="Green Blood Sounds" />;
        // }else{
        //     logoUrl = <img src="assets/images/logo/logo.png" alt="Green Blood Sounds" />;
        // }



        return (

            <header className={`header-area header-style-two header--fixed ${color}`}>
                <div className="header-wrapper">
                    <div className="header-left d-flex align-items-center">
                        <div className="logo">
                            <a href="/">
                                {logoUrl}
                            </a>
                        </div>
                        <nav className="mainmenunav d-lg-block ml--50">
                            {/* <Scrollspy sectionRefs={['home', 'upcoming', 'about', 'archive', 'contact']} className="mainmenu" currentClassName="is-current" onUpdate={ el => handleUpdate(el.items)}>
                                {( { currentElementIndexInViewport }) => (
                                    <ul class="mainmenu" data-cy="nav-wrapper">
                                        <li><a href="#home">Home</a></li>
                                        <li><a href="#upcoming">Upcoming Gigs</a></li>
                                        <li><a href="#about">About</a></li>
                                        <li><a href="#archive">Archive</a></li>
                                        <li><a href="#contact">Contact</a></li>
                                    </ul>
                                    )
                                } 
                                onUpdate={el => handleUpdate(el.id)}
                            </Scrollspy> */}
                            <Scrollspy
                                className="mainmenu"
                                items={[
                                    "home",
                                    "upcoming",
                                    "about",
                                    "archive",
                                    "contact",
                                    "test"
                                ]}
                                currentClassName="is-current"
                                offset={-200}

                                onUpdate={el => handleUpdate(el)}
                            >
                                <li>
                                    <a href="/#home">Home</a>
                                </li>
                                <li>
                                    <a href="/#upcoming">Upcoming Gigs</a>
                                </li>
                                <li>
                                    <a href="/#about">About</a>
                                </li>
                                <li>
                                    <a href="/#archive">Archive</a>
                                </li>
                                <li>
                                    <a href="/#contact">Contact</a>
                                </li>
                            </Scrollspy>
                        </nav>
                    </div>
                    <div className="header-right">
                        <div className="social-share-inner">
                            <ul className="social-share social-style--2 color-black d-flex justify-content-start liststyle">
                                {SocialShare.map((val, i) => (
                                    <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                ))}
                            </ul>
                        </div>

                        {/* Start Humberger Menu  */}
                        <div className="humberger-menu d-block d-lg-none pl--20">
                            <span
                                onClick={this.menuTrigger}
                                className="menutrigger text-white"
                            >
                                <FiMenu />
                            </span>
                        </div>
                        {/* End Humberger Menu  */}
                        <div className="close-menu d-block d-lg-none">
                            <span onClick={this.CLoseMenuTrigger} className="closeTrigger">
                                <FiX />
                            </span>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default GbsHeader;