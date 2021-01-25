import React, {Component} from 'react';
import { SRLWrapper } from "simple-react-lightbox";

import TopBanner from './TopBanner';

// import JupyterTeam from "../images/jupyter/jupyterTeam.jpg";
// import old from "../images/jupyter/old.png";
// import newJ from "../images/jupyter/new.png";
// import nbtoolbar from "../images/jupyter/nbtoolbar.png";
// import top_nav from "../images/jupyter/top_navbar.png";
// import files from "../images/jupyter/files.png";
// import image from "../images/jupyter/image.png";
// import terminal from "../images/jupyter/terminal.png";
// import navbars from "../images/jupyter/navbars.png";
import AetnaHeader from '../Images/Aetna/aetna-logo.svg';
// import brandGuide from "../files/jupyter_brand_guide.pdf";
import AetnaIntro from '../Images/Aetna/AetnaIcon.svg'
import AetnaData from '../Images/Aetna/aetna-data.png'
import AetnaMap from '../Images/Aetna/aetna-BrainMap.jpg'
import AetnaGraph from '../Images/Aetna/aetna-graph.png'
import AetnaSketch from '../Images/Aetna/aetnasketch.jpg'
import AetnaFlow from '../Images/Aetna/aetna-flow.jpg'
import CoraNotification from '../Images/Aetna/Cora_Notification.png'
import AetnaNotification from '../Images/Aetna/aetna-notification.png'
import Aetnafinish from '../Images/Aetna/Aetna-Health.png'

import '../stylesheet/aetna.css';

class Aetna extends Component{
   render() {
      return (
         <div className="jupyter">
            <div className="innerWrapper">
             <TopBanner image={AetnaHeader} bgColor="#FF9445" arrowColor="#fff4ec"/>
             <div className="section">
               <div className="sectionContent">
         
             <h3>Aetna Health - Colorectal Cancer application</h3>
                  <img style={{width: 500 }} src={AetnaIntro} />

                <p>
                Colorectal cancer is the second leading cause of deaths from cancer in the US. 
                How can we use Aetna's resources to help increase screenings?
                </p>

                
                <div className="container-top">
                  <div>
                  <h4>My Role</h4>
                  <p>
                    UI design Intern
                  </p>

                  </div>
                
                   <div>
                   <h4>Timeline</h4>
                  <p>June 2015 - August 2015</p>

                   </div>
                  <div>
                   <h4>Team</h4>
                  <ol>
                    <li>5 UI designers</li>
                    <li>3 Copy writers</li>
                    <li>5 UX designers</li>
                    <li>3 Accessibility testers</li>
                  </ol>

                   </div>
                 <div>
                 <h4>Tools</h4>
                  <ol>
                    <li>Sketch</li>
                    <li>Invision</li>
                    <li>Github</li>
                  </ol>

                 </div>
                 </div>
                  

              
                  
                 
                

               </div>
             </div>
             {/* <img src={JupyterTeam} /> */}
             <div className="section">
               <div className="sectionContent" id="jupyterLab">
               
                  <h4>The Overview</h4>
                  <p>
                  I joined Aetna Digital's design team as a UI design intern as the team worked to add new
                   features to the Aetna Health application. It was an incredible opportunity — taking
                    the complexities of health insurance and creating a user-friendly application is no 
                    easy task. The design team referred to itself as team MISL: Make Insurance Suck Less.
                  </p>

                  <p>
                  This case study focuses on the intern capstone project. I worked with five interns 
                  from various other fields; we had interns from development, business, and marketing
                   represented. We were tasked with designing a solution to some sort of health equity problem.
                  </p>

                  <h4>Understanding the Problem</h4>
                  <p>A team member had a family member die from colorectal cancer, so we decided to look 
                    into the problems affecting this cancer. To learn more, we began researching some 
                    statistics. (source)</p>

                    <div className="statistics">
                      <div>
                        <h3>50+</h3>
                        <p>Average Age when Diagnosed</p>
                      </div>

                      <div>
                        <h3>2nd</h3>
                        <p>Leading Cause of Cancer Death</p>
                      </div>

                      <div>
                        <h3>65%</h3>
                        <p>Five-Year Survival Rate</p>
                      </div>

                      <div>
                        <h3>90%</h3>
                        <p>Five-Year Survival Rate, with early screenings</p>
                      </div>




                    </div>

                    <div className="info-detail">
                      <div>
                        <h4>Diagnosis & Mortality by Race</h4>
                        <p>Diving deeper into our research, we also found that colorectal cancer
                           disproponately affects men and women of color when compared with the non-hispanic 
                           white population. Incidence rates are 20% higher for black populations, and 
                           mortality rates are 40% higher for black communities.</p>
                           <p>
                           Research suggests these differences largely reflect differences in socioeconomic
                            status and education levels. This largely stems from the prevalence of risk
                             factors in these communities (smoking, obesity, etc.) and the lack of screenings.
                           </p>
                      </div>

                      <div>
                        <h4>Colorectal Cancer Rates for Combined Sexes</h4>
                        <img className="graph" src={AetnaData}/>
                      </div>

                    </div>

                    <h4>We're not going to fix socioeconomic disparities with an app.</h4>
                    <p>Solving the root causes of socioeconomic disparities via a summer internship
                       and iOS application is unlikely. This presented a problem — if our goal is 
                       to find an equitable solution to a health disparity facing our nation, do 
                       we move forward with our research, or go back to the drawing board to find 
                       another problem. To be entirely honest, we were short for time at this point, 
                       so we chose to move forward and research why people from these communities are 
                       less likely to get colorectal cancer screenings. We learned the following.</p>

                       <div className="screening">
                       <div>
                       <h4>Screening Obstacles</h4>
                       <ul>
                         <li>Lack of transportation to screening centers</li>
                         <br/>
                         <li>Cost of colonoscopy</li>
                         <br/>
                         <li>Overall, stigmas surrounding a screening</li>
                       </ul>

                       </div>
                      
                        <div>
                        <h4>Screening Stigmas</h4>
                       <ul>
                         <li>The test is difficult, painful, or embarrassing</li>
                         <br/>
                         <li>Screenings are only necessary if you see signs or symptoms</li>
                         <br/>
                         <li>Screenings are expensive & time consuming</li>
                         <br/>
                         <li>A lack of family history makes screenings unnecessary</li>
                       </ul>

                        </div>

                       </div>

                       <h4>Wrapping our heads around the data</h4>
                       <p>This is a lot of data, and a very complex problem. 
                         To brainstorm solutions, we decided to use a good, 'ol-fashioned 
                         whiteboard so we could get ideas and thoughts out of our minds. 
                         Here's a picture of our brain map, cleaned up a little bit for readability:</p>
                         
                         <img src={AetnaMap} />

                         <div className="Applicants">
                           <div>
                             <h4>Our Plan</h4>
                             <p>We devised a plan that we think helps meet our goal 
                               while using Aetna's existing resources, therefore helping
                                Aetna as a whole. It consists of 2 parts.</p>
                           
                           
                           
                             <h4>(1) Increasing Testing Availability</h4>
                             <p>Our goal is to be equitable for those who would not normally
                                have access to testing. By utilizing resources such as 
                                take-home tests or Aetna'a Cora mobile clinic, we 
                                can increase testing while tackling the major problems 
                                of transportation and cost.</p>
                             

                           
                             <h4>(2) Spreading Awareness</h4>
                             <p>Many of the stigmas surrounding colorectal cancer screenings
                                stem from misinformation being passed by word of mouth. 
                                By utilizing the Aetna Health application and a targeted 
                                ad campaign, we can increase awareness for the types of 
                                screenings available while displaying the importance of 
                                being screened.</p>

                           </div>

                           <div>
                             <img className="graphpic" src={AetnaGraph} />
                           </div>


                         </div>

                         <h4>Utilizing Aetna's design system to create a user flow</h4>
                         <p>I was tasked with creating a user flow to increase awareness through the 
                           Aetna Health application. Luckily, the design team had already solidified 
                           a user flow they called 'Next Best Action', or NBA.</p>
                           <p>
                           NBA flows are designed to inform users of actions they can take 
                           to improve their health. It generally starts with a notification
                            that opens a pop-up in the app. This pop-up shares general 
                            information with the option of viewing more, or completing a
                             designated action.
                           </p>

                           <img src={AetnaSketch}/>

                           <div className="multiple-flow">
                            <div className="body-text"> 
                              <h4>Creating Multiple Flows</h4>
                              <p>To align with our two goals, we wanted two flows. 
                                Each requires a user to be 50+ years old with no record of 
                                colorectal cancer screenings in the previous 7 years, or a 
                                relative who fits that criteria.
                                <br/>
                                <br/>

                                
                                If the Cora truck has a planned stop within 10 miles of this individual, 
                                they'll be notified with information related to the mobile clinic.
                                <br/>
                                <br/>
                                
                                Otherwise, the user will receive information and statistics
                                 regarding the importance of screenings.
                                </p>

                            </div>

                            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                              <img className="aetna-flow" src={AetnaFlow}/>

                            </div>
                           </div>

                           <div className="flexme">
                             <div>
                               <h4>Cora Truck is Near Notification</h4>
                               <p>Goals:</p>
                               <ul>
                                 <li>Display time, date, and location of Cora stop</li>
                                 <br/>
                                 <li>Emphasize importance of screening</li>
                                 <br/>
                                 <li>Intrigue user to learn more</li>
                               </ul>
                               <p>Notification design:</p>

                               <img className="images" src={CoraNotification}/>

                              <p>Next Step:</p>
                              <ul>
                                <li>Display an article that tackles stigmas and persuades the
                                   user to schedule an appointment with their medical center</li>
                              </ul>
                             </div>

                             <div>
                               <h4>General Information Notification</h4>
                               <p>Goals:</p>
                               <ul>
                                 <li>Display numerous options for screenings</li>
                                 <br/>
                                 <li>Emphasize importance of screening</li>
                                 <br/>
                                 <li>Intrigue user to learn more</li>
                               </ul>
                               <p>Notification design:</p>

                               <img className="images" src={AetnaNotification}/>

                              <p>Next Step:</p>
                              <ul>
                                <li>Display a pop-up with a map and further information and 
                                  ability to add the event to a calendar</li>
                              </ul>
                             </div>


                           </div>

                           <h4>Completing the User Flow</h4>
                           <p>
                           The pop-up has much more flexibility than the notification for actually 
                           designing a user interface. Based on the Aetna Health design standards, 
                           these pop-ups have a large image covering the top portion of the screen, 
                           followed by a few bullet points and a large call-to-action. I followed 
                           this design because it helps the team meet our goals - the large visual 
                           is appealing and makes it easy to display information in a quick, easily-readable way.
                           </p>
                           <p>
                           The pop-up has much more flexibility than the notification for
                            actually designing a user interface. Based on the Aetna Health design 
                            standards, these pop-ups have a large image covering the top portion
                             of the screen, followed by a few bullet points and a large call-to-action.
                              I followed this design because it helps the team meet our goals
                               - the large visual is appealing and makes it easy to display
                                information in a quick, easily-readable way.
                           </p>

                           <p>
                           For either user flow, the article was out of my hands. 
                           The copy team is in charge of producing this information, 
                           so I simply designed the user interface for each of them. 
                           The information is expected to be short and succinct with
                            more resources available. I still wanted users to have a 
                            quick call-to-action, so the information and resources are 
                            split between two different containers.
                           </p>

                           <img src={ Aetnafinish}/>


                      
                       


               </div>


               
               </div>
             </div>
          
            </div>
        
      );
   }
}

export default Aetna;
