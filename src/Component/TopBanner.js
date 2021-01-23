import React, { Component } from 'react'

import { Link } from 'react-router-dom';

import { ReactComponent as BackArrow} from "../Images/backArrow.svg";

class TopBanner extends Component {
   render(props) {
      const { bgColor, image, arrowColor } = this.props;

      var style = {
         backgroundColor: bgColor,
         backgroundImage: `url(${image})`
      };

      return (
         <div className="topBanner" style={ style }>
           <Link className="backArrow" to="/">
              <BackArrow fill={arrowColor} />
           </Link>
         </div>
      );
   }
}

export default TopBanner;