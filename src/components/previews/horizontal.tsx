import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid, Header} from 'semantic-ui-react';
import '../../styles/preview/horizontal.scss';

/** Interfaces */
interface Props {
     poster : any;
}

class Horizontal extends Component < Props > {
     public render() {
          const {poster} = this.props;
          const imageBackground = poster.image;

          return (
               <div>
                    <Grid columns={2} className="preview-horizontal">
                         <Grid.Column
                              className="image-half"
                              style={{
                              backgroundImage: 'url( ' + imageBackground + ' )',
                              backgroundSize: (poster.scale === '1' || poster.scale === 1)
                                   ? 'cover'
                                   : (poster.scale * 20) + 150 + '%'
                         }}/>
                         <Grid.Column className="text-half">
                              <div className="header">
                                   <div className="logo-holder">
                                        <span>Moments Matter</span>
                                        <img src="/xpancan-logo.png.pagespeed.ic.-2mEIsELsy.png" alt=""/>
                                   </div>
                              </div>
                              <Header as={'h2'} className="title" textAlign='left' content={poster.title}/>
                              <p className="content">{poster.message}</p>
                         </Grid.Column>
                    </Grid>
                    <Grid columns={2} id="final-horizontal">
                         <Grid.Column
                              className="image"
                              style={{
                              backgroundImage: 'url( ' + imageBackground + ' )',
                              backgroundSize: (poster.scale === '1' || poster.scale === 1)
                                   ? 'cover'
                                   : (poster.scale * 20) + 150 + '%'
                         }}/>
                         <Grid.Column className="body-text">
                              <div className="header">
                                   <div className="logo-holder">
                                        <span>Moments Matter</span>
                                        <img src="/xpancan-logo.png.pagespeed.ic.-2mEIsELsy.png" alt=""/>
                                   </div>
                              </div>
                              <Header as={'h2'} className="title" content={poster.title}/>
                              <p className="content">{poster.message}</p>
                         </Grid.Column>

                    </Grid>
               </div>
          );
     }
}

const mapProps = (poster : any) => ({poster: poster.rootReducer.poster});
export default connect(mapProps, null)(Horizontal);