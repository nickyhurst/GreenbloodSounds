import React, { Component } from "react";
import { Helmet } from 'react-helmet'
import pageTitles from '../data/PageTitles';

const titleList = pageTitles;

const ClickTitle = () => {
    let hash = window.location.hash;
    const pTitle = titleList.find(t => t.hash === hash);
    if (!(Boolean(pTitle))) {
        return false;
    } else {
        return pTitle.title;
    }
}

class PageHelmet extends Component {
    render() {
        const pageTitle = ClickTitle();
        return (
            <React.Fragment>
                <Helmet>


                    <title>{pageTitle}</title>

                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
// Greenblood Sounds - Ska and Punk Vinyl DJ in Dallas