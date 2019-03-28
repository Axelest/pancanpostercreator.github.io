import React, {Component} from 'react';
import {connect} from 'react-redux';
import {IMAGE_SET_POSITION} from '../../core/actions/poster';
import '../../styles/preview/square.scss';

/** Interfaces */
interface Props {
     poster : any;
     setImagePosition(x : number, y : number);
}

interface State {
     mouseMoving : boolean;
     element : any;
}

class Square extends Component < Props,
State > {
     state : State = {
          mouseMoving: false,
          element: ''
     }

     constructor(props : Props) {
          super(props);
          this.mouseDown = this
               .mouseDown
               .bind(this);
          this.mouseUp = this
               .mouseUp
               .bind(this);
          this.moving = this
               .moving
               .bind(this);
     }

     componentDidMount() {
          this.state.element = document.getElementById('preview-square')as HTMLElement;
          this
               .state
               .element
               .addEventListener('mousedown', this.mouseDown);
          this
               .state
               .element
               .addEventListener('mouseup', this.mouseUp)
     }

     public moving(e) {
          const {setImagePosition} = this.props;
          setImagePosition(e.offsetX - this.state.element.offsetWidth / 2, e.offsetY - this.state.element.offsetHeight / 2);
     }

     public mouseUp() {
          document.removeEventListener('mousemove', this.moving, false);
          this.setState({
               mouseMoving: !this.state.mouseMoving
          });
     }

     public mouseDown(e : any) {
          this.setState({
               mouseMoving: !this.state.mouseMoving
          });
          document.addEventListener('mousemove', this.moving, false);
     }

     public render() {
          const {poster} = this.props;
          const imageBackground = poster.image;
          return (
               <div
                    id="preview-square"
                    className="preview-square poster-preview-holder image-half"
                    style={{
                    backgroundImage: 'url( ' + imageBackground + ' )',
                    backgroundSize: (poster.scale === '1' || poster.scale === 1)
                         ? 'cover'
                         : (poster.scale * 20) + 150 + '%',
                    backgroundPosition: poster.positionX + 'px ' + poster.positionY + 'px'
               }}>

                    <p className="message-holder">{poster.message}</p>
                    <div className="footer">
                         <div className="logo-holder">
                              <span>Moments Matter</span>
                              <img src="pancan-logo.png" alt=""/>
                         </div>
                    </div>
               </div>
          );
     }
}

const mapProps = (poster : any) => ({poster: poster.rootReducer.poster});
const mapDispatch = (dispatch : any) => ({
     setImagePosition: (x, y) => dispatch({
          type: IMAGE_SET_POSITION,
          payload: {
               x: x,
               y: y
          }
     })
});
export default connect(mapProps, mapDispatch)(Square);