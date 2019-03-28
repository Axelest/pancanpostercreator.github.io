import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid, Header} from 'semantic-ui-react';
import {IMAGE_SET_POSITION} from '../../core/actions/poster';
import '../../styles/preview/horizontal.scss';

/** Interfaces */
interface Props {
     poster : any;
     setImagePosition(x : number, y : number);
}

interface State {
     mouseMoving : boolean;
     element : any;
}

class Horizontal extends Component < Props,
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
          this.state.element = document.getElementById('preview-horizontal')as HTMLElement;
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
               <div>
                    <Grid columns={2} className="preview-horizontal">
                         <Grid.Column
                              id="preview-horizontal"
                              className="image-half"
                              style={{
                              backgroundImage: 'url( ' + imageBackground + ' )',
                              backgroundSize: (poster.scale === '1' || poster.scale === 1)
                                   ? 'cover'
                                   : (poster.scale * 20) + 150 + '%',
                              backgroundPosition: -(poster.positionX) + '% ' + poster.positionY + 'px'
                         }}/>
                         <Grid.Column className="text-half">
                              <div className="header">
                                   <div className="logo-holder">
                                        <span>Moments Matter</span>
                                        <img src="pancan-logo.png" alt=""/>
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
                                   : (poster.scale * 20) + 150 + '%',
                              backgroundPosition: -(poster.positionX) + '% ' + poster.positionY + 'px'
                         }}/>
                         <Grid.Column className="body-text">
                              <div className="header">
                                   <div className="logo-holder">
                                        <span>Moments Matter</span>
                                        <img src="pancan-logo.png" alt=""/>
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
const mapDispatch = (dispatch : any) => ({
     setImagePosition: (x, y) => dispatch({
          type: IMAGE_SET_POSITION,
          payload: {
               x: x,
               y: y
          }
     })
});
export default connect(mapProps, mapDispatch)(Horizontal);