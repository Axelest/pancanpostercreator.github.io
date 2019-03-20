import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container, Header} from 'semantic-ui-react';
import '../../styles/preview/vertical.scss';

/** Interfaces */
interface Props {
     poster : any;
}

class Vertical extends Component < Props > {

     public render() {
          const {poster} = this.props;
          const imageBackground = poster.image;
          return (
               <Container>
                    <div className="preview-vertical">
                         <div
                              className="image-half"
                              style={{
                              backgroundImage: 'url( ' + imageBackground + ' )',
                              backgroundSize: (poster.scale === '1' || poster.scale === 1)
                                   ? 'cover'
                                   : (poster.scale * 20) + 150 + '%'
                         }}>
                              <div className="header">
                                   <div className="logo-holder">
                                        <span>Moments Matter</span>
                                        <img src="/xpancan-logo.png.pagespeed.ic.-2mEIsELsy.png" alt=""/>
                                   </div>
                              </div>
                         </div>
                         <div className="body-copy">
                              <Header as={'h2'} className="title" textAlign='center' content={poster.title}/>
                              <p className="content">{poster.message}</p>
                         </div>
                    </div>

                    <div className="final-vertical" id="final-vertical">
                         <div
                              className="image-half"
                              style={{
                              backgroundImage: 'url( ' + imageBackground + ' )',
                              backgroundSize: (poster.scale === '1' || poster.scale === 1)
                                   ? 'cover'
                                   : (poster.scale * 20) + 150 + '%'
                         }}>
                              <div className="header">

                                   <div className="logo-holder">
                                        <div className="white-drop"/>
                                        <span>Moments Matter</span>
                                        <img src="/xpancan-logo.png.pagespeed.ic.-2mEIsELsy.png" alt=""/>
                                   </div>
                              </div>
                         </div>
                         <div className="body-copy">
                              <Header as={'h2'} className="title" textAlign='center' content={poster.title}/>
                              <p className="content">{poster.message}</p>
                         </div>
                    </div>

               </Container>
          );
     }
}

const mapProps = (poster : any) => ({poster: poster.rootReducer.poster});
export default connect(mapProps, null)(Vertical);