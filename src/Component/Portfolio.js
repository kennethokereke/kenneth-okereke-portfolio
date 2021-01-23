import React from 'react'
import '../stylesheet/Portfolio.css';
import Card from './Card'
import FilterBar from './FilterBar'
import { ReactComponent as Heart } from '../Images/portfolio/heart.svg'
import { ReactComponent as ReactIcon } from '../Images/portfolio/React-icon.svg'
import Johnson from '../Images/JohnsonJohnson/johnson-johnson.svg'
import Lululemon from '../Images/lululemon/lululemon-logo.svg'
import Aetna from '../Images/Aetna/aetna-logo.svg'
import Sweepr from '../Images/Sweeper/sweepr-logo.png'
import Snapchat from '../Images/Snapchat/snapchat-logo-.svg'



const projects = [
   {
      id: "johnson",
      title: 'Johnson & Johnson',
      description: "My work as a UI/UX Design Intern",
      color: "#a30303",
      type: "Work",
     logo: Johnson
   },
   {
      id: "lululemon",
      title: 'Lululemon',
      description: "My work as a UX Designer & Mobile Developer",
      color: "#d41515",
      type: "Work",
      logo: Lululemon

   },
   {
      id: "aetna",
      title: 'Aetna',
      description: "My work as a UX design intern",
      color: "#0A2F3C",
      type: "Work",
      logo: Aetna
  
   },
   {
      id: "sweepr",
      title: 'Sweepr',
      description: "My work as a UI/UX Designer ",
      color: "#FF9445",
      type: "Work",
      logo: Sweepr
    
   },
   {
      id: "snapchat",
      title: 'Snaphat Case Study',
      description: "Design and Programmed the application",
      color: "#EE5691",
      type: "Project",
      logo: Snapchat,
    //   link: "https://dribbble.com/spoorthyv"
   }
];

class Portfolio extends React.Component {
   state = { filter: "" };

   setFilter = (term) => {
      if (this.state.filter === term) {
         this.setState({ filter: "" });
      } else {
         this.setState({ filter: term });
      }
   }

   renderCards() {
      return projects.filter(project => {
         return project.type.includes(this.state.filter)
      })
      .map(project => {
         return (
            <Card project={project} key={project.id}/>
         );
      });
   }

   render() {
      return (
         <div id="portfolio">
            <div id="portfolioBody">
               <h3 id="header">Here's what I've been working on:</h3>
               <FilterBar clickHandler={this.setFilter} currFilter={this.state.filter}/>
               <div id="cardGrid">
                  {this.renderCards()}
               </div>
            </div>
            <div id="footer">
               <a href="https://github.com/spoorthyv/spoorthyv.github.io" target="_blank">
                  <h4>This site was built with <Heart id="heartIcon"/> from scratch using <ReactIcon id='reactIcon'/></h4>
               </a>
            </div>
         </div>
      );
   }
}

export default Portfolio;

