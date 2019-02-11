import React, {Component} from 'react';
import {Container} from 'semantic-ui-react';
import {connect} from 'react-redux';

type Props = {
     poster: any;
}
class Preview extends Component < Props > {

     public render() {
          const {poster} = this.props;
          const imageBackground = (poster.layoutType === 2 || poster.layoutType === 4)
               ? poster.image
               : '';
          const message = (poster.layoutType === 4)
               ? 'I am an advocate and I will speak up'
               : poster.message;

          return (
               <Container className="preview-container">
                    <div
                         id="final-poster"
                         className={(poster.theme === 'pancan-purple')
                         ? poster.theme + '-bck poster-preview-holder'
                         : poster.theme + '-bck poster-preview-holder'}
                         style={{
                         backgroundImage: 'url( ' + imageBackground + ' )'
                    }}>
                         <div className="inner-poster-holder">
                              <div
                                   className={(poster.theme === 'pancan-purple')
                                   ? poster.theme + '-bck text-holder'
                                   : poster.theme + '-bck text-holder'}>
                                   {message}
                              </div>
                              <div className="hashtag-holder">
                                   <p>#WorldCancerDay</p>
                                   <p>#IAmAndIWill</p>
                              </div>
                         </div>
                         <div className="poster-footer">
                              <p>
                                   Join us every day at</p>
                              <p>www.pancan.org</p>
                              <div className="footer-logo">
                                   <img src={poster.logo} alt="Org logo"/>
                              </div>
                         </div>
                    </div>

               </Container>
          );
     }
}

const mapStateToProps = (state : any) => ({poster: state.rootReducer.poster});

export default connect(mapStateToProps, null)(Preview);