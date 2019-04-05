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
     };

     constructor(props : Props) {
          super(props);
          this.moving = this
               .moving
               .bind(this);
     }

     componentDidMount() {
          this.state.element = document.getElementById('preview-square')as HTMLElement;
          this
               .state
               .element
               .addEventListener('mousedown', () => this.state.element.addEventListener('mousemove', this.moving, false));
          this
               .state
               .element
               .addEventListener('mouseup', () => this.state.element.removeEventListener('mousemove', this.moving, false));
          this
               .state
               .element
               .addEventListener('touchmove', this.moving);
     }

     componentWillUnmount() {
          this
               .state
               .element
               .removeEventListener('mousedown', this.moving, false);
          this
               .state
               .element
               .removeEventListener('mouseup', this.moving, false);

          this
               .state
               .element
               .removeEventListener('touchmove', this.moving, false);
     }

     public moving(e) {
          // set state
          this.setState({
               mouseMoving: !this.state.mouseMoving
          });

          const {setImagePosition} = this.props;
          if (e.type === 'touchmove') {
               const touch = e.changedTouches[0];
               const X : number = touch.clientX - this
                    .state
                    .element
                    .getBoundingClientRect()
                    .left - this.state.element.offsetWidth / 2;
               const Y : number = touch.clientY - this
                    .state
                    .element
                    .getBoundingClientRect()
                    .top - this.state.element.offsetHeight / 2;
               return setImagePosition(X, Y);
          }
          const X : number = e.offsetX - this.state.element.offsetWidth / 2;
          const Y : number = e.offsetY - this.state.element.offsetHeight / 2;
          return setImagePosition(X, Y);
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
                    backgroundSize: poster.scale === '1' || poster.scale === 1
                         ? 'cover'
                         : poster.scale * 20 + 150 + '%',
                    backgroundPosition: poster.positionX === 0 && poster.positionY === 0
                         ? 'center'
                         : poster.positionX + 'px ' + poster.positionY + 'px'
               }}>
                    <div/>

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
