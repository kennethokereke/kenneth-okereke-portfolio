import React, {Component} from 'react';
import { SRLWrapper } from "simple-react-lightbox";

import TopBanner from './TopBanner';

// import LululemonPhoto from "../Images/lululemon/lululemonphoto.png";
// import old from "../images/jupyter/old.png";
// import newJ from "../images/jupyter/new.png";
// import nbtoolbar from "../images/jupyter/nbtoolbar.png";
// import top_nav from "../images/jupyter/top_navbar.png";
// import files from "../images/jupyter/files.png";
// import image from "../images/jupyter/image.png";
// import terminal from "../images/jupyter/terminal.png";
// import navbars from "../images/jupyter/navbars.png";
import SweeperHeader from '../Images/Sweeper/sweepr-logo.png';
import SweeperInteraction from '../Images/Sweeper/interactioneditor.svg'
import SweeperAlias from '../Images/Sweeper/AliasEditor.svg'
import SweeperOperation from '../Images/Sweeper/operationdashboard.svg'
import SweeperDashboard from '../Images/Sweeper/CSRDashboard.svg'
import SweeperDesignAudit from '../Images/Sweeper/design-audit@2x.webp'
import SweeperColorPallete from '../Images/Sweeper/colorpallete.webp'
import SweeperInter from '../Images/Sweeper/inter.webp'
import SweeperBadge from '../Images/Sweeper/badges.webp'
import SweeperButtons from '../Images/Sweeper/buttons.webp'
import SweeperData from '../Images/Sweeper/dataVisualization.webp'
import SweeperNotifcation from '../Images/Sweeper/notifications.webp'
import SweeperPagination from '../Images/Sweeper/pagination.webp'
import SweeperTabs from '../Images/Sweeper/tabs.webp'
import SweeperDocumentation1 from '../Images/Sweeper/documentationsweeper.webp'
import SweeperDocumentation2 from '../Images/Sweeper/documentation-2sweeper.webp'
import SweeperDocumentation3 from '../Images/Sweeper/documentation-3sweeper.webp'
import SweeperDocumentation4 from '../Images/Sweeper/documentation-4sweeper.webp'
import SweeperDocumentation5 from '../Images/Sweeper/documentation-5sweeper.webp'
import SweeperPreview from '../Images/Sweeper/sweeperpreview.webp'
import SweeperPreview1 from '../Images/Sweeper/sweeperpreview1.webp'
import SweeperPreview2 from '../Images/Sweeper/sweeperpreview2.webp'
import SweeperPreview3 from '../Images/Sweeper/sweeperpreview3.webp'
import SweeperPreview4 from '../Images/Sweeper/sweeperpreview4.webp'
import SweeperPreview5 from '../Images/Sweeper/sweeperpreview5.webp'




import '../stylesheet/sweepr.css';

class Sweepr extends Component {
   render() {
      return (
         <div className="jupyter">
            <div className="innerWrapper">
             <TopBanner image={SweeperHeader} bgColor="#FF9445" arrowColor="#fff4ec"/>
             <div className="section">
               <div className="sectionContent">
                  <h3>Creating a design system for Sweepr</h3>
                   <div className="Mckvr">
                   <div>
                     <h4>Expertise</h4>
                     <p>Design systems,  UX</p>
                   </div>
                   <div>
                     <h4>Platform</h4>
                     <p>Web</p>
                   </div>
                   <div>
                     <h4>Role</h4>
                     <p>Product Designer</p>
                   </div>
                   <div>
                     <h4>Year</h4>
                     <p>2017-2018</p>
                   </div>
                   </div>
                   <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' , padding: 20}}>
                     <h4>Intro</h4>
                     <p>Had the opportunity to work at Sweepr and help to <br/>
                       create a design system to align thier suite of web apps.</p>
                   </div>

                   


                  {/* <p>
                    Jupyter is an open source organization that builds an interactive data science IDE used by over 30 million people around the world.
                  </p>
                  <h4>My Role</h4>
                  <p>
                    I worked at Jupyter as a hybrid UI/UX Designer and Front-end Engineer for 9 months.
                    I was part of a team of 4 designers and engineers and together we were tasked with designing and implementing solutions for all different Jupyter products.
                  </p> */}
               </div>
             </div>

             <div className="sectionme">
                     <div className="sectionContents">

                   <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' , padding: 20}}>
                     <h4>Problem</h4>
                     <p>When I first joined we had four web apps:</p>
             


                     <div className="horizGallery">
                   <SRLWrapper>
                     <img className="sweeperimage" src={SweeperInteraction} />
                    <img className="sweeperimage" src={SweeperAlias} />
                    <img className="sweeperimage" src={SweeperOperation} />
                    <img className="sweeperimage" src={SweeperDashboard} />
                    
                 </SRLWrapper>
               </div>
                  <p>The problems here were the classic case of designing multiple products
                     without a centralised design system:</p>

                     <ul>
                       <li><span className="bg-yellow">Inconsistent styling,</span> design language & 
                         patterns across the different products</li>
                         <br/>  
                         <li>More time spent on designing new components, 
                           patterns and <span className="bg-yellow">less on the actual problem</span></li>

                     </ul>

                     <h4>Design audit</h4>
                     <p>We carried out a design audit on all of the existing products
                        to get a sense of the polarity and inconsistencies between each of them.</p>
                        
                        <img className="sweeperimages" style={{marginTop: 30}} src={SweeperDesignAudit} />

                        <p style={{marginTop: 30}}>It also provided us with data on which components are used most frequently, 
                          allowing us to determine the elements that should be focused on first.</p>
                   </div>

                     </div>

                   </div>

                 
             {/* <img src={LululemonPhoto} /> */}
             <div className="section">
               <div className="sectionContent" id="jupyterLab">
               <h4 style={{textAlign: 'center'}}>Finding a font family</h4>

                <p> 
                One of the most important aspects of any digital product is the typography.
                
                  We researched and trialled  a number of super families to 
                  determine <br/> one that could be used across our products.
                  
                  Eventually, we settled on using <a className = "linkrel"  href="https://rsms.me/inter/" target="_blank">Inter</a> for its versatility,
                  readability at <br/> smaller font sizes, and its numerous OpenType
                    features.
                  </p>

                  <img className="sweeperimages" style={{marginTop: 30}} src={SweeperInter}/>
               </div>
               
             </div>
             <div className="sectionme">
                     <div className="sectionContents">
                       <h4 style={{textAlign: 'center'}}>Building a colour palette</h4>
                       <p>Before creating our palette, we first had to determine
                          the colours that we wanted to support, such as:</p>

                          <ul>
                            <li>Primary or accent colours</li>
                            <br/>
                            <br/>
                            <li>Grays</li>
                            <br/>
                            <br/>
                            <li>State colours (such as success, info, error & warning)</li>
                            <br/>
                            <br/>
                            <li>Secondary colours</li>
                          </ul>

                          <img className="sweeperimages" src={SweeperColorPallete}/>
                          <p>
                          Once we had done this, we then needed to create the different accent
                           from each of the base colours. Therefore, each base colour would have 
                           9 accents (e.g. green-100 to green-1000) to provide us with plenty of 
                           versatility for each base colour.


                          </p>
                          <p>
                          To make it easier to apply to WCAG colour accessibility guidelines, each colour
                          and it's accents were marked with it's compliance score (e.g. is this colour AAA or AA compliant?)
                          </p>

                       </div>
                       </div>

                       <div className="section3">
                     <div className="sectionContent3">
                       <h4 style={{color: 'white', textAlign: 'center'}}>
                       Creating components
                       </h4>

                       <p style={{color: 'white'}}>
                       Our design audit had provided us with a list of components currently being
                        used that we would need to redesign, but I also carried out a lot of research
                         on other design systems to collate data on other components that we may need
                          in our products.
                       </p>
                       <div className="horizGallery">
                   <SRLWrapper>
                     <img className="sweeperimage3" src={SweeperBadge} />
                    <img className="sweeperimage3" src={SweeperButtons} />
                    <img className="sweeperimage3" src={SweeperData} />
                    <img className="sweeperimage3" src={SweeperNotifcation} />
                    <img className="sweeperimage3" src={SweeperPagination} />
                    <img className="sweeperimage3" src={SweeperTabs} />
                    
                 </SRLWrapper>

               
               </div>
               <p style={{color: 'white'}} >There was also an organic nature to this, where components would be
                    created for the design system when and where they're needed.</p>
                       


                     </div>
                     </div>



             <div className="section">
               <div className="sectionContent">
                    <h4 style={{textAlign: 'center'}}>Adding documentation for developers</h4>

                    <p>
                    Having your one source of truth in Figma is great for
                     the designers but not very accessible to developers for numerous reasons.
                    </p>

                    <p>
                    To combat this we created internal documentation to showcase
                     the design system components in a more accessible method, as well
                      as explain best practices, show code examples and link to resources.
                    </p>

                    <div className="horizGallery">
                   <SRLWrapper>
                     <img className="sweeperimage3" src={SweeperDocumentation1} />
                    <img className="sweeperimage3" src={SweeperDocumentation2} />
                    <img className="sweeperimage3" src={SweeperDocumentation3} />
                    <img className="sweeperimage3" src={SweeperDocumentation4} />
                    <img className="sweeperimage3" src={SweeperDocumentation5} />
                    
                    
                 </SRLWrapper>

                 

               
               </div>

              


               </div>
             </div>
             <div className="sectionme">
                     <div className="sectionContents">
                     <h4 style={{textAlign: 'center'}}>Using the design system in the wild</h4>
                 <p style={{textAlign: 'center', fontWeight: 300, fontSize: 15}}>The first product I started to work on after we had 
                   created the design system was the <span className="bg-yellow">Interaction Editor</span>.</p>
                  
                   <img className="sweeperimages" src={SweeperPreview}/>


                     <div style={{marginBottom: 30}} className="horizGallery">
                   <SRLWrapper>
                     <img className="sweeperimage3" src={SweeperPreview1} />
                    <img className="sweeperimage3" src={SweeperPreview2} />
                    <img className="sweeperimage3" src={SweeperPreview3} />
                    <img className="sweeperimage3" src={SweeperPreview4} />
                    <img className="sweeperimage3" src={SweeperPreview5} />
                    
                    
                 </SRLWrapper>

               
               </div>
               <p style={{textAlign: 'center', fontWeight: 300, fontSize: 15}}>This meant more time could be shifted towards higher complexity 
                 tasks such as UX thinking, structure and design.</p>
                       </div>
                       </div>

             <div className="section3">
               <div className="sectionContent3">
                 <h4 style={{color: 'white', textAlign: 'center'}}>In Conclusion</h4>
                 <p style={{color: 'white'}} >Creating our design system had a large impact on the overall company.
                    It allowed us to create new products and features more efficiently and
                     effectively.</p>

                     <p style={{color: 'white'}}>
                     It also provided our engineering team with a one source of truth for all components
                      & styles, allowing them to code more efficiently and produce more consistent, 
                      accessible components.
                     </p>
                     
                 
                  </div>
               </div>
             </div>
            </div>
         
      );
   }
}

export default Sweepr;

