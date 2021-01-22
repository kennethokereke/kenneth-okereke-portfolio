import React from 'react'
import '../stylesheet/Portfolio.css';
import Card from './Card'
import FilterBar from './FilterBar'
import {ReactComponent as Heart} from '../Images/portfolio/heart.svg'
import {ReactComponent as ReactIcon} from '../Images/portfolio/React-icon.svg'

const projects = [
   {
      id: "Johnson & Johnson",
      title: 'Johnson & Johnson',
      description: "My work as a UI/UX Design Intern",
      color: "#00abcc",
      type: "Work",
    //   logo: squidLogo
   },
   {
      id: "Lululemon",
      title: 'Lululemon',
      description: "My work as a UX Designer & Mobile Developer",
      color: "#0081F8",
      type: "Work",
    //   logo: ebayLogo
   },
   {
      id: "Aetna",
      title: 'Aetna',
      description: "My work as a UX design intern",
      color: "#0A2F3C",
      type: "Work",
    //   logo: uberLogo
   },
   {
      id: "Sweeper",
      title: 'Sweeper',
      description: "My work as a UI/UX Designer ",
      color: "#FF9445",
      type: "Work",
    //   logo: jupyterLogo
   },
   {
      id: "Snachat Case Study",
      title: '"Snachat Case Study',
      description: "Design and Programmed the application",
      color: "#EE5691",
      type: "Project",
    //   logo: dribbbleLogo,
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

