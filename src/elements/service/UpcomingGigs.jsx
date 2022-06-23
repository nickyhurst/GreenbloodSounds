import React, { Component } from "react";
import GoogleMapReact from 'google-map-react';
import Marker from './../../blocks/GoogleMapMarker';
// import { FiCast , FiLayers , FiUsers , FiMonitor } from "react-icons/fi";
import UpcomingGigsListItems from '../../component/data/UpcomingGigs';


const UpcomingGigsList = UpcomingGigsListItems;
var currentDate = new Date();



class UpcomingGigs extends Component {

    static defaultProps = {
        zoom: 15
    };

    render() {
        const { column } = this.props;
        const UpcomingContent = UpcomingGigsList.slice(0, this.props.item);

        return (
            <React.Fragment>
                {/* <div className="row"> */}
                {UpcomingContent.map((val, i) => {
                    const gigDate = new Date(val.isoDate);

                    if (currentDate.getTime() > gigDate.getTime())
                        return <div className="text-white"><p>{val.title} has come and gone!</p><p className="text-white">Hope you had a great time, we did!</p></div>
                    return <div className="row mb-4" key={i}>
                        <div className={`${column}`}>
                            <a href={val.url}>
                                <div className="service service__style--2">
                                    <div className="content m-4 p-2">
                                        <h3 className="title">{val.title}</h3>
                                        <p>
                                            {val.date}
                                            <br />
                                            {val.time}
                                            <br />
                                            @ {val.location}

                                        </p>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="map col-lg-6">
                            <div className="rn-contact-map-area position-relative">
                                <div className="google-map">
                                    <GoogleMapReact
                                        bootstrapURLKeys={{
                                            key: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
                                        }}
                                        defaultCenter={val.center}
                                        defaultZoom={this.props.zoom}
                                        options={{
                                            mapId: process.env.REACT_APP_MAP_STYLE_ID
                                        }}
                                    >
                                        <Marker
                                            lat={val.center.lat}
                                            lng={val.center.lng}
                                            text={val.location}
                                        />
                                    </GoogleMapReact>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
                {/* </div> */}
            </React.Fragment>
        )
    }
}
export default UpcomingGigs;
