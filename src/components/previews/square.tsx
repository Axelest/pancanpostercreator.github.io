import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../../styles/preview/square.scss';

/** Interfaces */
interface Props {
     poster : any;
}

class Square extends Component < Props > {
     public render() {
          const {poster} = this.props;
          const imageBackground = poster.image;
          return (
               <div
                    id="preview-square"
                    className="preview-square poster-preview-holder"
                    style={{
                    backgroundImage: 'url( ' + imageBackground + ' )',
                    backgroundSize: (poster.scale === '1' || poster.scale === 1)
                         ? 'cover'
                         : (poster.scale * 20) + 150 + '%'
               }}>

                    <p className="message-holder">{poster.message}</p>
                    <div className="footer">
                         <div className="logo-holder">
                              <span>Moments Matter</span>
                              <img src="/xpancan-logo.png.pagespeed.ic.-2mEIsELsy.png" alt=""/>
                         </div>
                    </div>
               </div>
          );
     }
}

const mapProps = (poster : any) => ({poster: poster.rootReducer.poster});
export default connect(mapProps, null)(Square);