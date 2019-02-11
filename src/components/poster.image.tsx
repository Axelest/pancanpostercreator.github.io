import React, {Component} from 'react';
import {connect} from 'react-redux';
import {SET_LOGO, SET_MESSAGE, SET_IMAGE} from '../core/actions/poster';
import {
     Header,
     Container,
     Button,
     Select,
     Form,
     TextArea,
     Input
} from 'semantic-ui-react';

type Props = {
     setImage(image : any, path : string);
     setLogo(logo : any, path : string);
     setMessage(message : string);
}

type State = {
     messageType: number;
     error: {
          message: string;
          active: boolean
     },
     messages: any;
}
class PostImage extends Component < Props,
State > {
     state : State = {
          messageType: 1,
          error: {
               message: '',
               active: false
          },
          messages: [
               {
                    key: 1,
                    value: 'over here 1',
                    text: 'over here 1'
               }, {
                    key: 2,
                    value: 'over here 2',
                    text: 'over here 2'
               }, {
                    key: 3,
                    value: 'over here 3',
                    text: 'over here 3'
               }
          ]
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

     public render() {
          return (
               <div>
                    <Container className="paddingTop">
                         <Header as='h2' className="text-center">Message Type</Header>
                         <Button.Group size='large' className="message-type">
                              <Button onClick={() => this.setState({messageType: 1})}>Ready made</Button>
                              <Button.Or/>
                              <Button onClick={() => this.setState({messageType: 2})}>Custom</Button>
                         </Button.Group>
                         <div
                              className={(this.state.messageType === 1)
                              ? 'show made-selector'
                              : 'hide'}>
                              <Select
                                   placeholder='Select a message'
                                   options={this.state.messages}
                                   onChange={(e, {value}) => this.selectorHandler(value)}/>
                         </div>
                         <div
                              className={(this.state.messageType === 2)
                              ? 'show paddingTop'
                              : 'hide'}>
                              <Form>
                                   <TextArea
                                        placeholder='Write a message here'
                                        maxLength="100"
                                        onChange={this.changeHandler}/>
                                   <p>Maximum 100 characters</p>
                              </Form>
                              {(this.state.error.active)
                                   ? this.state.error.message
                                   : ''}
                         </div>
                         <Header as='h4' className="text-left paddingTop">Upload your logo</Header>
                         <Input
                              icon='file'
                              iconPosition='left'
                              placeholder='Upload logo'
                              accept="image/*"
                              type="file"
                              onChange={this.logoHandler}/>
                         <p>10 MB limit. Allowed types: gif png jpg jpeg.</p>
                         <Header as='h4' className="text-left paddingTop">Upload your image</Header>
                         <Input
                              icon='file'
                              iconPosition='left'
                              placeholder='Upload Image'
                              accept="image/*"
                              type="file"
                              onChange={this.themeImage}/>
                         <p>10 MB limit. Allowed types: gif png jpg jpeg.</p>
                    </Container>
               </div>
          );
     }
}

const mapStateTopProps = (state : any) => ({poster: state.rootReducer.poster});
const mapDispatchToProps = (dispatch : any) => ({
     setImage: (image : any, path : string) => dispatch({type: SET_IMAGE, payload: image, path: path}),
     setLogo: (logo : any, path : string) => dispatch({type: SET_LOGO, payload: logo, path: path}),
     setMessage: (message : string) => dispatch({type: SET_MESSAGE, payload: message})
});

export default connect(mapStateTopProps, mapDispatchToProps)(PostImage);