import React from 'react'

import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import SimpleReactLightbox from "simple-react-lightbox";


import Resume from './Resume';

import Portfolio from './Portfolio';

import johnsonjohnson from './johnsonjohnsons';
import lululemon from './lululemon';
import sweeper from './sweeper';
import aetna from './aetna';
import Snapchat from './Snapchat';


class ContentWrapper extends React.Component {
   isMainPage(currentRoute) {
      return ['/', '/contact', '/resume'].includes(this.props.location.pathname);
   }

   constructor(props) {
        super(props)
        this.myRef = React.createRef()
   }

   componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
         this.myRef.current.scrollTop = 0;
      }
   }

   render() {
      return (
         <SimpleReactLightbox>      
            <div id="wrapper" className={this.isMainPage() ? 'bigNav' : 'smallNav'} ref={this.myRef}>
               <TransitionGroup className="transition-group">
                  <CSSTransition
                  key={this.props.location.key}
                  timeout={{ enter: 600 }}
                  classNames="fade"
                  >
                     <section className="route-section">
                        <Switch location={this.props.location}>
                           <Route exact path="/" component={Portfolio} />
                           <Route path="/resume" component={Resume} />
                           <Route path="/johnson" component={johnsonjohnson} />
                           <Route path="/lululemon" component={lululemon} />
                           <Route path="/sweepr" component={sweeper} />
                           <Route path="/aetna" component={aetna} />
                           <Route path="/Snapchat" component={Snapchat} />
                           
                        </Switch>
                     </section>
                  </CSSTransition>
               </TransitionGroup>
            </div>
         </SimpleReactLightbox>
      );
   }
}

export default withRouter(ContentWrapper);
