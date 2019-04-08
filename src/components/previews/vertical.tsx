import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header } from 'semantic-ui-react';
import '../../styles/preview/vertical.scss';

/** Interfaces */
interface Props {
     poster: any;
}

class Vertical extends Component<Props> {

     constructor(props: Props) {
          super(props);
     }



     public render() {
          const { backgroundImg, title, message } = this.props.poster;
          return (
               <Container>
                    <div className="preview-vertical">
                         <div
                              id="preview-vertical"
                              className="image-half"
                              style={{
                                   backgroundImage: 'url( ' + backgroundImg + ' )'
                              }}>
                              <div className="header">
                                   <div className="logo-holder">
                                        <span>Moments Matter</span>
                                        <img
                                             src="https://0b9aafecab229788ebf1-90f622f94aeb4d165ef7469777c28f31.ssl.cf2.rackcdn.com/poster-creator/pancan-logo.png"
                                             alt="" />
                                   </div>
                              </div>
                         </div>
                         <div className="body-copy">
                              <Header as={'h2'} className="title" textAlign="center" content={title} />
                              <p className="content">{message}</p>
                         </div>
                    </div>

                    <div className="final-vertical" id="final-vertical">
                         <div
                              className="image-half"
                              style={{
                                   backgroundImage: 'url( ' + backgroundImg + ' )'
                              }}>
                              <div className="header">
                                   <div className="logo-holder">
                                        <div className="white-drop" />
                                        <span>Moments Matter</span>
                                        <img
                                             src="https://0b9aafecab229788ebf1-90f622f94aeb4d165ef7469777c28f31.ssl.cf2.rackcdn.com/poster-creator/pancan-logo.png"
                                             alt="" />
                                   </div>
                              </div>
                         </div>
                         <div className="body-copy">
                              <h2 className="title">{title}</h2>
                              <p className="content">{message}</p>
                         </div>
                    </div>
               </Container>
          );
     }
}

const mapProps = (poster: any) => ({ poster: poster.rootReducer.poster });
export default connect(mapProps, null)(Vertical);
