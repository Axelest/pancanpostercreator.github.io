import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Header } from 'semantic-ui-react';
import '../../styles/preview/horizontal.scss';

/** Interfaces */
interface Props {
     poster: any;
}

class Horizontal extends Component<Props> {

     constructor(props: Props) {
          super(props);
     }



     public render() {
          const { backgroundImg, title, message } = this.props.poster;

          return (
               <div>
                    <Grid columns={2} className="preview-horizontal">
                         <Grid.Column
                              id="preview-horizontal"
                              className="image-half"
                              style={{
                                   backgroundImage: 'url( ' + backgroundImg + ' )'
                              }} />
                         <Grid.Column className="text-half">
                              <div className="header">
                                   <div className="logo-holder">
                                        <span>Moments Matter</span>
                                        <img
                                             src="https://0b9aafecab229788ebf1-90f622f94aeb4d165ef7469777c28f31.ssl.cf2.rackcdn.com/poster-creator/pancan-logo.png"
                                             alt="" />
                                   </div>
                              </div>
                              <Header as={'h2'} className="title" textAlign="left" content={title} />
                              <p className="content">{message}</p>
                         </Grid.Column>
                    </Grid>
                    <Grid columns={2} id="final-horizontal">
                         <Grid.Column
                              className="image"
                              style={{
                                   backgroundImage: 'url( ' + backgroundImg + ' )'
                              }} />
                         <Grid.Column className="body-text">
                              <div className="header">
                                   <div className="logo-holder">
                                        <span>Moments Matter</span>
                                        <img
                                             src="https://0b9aafecab229788ebf1-90f622f94aeb4d165ef7469777c28f31.ssl.cf2.rackcdn.com/poster-creator/pancan-logo.png"
                                             alt="" />
                                   </div>
                              </div>
                              <Header as={'h2'} className="title" content={title} />
                              <p className="content">{message}</p>
                         </Grid.Column>
                    </Grid>
               </div>
          );
     }
}

const mapProps = (poster: any) => ({ poster: poster.rootReducer.poster });
export default connect(mapProps, null)(Horizontal);
