import React, {Component} from 'react';
import { SRLWrapper } from "simple-react-lightbox";

import TopBanner from './TopBanner';

import LululemonPhoto from "../Images/lululemon/lululemonphoto.png";
// import old from "../images/jupyter/old.png";
// import newJ from "../images/jupyter/new.png";
// import nbtoolbar from "../images/jupyter/nbtoolbar.png";
// import top_nav from "../images/jupyter/top_navbar.png";
// import files from "../images/jupyter/files.png";
// import image from "../images/jupyter/image.png";
// import terminal from "../images/jupyter/terminal.png";
// import navbars from "../images/jupyter/navbars.png";
import LululemonHeader from '../Images/lululemon/lululemon-logo.svg';
import LululemonClient from '../Images/lululemon/lululemonclient.png'
import rightArrow from "../Images/rightArrow.svg";
import Lululemoncover from '../Images/lululemon/lululemoncover.png'
import Lululmoncompetitive from '../Images/lululemon/lululemoncompetitive.png'
import LululemonComp from '../Images/lululemon/lululemoncomp.png'
import LulelemonDefine from '../Images/lululemon/lululemondefine.png'
import LululemonPersona1 from '../Images/lululemon/lululemonpersona1.png'
import Lululemonmaps from '../Images/lululemon/lululemonmaps.png'
import LululemonExperience from '../Images/lululemon/lululemonexperience.png'
import LululemonDesign from '../Images/lululemon/lululemondesign.png'
import LululemonSketch from '../Images/lululemon/lululemonsketch.png'
import LululemonDelivery from '../Images/lululemon/lululemondelivery.png'
import LululemonSketch2 from '../Images/lululemon/lululemonsketch2.png'
import LululemonWireframe from '../Images/lululemon/lululemonwireframe.png'
import LululemonMidWireframe from '../Images/lululemon/lululemonmidwireframe.png'
import LululemonMidWireframe2 from '../Images/lululemon/lululemonmidwireframe2.png'
import LululemonDesignWireframe from '../Images/lululemon/lululemondesignwireframe.png'
import LululemonFinalDesign from '../Images/lululemon/lululemonfinaldesign.png'
// import brandGuide from "../files/jupyter_brand_guide.pdf";

import '../stylesheet/Lululemon.css';

class Lululemon extends Component {
   render() {
      return (
         <div className="jupyter">
            <div className="innerWrapper">
             <TopBanner image={LululemonHeader} bgColor="#FF9445" arrowColor="#fff4ec"/>
             <div className="section">
               <div className="sectionContent">
                  <h1>Lululemon</h1>
                  <h4>Designing a health tracking app for athletic apparel brand, Lululemon</h4>
                  <img src={LululemonPhoto} />
                 <h4>Summary</h4>
                  <p>
                  Lululemon is an athletic apparel brand, designing gear for yoga, 
                  run and training, whilst embodying the philosophy of being “a mindful movement.”
                   They want us to “push past sweaty boundaries”, to build the strength to push 
                   ourselves in other aspects of life.
                  </p>
                  <p>
                  As part of a 2 week sprint, I was tasked with creating a native mobile app for Lululemon,
                   allowing customers to track health data and book the brand’s in-store events and yoga classes. </p>

                  {/* <h4>My Role</h4> */}
                  <p>
                  Together with a team of three other UX designers, we carried out extensive user research
                   with Lululemon’s target customer base, and found that many were dedicated yogis and 
                   associated the brand with this practice. A key finding was that yoga wasn’t considered 
                   just a physical activity, but a way of life that is best practiced off the mat. 
                   Many were practicing mindfulness and meditation alongside yoga, and saw the two as 
                   running hand in hand.

                  </p>
                  <p>
                  We designed Lululemon Mind, a mindfulness app which allows users to customise meditations
                   based on their mood, and create their own meditation to suit their individual schedule.
                    (i.e. I would like a 20 minute meditation for my commute) Users highlighted the importance
                     of establishing a routine with mindfulness to reap the benefits, so we designed a streak
                      incentive where, if you completed 10 meditations, you would receive a free Lululemon
                       yoga class. You could book these in-store events and classes on the app.
                  </p>

                  <p>
                  Read on for the full case study — or you can view the final <a href="https://projects.invisionapp.com/share/EVXCRMJR4GW#/screens" target="_blank">clickable prototype here!</a>
                  </p>
                  <img src={LululemonClient} />

                  <h4>The Brief</h4>

                  <p>
                  Myself and three other UX designers were tasked with building a native mobile app
                  for Lululemon, offering customers a way to track their health and book participation
                  in in-store events
                  </p>

                  <p><h4>Sprint Length:</h4> 2 weeks </p>

                  <h4>Skills Required</h4>
                  <ol>
                    <li>   Business Analysis; Competitive Analysis; </li>
                    <li> Screener Survey; </li>
                    <li>User Interviews; </li>
                    <li> Contextual Inquiry;</li>
                    <li> Personas; Affinity Mapping; </li>
                    <li>Experience Mapping; Design Studio;</li>
                    <li>User Flow and Scenario; </li>
                    <li> Wireframes and Sketches; </li>
                    <li>Prototyping and Testing; Visual Design</li>
                  </ol>

                  <h4>My Role</h4>

                  <p>
                  Whilst each team member played a role in every step of the process, 
                  I took the lead on the business and competitive analysis, user interviews 
                  ,redesigned the app establishing the visual design 
                  and full style guide.
                  </p>
                  <a
                   id="dlButton"
                   href="https://docs.google.com/presentation/d/1XJZuMjVv4DdViZdE-ye7nTdZLT1YTYIO6qy0q1ZyRFA/edit?usp=sharing"
                   target="_blank"
                 >
                   View Research Presentation
                   <img src={rightArrow} />
                 </a>
                 <img src={Lululemoncover} />

                 <h4>Brand Review & Site Visit</h4>
                 <p>Lululemon is an international athletic apparel company, with their manifesto
                    centred on creating a community of health, mindfulness and living a life of possibility.
                     To design an app that was a natural extension of this, we needed to really get under the 
                     skin of the brand.</p>

                     <p>
                     By visiting three of their stores, including their flagship in Regent Street, 
                     interviewing employees and customers, and exploring their website, a few things were clear:
                     </p>

                     <ul>
                       <li><p> Lifestyle brands win big: Lululemon’s strong brand identity is their
                          selling point and key differentiator in the market. They are not just selling products, 
                          they are selling a lifestyle — a healthy lifestyle for mind, body and soul, perfectly 
                          serving the millennial consumer demographic. 
                         You become a part of the community when you purchase a product at Lulu.</p></li>
                         
                         <li>
                         <p>The Lulu community: Lululemon is a sportswear brand owning the event realm,
                          with high engagement coming from its in-store yoga classes and fitness camps.
                           Interestingly, most of the company’s retail sales are gained from interactions
                            with the classes, as they are held in-store and people shop there prior to, o
                            r following their workout.</p>
                         </li>

                         <li>Mind, body and soul: Lots of people we interviewed in-store were very aware 
                           of their mental health and practiced mindfulness. They stressed the importance 
                           of being in a good headspace before yoga, feeling they wouldn’t get the most out 
                           of their practice otherwise.</li>
                     </ul>

                     <h4>The Competitive Landscape</h4>

                     <p>We began by reviewing direct competitors to Lululemon and exploring their 
                       brand apps. Two key competitors were Nike and Under Armour — both placing among
                        the top 15 millennial clothing brands of 2018, with Nike ranking as the 
                        №1 brand for Generation Z. Both brands dominate the digital arena with 
                        successful fitness tracking apps.</p>

                        <img src={Lululmoncompetitive} />
                        <p style={{textAlign: "center", fontSize: "14px", color: 'gray'}}>Competitor fitness tracking apps, Nike and Under Armour</p>

                        <p>It was clear that Lululemon’s competitors focused specifically on fitness 
                          tracking — perhaps there was a gap in the market for a company to align with 
                          something a little different.</p>

                          <p>With Lulu’s key brand principles and ethos in mind, we felt a mindfulness 
                            app would fulfil the brief and give their customers something they wanted.</p>

                            <p>We moved on to look at a host of mindfulness app competitors, including 
                              Calm, Headspace, and Simple Habit. It’s a saturated market, growing every day, 
                              but it became apparent that there was no sportswear brand that was offering one, 
                              or had gone for more of a lifestyle slant with their app.</p>

                              <img src={LululemonComp} />

                              <h4>Screener Survey and User Interviews</h4>
                              <p>To understand our potential users and problems that the app could solve,
                                 we conducted a survey and carried out 16 interviews with people who matched 
                                 the Lulu customer. We asked questions around mindfulness, but also wanted 
                                 to explore their general attitudes and behaviour towards health and fitness.</p>

                                 <p>A key finding from the survey was that 74% out of 65 respondents were
                                    ‘very conscious’ to ‘extremely conscious’ of their mental wellbeing.</p>

                                    <p>We synthesised our findings into an affinity map, and found three key 
                                      themes across the interviews:</p>

                                      <ul>
                                        <li>Mindfulness — yes. E-commerce — no. Supporting our in-store findings, 
                                          lots of our interviewees practiced mindfulness using apps. People voiced 
                                          concerns over an app created by a sporting retailer, worrying that there would
                                           be an e-commerce slant to it. They didn’t want to find that they were being sold to.</li>

                                           <blockquote>
                                             <p>“There’s no point of a mindfulness app that is also e-commerce”</p>
                                           </blockquote>

                                           <li>
                                           Tailored and personalised features are a must! Lots of our interviewees were
                                            busy working professionals who had very full schedules and little time. 
                                            When using fitness apps, they expected to be able to customise their workouts
                                             to fit their lifestyle, and valued this. They would expect this from a meditation app also.
                                           </li>

                                           <blockquote>
                                             <p>
                                             “I find it really motivating when I’m able to customise an app with my preferences”

                                             </p>
                                           </blockquote>

                                           <li>
                                           Working towards a clear goal is motivating Most people said they would
                                            often stop using their fitness or mindfulness apps unless they were 
                                            working towards a clear goal — this helped them get motivated 
                                            (i.e. training for a marathon would help them keep the routine.) 
                                            Mindfulness is tricky in this respect, given there is no end point 
                                            or final goal with mental health, however we started to think about 
                                            how we could incentivise people to continue to use the app.

                                           </li>
                                      </ul>
                                      <img src={LulelemonDefine} />

                                      <p>
                                      We collated our insights from the survey, site visits and user interviews 
                                      and we created a persona — meet Kimberley. She embodies our consistent 
                                      findings from the research and user demographics. She’s a 29 year old 
                                      full-time nurse living in London. She shops with Lululemon, and is 
                                      aware they do in-store yoga classes, although she has never attended one.
                                      </p>

                                      <h4>The Persona</h4>
                                      <img src={LululemonPersona1} />

                                      <ul>
                                        <li>Her main want is to practice meditation so she can quiet her
                                           mind before yoga and make the most out of her class.</li>
                                           <li>She’s motivated by incentives and goals.</li>
                                           <li>She’s used meditation apps before, but she doesn’t stick to a routine.</li>
                                      </ul>

                                      <p>
                                      We created an empathy map to distil and categorise our knowledge of Kimberley 
                                      into one place and prioritise her needs. Along with the main points above, 
                                      it brought a few additional considerations to the fore.
                                      </p>

                                      <img src={Lululemonmaps} />

                                      <ul>
                                        <li>Lulu have free in-store yoga classes but she never knows when they are</li>
                                        <li>Customising a meditation and being able to set goals would motivate her</li>
                                        <li>She likes to check which instructor will be leading the class and expects expertise</li>
                                      </ul>

                                      <p>But what does an average day look like for Kimberley? Where could we try to help her?</p>

                                      <p>We put together an experience map to illustrate Kimberley’s typical experience from 
                                        finishing work to attending a yoga class.</p>

                                        <img src={LululemonExperience} />

                                        <p>The black line indicates her current emotional experience — from booking the class when 
                                          she’s on a high, thereafter it’s downhill all the way. She ends up nearly as miserable as 
                                          when she started. The green line shows how Kimberley’s experience could be improved by 
                                          using our mindfulness app so that she finishes her yoga on a high.</p>

                                          <p>
                                          Even the thought that the next class might be expensive has been mitigated
                                           by the good experience she’s just had — and on top of that as you’ll later 
                                           see, our app has a functionality to help her find the next freebie!
                                          </p>

                                          <blockquote>
                                            <p>
                                            "Create a mindfulness app that allows Kimberley to customise her meditations, 
                                            track her progress and get motivated to form a routine — whilst maintaining 
                                            a connection with the Lululemon brand."
                                            </p>
                                          </blockquote>


                                          <p>
                                          This challenge considered both our persona, but also the brief and findings from 
                                          the user interviews and competitive research. It was time to move onto the 
                                          ‘design’ phase of the process!
                                          </p>

                                          <img src={LululemonDesign} />

                                          <h4>Design Studio</h4>

                                          <p>Going into the Design Studio, our aim was to build something that:</p>

                                          <ul>
                                            <li>allowed customisable meditations</li>
                                            <li>motivated and potentially incentivised users to build a routine</li>
                                            <li>allowed users to book Lululemon in-store events</li>
                                          </ul>

                                          <p>The design studio was extremely useful for our team, allowing us to get 
                                            every idea we had down on paper, and then focus the vision from there.</p>

                                            <img src={LululemonSketch} />

                                            <p>We used dot voting to refine the ideas — a few key ones arose:</p>

                                            <ul>
                                              <li>Theming the Meditations…and Expert Talks? We all separated meditations 
                                                into sections relating to specific themes so users could easily navigate. 
                                                To call on the expertise that Kimberley wanted, a few of us included a 
                                                section of ‘expert talks’ — Lululemon thought leaders in the wellness 
                                                space giving talks around specific subjects — which was a feature we 
                                                carried through into the final prototype.</li>
                                                <br />

                                                <li>
                                                Streak Incentive To tackle the motivation factor, a lot of us explored
                                                 incentive schemes, and how this could tie in with the Lululemon brand.
                                                  A key idea that was taken from the design studio, was the idea of winning
                                                   lemons when you completed a meditation to form daily streaks. 
                                                   These were depicted on a lemon tree which represented your progress.
                                                    I had the idea to incentivise this further with rewarding users with 
                                                    a free Lululemon in-store class if they completed 10 meditations over 
                                                    10 days — something that would support the business goal of wanting 
                                                    people to attend their free in-store classes, as it’s a big money maker for them!
                                                </li>
                                            </ul>
                                            <img src={LululemonDelivery} />

                                            <p>We proceeded to develop a paper prototype that illustrated the 
                                              features designed in the Design Studio, and started testing with users.</p>

                                              <h4>The task</h4>

                                              <p>
                                              Our persona Kimberley is finishing work and on her commute to attend her yoga class — she 
                                              can’t quiet her mind and forget the events of a stressful day at work. We set users the
                                               task of evaluating their mood, customising a meditation for their 20 minute commute 
                                               and viewing their progress stats.
                                              </p>

                                              <img src={LululemonSketch2} />

                                              <h4>
                                              Guerilla Testing!
                                              </h4>

                                              <p>
                                              One of the ideas that divided the team was user’s earning lemons when
                                               they complete a meditation and their meditation stats being visually
                                                represented through a lemon tree.
                                              </p>

                                              <p>
                                              Our solution was to conduct a guerilla test with six unbiased users at Public Gyms who were not familiar 
                                              with the app. Five out of six not only liked the idea but intuitively understood this idea of a 
                                              tree representing their mental health which was continuously ‘growing’ and liked 
                                              the gamification of earning lemons, so we moved forward with it. It was quick and 
                                              allowed us to make a decision based on user feedback, not by our own personal hypotheses about it.
                                              </p>

                                              <h4>Mid-Fidelity Wireframes</h4>

                                              <p>Based on our feedback on the paper prototype, we could move on
                                                 to developing our mid-fidelity prototype.</p>

                                                 <img src={LululemonWireframe} />

                                                 <p>
                                                 To test our mid-fidelity prototype, I led a user shuffle with a total of eight users
                                                  with each team member testing with two users. I synthesised the findings in a
                                                   spreadsheet so we could easily collate our findings and view common themes
                                                    relating to each screen in the user flow.
                                                 </p>

                                                 <img src={ LululemonMidWireframe}/>

                                                 <h4>Key Iterations</h4>
                                                 <p>A common pain-point was that people felt three emotions were limiting,
                                                    so we added a greater variety. Users also commented that they might
                                                     be feeling a combination of a few, so in the final prototype I added 
                                                     ‘plus’ icons so it was clear they could select more than one.</p>

                                                     <img src ={LululemonMidWireframe2}/>

                                                     <p>
                                                     Users really liked the lemon tree concept representing their progress 
                                                     and being rewarded for each meditation, but there was too much going on on 
                                                     the screen. People weren’t clear that the tabs pertained to ‘weekly’ 
                                                     ‘monthly’ and ‘all time’ statistics, and found this confusing. 
                                                     We removed these and just featured your ‘total’ stats, and added a 
                                                     ‘View History’ button for users to view historical data.
                                                     </p>

                                                     <img src ={LululemonDesignWireframe}/>

                                                     <blockquote>
                                                       <p>
                                                       “I like the lemon tree — it’s organic, and like your mental health, 
                                                       there’s no end goal. It continues to grow.”

                                                       </p>
                                                     </blockquote>

                                                     <h4>Interactive Prototype</h4>
                                                     <p>You can view the final, high fidelity clickable prototype on Invision <a href="https://projects.invisionapp.com/share/EVXCRMJR4GW#/screens">here!</a></p>

                                                     <img src ={LululemonFinalDesign}/>


                                                



























               </div>
             </div>
          
             <div className="section">
               <div className="sectionContent" id="jupyterLab">
                  <h2>JupyterLab</h2>
                  <h4>The Project</h4>
                  <p>
                    My main job at Jupyter was to help build the next generation JupyterLab web application. The existing Jupyter Notebooks that all our users knew and loved allowed users to wirte and run code inline in an extremely visual and interactive way. JupyterLab builds around the notebook by adding commonly used developer tools (e.g. a terminal, file browser, text editor, etc.) in a multiwindow interface.<br /><br />
                    Our team’s job was to research, design, and develop overall interface improvement as well as JupyterLab's builtin plugins. The entire app was built with javascript using a custom framework called Phosphor.JS.<br /><br />
                    Widgets and parts of Jupyterlab I worked on: <br />
                    - Top navigation bar <br />
                    - Terminal <br />
                    - Image Viewer <br />
                    - Redid File Browser <br />
                    - Notebook widget toolbar <br />
                  </p>
               </div>
               <div className="horizGallery">
                  {/* <SRLWrapper>
                     <img src={old} />
                    <img src={newJ} />
                    <img src={nbtoolbar} />
                    <img src={top_nav} />
                    <img src={files} />
                    <img src={image} />
                    <img src={terminal} />
                 </SRLWrapper> */}
               </div>
             </div>
             <div className="section">
               <div className="sectionContent">
                  <h2>Brand Guidelines</h2>
                  <h4>The Problem</h4>
                  <p>
                    The project was suffering from a lack of consistent brand messaging.
                    Everytime a Jupyter developer needed to create Jupyter branded content they had no clue where to get design assets.
                    This resulted in dozens of wierd logos for different products, random color choices, and overall unproffesional branding.
                  </p>
                  <h4>Our Solution</h4>
                  <p>
                    First we created a new version of the logo that consolidated the best parts of all the logos in circulation. Then we created the brand book below that lays out rules for the entire project on how to use the brand and logo in an official and beautiful document. Finally, I went through all our projects assets and fixed violations of these guidelines across all of Jupyter's products.
                  </p>
                  {/* <object data={brandGuide} type="application/pdf" width="100%" height="460px" internalinstanceid="3" title="">
                      <p id="none"></p>
                  </object> */}
               </div>
             </div>
             <div className="section">
               <div className="sectionContent">
                  <h2>Navbar</h2>
                  <h4>The Project</h4>
                  <p> Redesign the navbar to the project's website at <a href="www.jupyter.org">www.jupyter.org</a> </p>
                  <h4>Our Process</h4>
                  <ol>
                    <li> Gather info from Google Analytics  to learn what pages were important and which ones were getting ignored</li>
                    <li> Talk to community  to understand which pages were important to them</li>
                    <li> Organize data  and  create options  in excel</li>
                    <li> Pick 3 favorite options </li>
                    <li> Create high-fidelity prototypes  using sketch and invision</li>
                    <li> Usertest  favorite options</li>
                    <li> Refine  design</li>
                    <li> Usertest  new design</li>
                    <li> Implement  design</li>
                  </ol>

                  
                  <div id="navbarImg">
                    {/* <img src={navbars} /> */}
                  </div>
               </div>
             </div>
            </div>
         </div>
      );
   }
}

export default Lululemon;
