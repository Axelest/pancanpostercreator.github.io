import React, {Component} from 'react';
import {
     Icon,
     Container,
     Grid,
     Header,
     Button,
     Modal,
     Form,
     Input
} from 'semantic-ui-react';
import {connect} from 'react-redux';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf'
import {POSTER_CREATE} from '../../core/actions/poster';
import {PopupWindow} from '../../core/helpers/popup';
import {uploadImage} from '../../core/services/api';
import SocialButtons from '../social.buttons';

interface Props {
     poster : any;
     setPoster(data : any);
}
interface IUser {
     [key : string] : string
}
interface State {
     isUploaded : boolean;
     posterId : number;
     emailInfo : boolean;
     user : IUser;
     error : any;
     elementIds : any;
}

class Three extends Component < Props,
State > {
     state : State = {
          isUploaded: false,
          posterId: -1,
          emailInfo: false,
          user: {
               fname: '',
               lname: '',
               email: ''
          },
          error: {
               error: false,
               det: ''
          },
          elementIds: {
               1: 'preview-square',
               2: 'final-horizontal',
               3: 'final-vertical'
          }
     };
     constructor(props : Props) {
          super(props);
          this.controllers = this
               .controllers
               .bind(this);
          this.downloadPosterImage = this
               .downloadPosterImage
               .bind(this);
          this.shareTwitter = this
               .shareTwitter
               .bind(this);
          this.shareFacebook = this
               .shareFacebook
               .bind(this);
          this.dataURItoBlob = this
               .dataURItoBlob
               .bind(this);
          this.base64ToBlob = this
               .base64ToBlob
               .bind(this);
          this.emailModal = this
               .emailModal
               .bind(this);
          this.formChange = this
               .formChange
               .bind(this);
          this.error = this
               .error
               .bind(this);
          this.sendToEmail = this
               .sendToEmail
               .bind(this);
          this.checkErrors = this
               .checkErrors
               .bind(this);
     }

     public downloadPosterImage(type : string) {
          const {poster} = this.props;
          const {elementIds} = this.state;
          const posterElement : any = document.getElementById(elementIds[poster.layoutType]);
          posterElement.style.visibility = 'visible';
          html2canvas(posterElement).then((canvas : any) => {
               const image = canvas.toDataURL('image/jpeg', 1.0);
               if (type === 'pdf') {
                    const doc = new jsPDF('p', 'mm');
                    doc.addImage(image, 'JPEG', 10, 10);
                    doc.save('poster.pdf');
                    return;
               }

               const element = document.createElement('a');
               element.href = image;
               element.download = 'poster.jpeg';
               element.click();
               posterElement.style.visibility = 'hidden';
          });
     }

     public async sendToEmail() {
          const {poster} = this.props;
          const {elementIds} = this.state;
          const posterElement : any = document.getElementById(elementIds[poster.layoutType]);
          const {isUploaded} = this.state;

          if (!this.checkErrors()) {
               await
               html2canvas(posterElement).then(async(canvas : any) => {
                    const image = canvas.toDataURL('image/jpeg', 1.0);
                    const data : any = {
                         key: '5994766c58613900370b6153',
                         image: image,
                         lname: this.state.user.lname,
                         email: this.state.user.email,
                         fname: this.state.user.fname
                    };
                    const searchParams = Object
                         .keys(data)
                         .map((key) => {
                              return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
                         })
                         .join('&');

                    if (!isUploaded) {
                         const response : any = await uploadImage(searchParams);
                         this.setState({
                              isUploaded: true,
                              posterId: response.id,
                              error: {
                                   error: false
                              },
                              emailInfo: false
                         });
                    }
               });
          }
     }

     public formChange(e : any, {name, value} : any) {
          const {fname, lname, email} = this.state.user;
          switch (name) {
               case 'lname':
                    this.setState({
                         user: {
                              lname: value,
                              fname: fname,
                              email: email
                         }
                    });
                    break;
               case 'fname':
                    this.setState({
                         user: {
                              lname: lname,
                              fname: value,
                              email: email
                         }
                    });
                    break;
               case 'email':
                    this.setState({
                         user: {
                              lname: lname,
                              fname: fname,
                              email: value
                         }
                    });
                    break;
               default:
                    console.log(this.state.user);
          }
     }

     public error() {
          return (
               <b style={{
                    color: 'red'
               }}>Error! make sure to have vaild form values.</b>
          );
     }

     public checkErrors() : boolean {
          const {lname, fname, email} = this.state.user;
          if (lname !== '' && fname !== '' && email !== '') {
               return false;
          };
          this.setState({
               error: {
                    error: true
               }
          });
          return true;
     }

     public emailModal() {
          const {emailInfo, isUploaded} = this.state;
          return (
               <Modal
                    open={emailInfo}
                    trigger={< Button color = 'purple' disabled = {
                    isUploaded
                         ? true
                         : false
               }
               content = {
                    isUploaded
                         ? 'Email sent!'
                         : 'Send via Email'
               }
               onClick = {
                    () => this.setState((prevState) => ({
                         emailInfo: !prevState.emailInfo
                    }))
               } />}
                    basic
                    size='small'>
                    <Header icon='send' content='Send me my poster'/>
                    <Modal.Content>
                         <strong className="over-image">
                              Your email information:
                         </strong>
                         <Form>
                              <Form.Field required>
                                   <label
                                        style={{
                                        color: '#ffffff'
                                   }}>First name:
                                   </label>
                                   <Input
                                        iconPosition='left'
                                        placeholder='First Name'
                                        name='fname'
                                        type="text"
                                        onChange={this.formChange}/>
                              </Form.Field>
                              <Form.Field required>
                                   <label
                                        style={{
                                        color: '#ffffff'
                                   }}>Last name:
                                   </label>
                                   <Input
                                        iconPosition='left'
                                        placeholder='Last Name'
                                        name='lname'
                                        type="text"
                                        onChange={this.formChange}/>
                              </Form.Field>
                              <Form.Field required>
                                   <label
                                        style={{
                                        color: '#ffffff'
                                   }}>Email:
                                   </label>
                                   <Input
                                        name='email'
                                        iconPosition='left'
                                        placeholder='Email address'
                                        type="email"
                                        onChange={this.formChange}/>
                              </Form.Field>
                         </Form>
                    </Modal.Content>
                    <Modal.Actions>
                         <Button
                              color='red'
                              inverted
                              onClick={() => this.setState((prevState) => ({
                              emailInfo: !prevState.emailInfo
                         }))}>
                              <Icon name='remove'/>
                              No
                         </Button>
                         <Button color='green' inverted onClick={this.sendToEmail}>
                              <Icon name='mail'/>
                              Send
                         </Button>
                         {(this.state.error.error)
                              ? this.error()
                              : ''}
                    </Modal.Actions>
               </Modal>
          )
     }

     public shareTwitter() {
          const poster : any = document.getElementById('final-poster');
          const {isUploaded, posterId} = this.state;
          html2canvas(poster, {scale: 2}).then(async(canvas : any) => {
               const image = canvas.toDataURL('image/png');
               const data : any = {
                    key: '5994766c58613900370b6153',
                    image: image
               }
               let url : string;
               if (!isUploaded) {
                    const response : any = await uploadImage(data);
                    this.setState({isUploaded: true, posterId: response.id});
                    url = 'https://twitter.com/intent/tweet/?text=' + encodeURIComponent('PanCAN Poster #demandbetter #advocate at http://www.worldpancreaticcancercoaliti' +
                              'on.org/poster/' + response.id);
               } else {
                    url = 'https://twitter.com/intent/tweet/?text=' + encodeURIComponent('PanCAN Poster #demandbetter #advocate at http://www.worldpancreaticcancercoaliti' +
                              'on.org/poster/' + posterId);
               }

               new PopupWindow().getWindow(url, 'Share Poster', 530, 400);
          });

     }

     public shareFacebook() {
          const poster : any = document.getElementById('final-poster');
          const {isUploaded, posterId} = this.state;
          html2canvas(poster, {scale: 2}).then(async(canvas : any) => {
               const image = canvas.toDataURL('image/png');
               let url : string;
               const data : any = {
                    key: '5994766c58613900370b6153',
                    image: image
               };
               if (!isUploaded) {
                    const response : any = await uploadImage(data);
                    this.setState({isUploaded: true, posterId: response.id});
                    url = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent('http://www.worldpancreaticcancercoalition.org/poster/' + response.id);
               } else {
                    url = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent('http://www.worldpancreaticcancercoalition.org/poster/' + posterId);
               }
               new PopupWindow().getWindow(url, 'Share Poster', 530, 200);
          });
     }

     public dataURItoBlob(data : string) : any {
          const byteString = atob(data.split(',')[1]);
          const ab = new ArrayBuffer(byteString.length);
          const ia = new Uint8Array(ab);
          for (let i = 0; i < byteString.length; i++) {
               ia[i] = byteString.charCodeAt(i);
          }
          return new Blob([ab], {type: 'image/png'});
     }

     public base64ToBlob(data : any) {
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
          return new Blob([ia], {type: mimeString});

     }
     public controllers(type : number) {
          switch (type) {
               case 1:
               case 2:
               case 3:
               case 4:
                    return <Grid container columns={2} stackable>
                         <Grid.Column textAlign="center">
                              <Button
                                   content='Download JPG'
                                   color='purple'
                                   onClick={() => this.downloadPosterImage('image')}/>
                         </Grid.Column>
                         {/* <Grid.Column textAlign="center">
                              <Button content='Download PDF' onClick={() => this.downloadPosterImage('pdf')}/>
                         </Grid.Column> */}
                         <Grid.Column textAlign="center">
                              {this.emailModal()}
                         </Grid.Column>
                    </Grid>;
               default:
                    return <div/>
          }
     }
     public render() {
          const {poster} = this.props;
          const title = '#MomentsMatter'; //(poster.layoutType === 3 || poster.layoutType === 4)
          //      ? 'Share your poster'      : 'Download image';
          return (
               <Container className="step paddingTop">
                    <Header as='h2' content={title} textAlign="center" className="poster-h2"/>
                    <p
                         style={{
                         textAlign: 'center'
                    }}
                         className="paddingBottom over-solid leadin-copy">Share
                         your Moment with the world by downloading your image and sharing it to social
                         media with #MomentsMatter and tagging us @PanCAN.</p>

                    <SocialButtons/>
                    <br/>{this.controllers(poster.layoutType)}
               </Container>
          );
     }
}
const mapStateToProps = (state : any) => ({poster: state.rootReducer.poster});
const mapDispatchToProps = (dispatch : any) => ({
     setPoster: (data : any) => dispatch({type: POSTER_CREATE, payload: data})
});
export default connect(mapStateToProps, mapDispatchToProps)(Three);