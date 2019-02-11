import React, {Component} from 'react';
import {connect} from 'react-redux';
import {SET_IMAGE} from '../core/actions/poster';
import {Header, Container, Form, Input} from 'semantic-ui-react';
type Props = {
     setImage(image : any, path : string);
}

type State = {
     messageType: number;
     error: {
          message: string;
          active: boolean;
     }
}

class PostImage extends Component < Props,
State > {
     state : State = {
          messageType: 1,
          error: {
               message: '',
               active: false
          }
     }
     constructor(props : Props) {
          super(props);
          this.themeImage = this
               .themeImage
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
                         message: 'message:File is way to big...',
                         active: true
                    }
               })
          }
          setImage(file, path);
     }

     public render() {
          return (
               <div>

                    <Container className="paddingTop">
                         <Header as='h2' className="text-center">Upload your image</Header>
                         <Form>
                              <Input
                                   icon='file'
                                   iconPosition='left'
                                   placeholder='Upload Image'
                                   type="file"
                                   accept="image/*"
                                   onChange={this.themeImage}/>
                              <p>5 MB limit. Allowed types: gif png jpg jpeg.</p>
                         </Form>

                    </Container>
               </div>
          );
     }
}

const mapStateTopProps = (state : any) => ({poster: state.rootReducer.poster});
const mapDispatchToProps = (dispatch : any) => ({
     setImage: (image : any, path : string) => dispatch({type: SET_IMAGE, payload: image, path: path})
});

export default connect(mapStateTopProps, mapDispatchToProps)(PostImage);
