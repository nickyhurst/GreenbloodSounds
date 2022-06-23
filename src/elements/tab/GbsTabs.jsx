import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class GbsTabs extends Component{
    render(){
        let 
        tab1 = "Ska, Rocksteady",
        tab2 = "Punk,  Oi!",
        tab3 = "Celtic, Folk";
        const { tabStyle } = this.props
        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        <Tab>{tab1}</Tab>
                                        <Tab>{tab2}</Tab>
                                        <Tab>{tab3}</Tab>
                                    </TabList>
                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <ul>
                                                <li>
                                                    Reggae from the late 60s is an absolute passion of mine. You will discover everything from the Skinhead Reggae era to Blue Beat towards later music inspired from these old original sounds such as 2Tone or even possibly Moon Records in my crates.  When these melodies hit the tables, the infectious music reaches your soul while your boots stomp the dance floor.
                                                </li>
                                                <li>
                                                    Desmond Dekker, Laurel Aitken, Derrick Morgan, Symarip
                                                </li>
                                                <li>
                                                    The Specials, Bad Manners, Deal's Gone Bad, Aggrolites
                                                </li>
                                                <li>
                                                    Crab Records, Trojan Records, 2-Tone and much more.. This train will take you from Skaville to the moon and back again..
                                                </li>
                                                
                                            </ul>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                    I grew up on Punk and Oi! music. The anthems, rebellion, and camaraderie - these tunes inspired me in my youth, and I love to present the new class of Punks and Skins with the original pressings and latest bands keeping the flame alive. You will not find any RAC in my crates, so go elsewhere for that nonsense!
                                               </li>
                                               <li>
                                                    Cockney Rejects, Angelic Upstarts, 4-Skins, Business
                                               </li>
                                               <li>
                                                    Oxymoron, Lower Class Brats, Control, Klasse Kriminale
                                               </li>
                                                <li>Secret Records, Link, TKO ... The sing-alongs never stop, and no matter your age, you will be transported to your invincible youth.</li>
                                           </ul>
                                       </div>
                                    </TabPanel>
                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                    Celtic music - I love this stuff!  With a name like Greenblood Sounds, this should be a no-brainer. Ballads, gigs, reels, you name it, I've got it ready. Irish Traditional tracks spotlighting uilleann pipes towards songs of rebellion or even modern-day takes fusing this phenomenal genre with rock or punk - this is the stuff that keeps the party going and the guests getting the pints in!
                                               </li>
                                               <li>
                                                   Chieftains, Dubliners, Planxty, Wolfe Tones
                                               </li>
                                               <li>
                                                   Pogues, Dreadnoughts, Rumjacks, Levellers
                                               </li>
                                                <li>Claddagh, Unicorn, Shanachie ... Every day is St. Paddy's day upon these crates being unveiled - let the hooley begin!</li>
                                           </ul>
                                       </div>
                                    </TabPanel>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tabs Area */}
            </div>
        )
    }
}

export default GbsTabs;