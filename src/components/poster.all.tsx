import React, {Component} from 'react';
import {Input, Container, Header, Form, TextArea} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {SET_IMAGE, SET_LOGO, SET_MESSAGE, POSTER_SCALE, SET_TITLE} from '../core/actions/poster';
import TakePicture from './take.picture';

/** Interfaces */
type Props = {
     setImage(image : any, path : string);
     setLogo(logo : any, path : string);
     setMessage(message : string);
     setSize(scale : number);
     setTitle(title : string);
     poster: any;
}

type State = {
     messageType: number;
     error: {
          message: string;
          active: boolean
     };
     zoom: number;
}

class GeneralCustom extends Component < Props,
State > {
     state : State = {
          messageType: 1,
          error: {
               message: '',
               active: false
          },
          zoom: 1
     };

     constructor(props : Props) {
          super(props);
          this.themeImage = this
               .themeImage
               .bind(this);
          this.selectorHandler = this
               .selectorHandler
               .bind(this);
          this.changeHandler = this
               .changeHandler
               .bind(this);
          this.logoHandler = this
               .logoHandler
               .bind(this);
          this.zoomChange = this
               .zoomChange
               .bind(this);
          this.startStream = this
               .startStream
               .bind(this);
          this.titleChangeHandler = this
               .titleChangeHandler
               .bind(this);
     }

     public themeImage(e : any) {
          const limit = 5 * 1048576; // 10MB
          const {setImage} = this.props;
          const file = e.target.files[0];
          const path = URL.createObjectURL(file);
          if (file.size > limit) {
               return this.setState({
                    error: {
                         message: 'File is way to big...',
                         active: true
                    }
               });
          }
          setImage(file, path);
     }

     public selectorHandler(value : any) {
          const {setMessage} = this.props;
          setMessage(value);
     }

     public titleChangeHandler(e : any) {
          const {setTitle} = this.props;
          setTitle(e.target.value);
     }

     public changeHandler(e : any) {
          const {setMessage} = this.props;
          setMessage(e.target.value);
     }

     public logoHandler(e : any) {
          const limit = 5 * 1048576; // 10MB
          const {setLogo} = this.props;
          const file = e.target.files[0];
          const path = URL.createObjectURL(file);
          if (file.size > limit) {
               return this.setState({
                    error: {
                         message: 'File is way to big...',
                         active: true
                    }
               });
          }
          setLogo(file, path);
     }

     public zoomChange(e : any, {name, value} : any) {
          const {setSize} = this.props;
          this.setState({zoom: value});
          setSize(value);
     }

     public startStream() {
          console.log('will start camera streaming here');

     }

     public render() {
          const {poster} = this.props;
          return (
               <Container textAlign="center">
                    <Header as='h2' className="text-center poster-h2">Upload your image</Header>
                    <Input
                         icon='file'
                         iconPosition='left'
                         placeholder='Upload Image'
                         accept="image/*"
                         type="file"
                         onChange={this.themeImage}/>
                    <p>10 MB limit. Allowed types: gif png jpg jpeg.</p>
                    <Header as='h2' className="text-center poster-h2">Take a picture</Header>
                    <TakePicture/>
                    <Form.Input
                         label={`Scale image: `}
                         min={1}
                         max={10}
                         name='zoom'
                         onChange={this.zoomChange}
                         type='range'
                         value={this.state.zoom}
                         className="scale-controller"/>
                    <Header as='h2' textAlign="center" className="text-center poster-h2">Share Your Moment</Header>
                    <Form>
                         <Input
                              className={(poster.layoutType === 1)
                              ? "hide"
                              : "show paddingBottom"}
                              placeholder='Poster title'
                              type="text"
                              onChange={this.titleChangeHandler}
                              defaultValue={poster.title}/>
                         <TextArea
                              placeholder="Write 'I am and will' message here. eg. 'I am a student and I will spread the word'."
                              maxLength="150"
                              onChange={this.changeHandler}
                              defaultValue={poster.message}/>
                         <p>Maximum 150 characters</p>
                    </Form>
               </Container>
          );
     }
}

const mapProps = (poster : any) => ({poster: poster.rootReducer.poster});
const mapDispatch = (dispatch : any) => ({
     setImage: (image : any, path : string) => dispatch({type: SET_IMAGE, payload: image, path: path}),
     setLogo: (logo : any, path : string) => dispatch({type: SET_LOGO, payload: logo, path: path}),
     setMessage: (message : string) => dispatch({type: SET_MESSAGE, payload: message}),
     setSize: (scale : number) => dispatch({type: POSTER_SCALE, payload: scale}),
     setTitle: (title : string) => dispatch({type: SET_TITLE, payload: title})
});

export default connect(mapProps, mapDispatch)(GeneralCustom);