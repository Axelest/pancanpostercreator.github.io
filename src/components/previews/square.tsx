import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../styles/preview/square.scss';

/** Interfaces */
interface Props {
     poster: any;
}

class Square extends Component<Props> {

     constructor(props: Props) {
          super(props);
     }

     public render() {
          const { backgroundImg, message } = this.props.poster;
          return (
               <div
                    id="preview-square"
                    className="preview-square poster-preview-holder image-half"
                    style={{
                         backgroundImage: 'url( ' + backgroundImg + ' )'
                    }}>
                    <p className="message-holder">{message}</p>
                    <div className="footer">
                         <div className="logo-holder">
                              <span>Moments Matter</span>
                              <img
                                   src="https://0b9aafecab229788ebf1-90f622f94aeb4d165ef7469777c28f31.ssl.cf2.rackcdn.com/poster-creator/pancan-logo.png"
                                   alt="" />
                         </div>
                    </div>
               </div>
          );
     }
}

const mapProps = (poster: any) => ({ poster: poster.rootReducer.poster });
export default connect(mapProps, null)(Square);
