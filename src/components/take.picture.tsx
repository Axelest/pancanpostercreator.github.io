import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {SET_IMAGE} from '../core/actions/poster';

interface IProps {
     setImage(path : any);
     poster : any;
}
interface IState {
     width : number;
     height : number;
     streaming : boolean;
     video : any;
     canvas : any;
     startbutton : any;
     ready : boolean;
     stream : any;
     isMobile : boolean;
}
class TakePicture extends Component < IProps,
IState > {
     state : IState = {
          width: 400,
          height: 0,
          streaming: false,
          video: null,
          canvas: null,
          startbutton: null,
          ready: false,
          stream: null,
          isMobile: false
     }
     constructor(props : IProps) {
          super(props);
          this.startup = this
               .startup
               .bind(this);
          this.clearPhoto = this
               .clearPhoto
               .bind(this);
          this.startStream = this
               .startStream
               .bind(this);
          this.makeBlob = this
               .makeBlob
               .bind(this);
          this.stopStream = this
               .stopStream
               .bind(this);
          this.isMobile = this
               .isMobile
               .bind(this);
     }

     componentDidMount() {
          this.startup();
          this.isMobile();
     }

     public isMobile() {
          (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i))
               ? this.setState({isMobile: true})
               : this.setState({isMobile: false});
     }

     public async startup() {
          await this.setState({
               video: document.getElementById('video-stream'),
               canvas: document.getElementById('image-canvas'),
               startbutton: document.getElementById('takepicture')
          });
          this
               .state
               .video
               .addEventListener('canplay', (event) => {
                    if (!this.state.streaming) {
                         this.state.height = this.state.video.videoHeight / (this.state.video.videoWidth / this.state.width);
                         this
                              .state
                              .video
                              .setAttribute('width', this.state.width);
                         this
                              .state
                              .video
                              .setAttribute('height', this.state.height);
                         this
                              .state
                              .canvas
                              .setAttribute('width', this.state.width);
                         this
                              .state
                              .canvas
                              .setAttribute('height', this.state.height);
                         this.state.streaming = true;
                         this.forceUpdate();
                    }
               }, false);
     }

     public startStream() {
          if (!this.state.ready) {
               const container : any = document.getElementById('camera-stream');
               container.style.display = 'block';
               navigator
                    .mediaDevices
                    .getUserMedia({video: true, audio: false})
                    .then((stream) => {
                         this.state.video.srcObject = stream;
                         this
                              .state
                              .video
                              .play();
                         this.setState({ready: true, stream: stream});
                    })
                    .catch((error) => console.log('cannot open stream: ', error));
          } else {
               const {setImage} = this.props;
               const context = this
                    .state
                    .canvas
                    .getContext('2d');
               if (this.state.width && this.state.height) {
                    this.state.canvas.width = this.state.width;
                    this.state.canvas.height = this.state.height;
                    context.drawImage(this.state.video, 0, 0, this.state.width, this.state.height);
                    const data = this
                         .state
                         .canvas
                         .toDataURL('image/jpeg');

                    setImage(this.makeBlob(data));
                    this.forceUpdate();
                    this.stopStream();
               }
          }
     }

     public clearPhoto() {
          const {setImage} = this.props;
          setImage(null);
     }

     public stopStream() {
          const container : any = document.getElementById('camera-stream');
          container.style.display = 'none';
          this
               .state
               .stream
               .getTracks()
               .forEach((track) => track.stop());
          this.setState({ready: false, stream: null});
     }

     public makeBlob(data : any) {
          let byteString : any = '';
          if (data.split(',')[0].indexOf('base64') >= 0) {
               byteString = atob(data.split(',')[1]);
          } else {
               byteString = unescape(data.split(',')[1]);
          }
          const mimeString = data
               .split(',')[0]
               .split(':')[1]
               .split(';')[0];
          const ia = new Uint8Array(byteString.length);
          for (let i = 0; i < byteString.length; i++) {
               ia[i] = byteString.charCodeAt(i);
          }
          return URL.createObjectURL(new Blob([ia], {type: mimeString}));
     }

     public render() {
          return (
               <div>
                    <div
                         className="camera"
                         id="camera-stream"
                         style={{
                         display: 'none'
                    }}>
                         <video id="video-stream"/>
                    </div>
                    <Button disabled={this.state.isMobile} color="green" onClick={this.startStream}>Take photo</Button>
                    {(this.state.ready)
                         ? <span>
                                   <Button color="orange" onClick={this.clearPhoto}>Clear photo</Button>
                                   <Button color="red" onClick={this.stopStream}>Cancel</Button>
                              </span>
                         : ''}

                    <canvas
                         id="image-canvas"
                         style={{
                         display: 'none'
                    }}/>
               </div>

          );
     }
}

const mapProps = (props) => ({poster: props.rootReducer});
const mapDispatch = (dispatch) => ({
     setImage: (path : string) => dispatch({type: SET_IMAGE, path: path})
});
export default connect(mapProps, mapDispatch)(TakePicture);