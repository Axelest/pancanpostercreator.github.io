import React, {Component} from 'react';
import {Icon, Container, Grid, Header, Button} from 'semantic-ui-react';
import {connect} from 'react-redux';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf'
import {POSTER_CREATE} from '../../core/actions/poster';
// import TwitterAuth from '../../core/helpers/twitter';
import {Facebook} from '../../core/helpers/facebook';

type Props = {
     poster: any;
     setPoster(data : any);
}

class Three extends Component < Props > {
     facebook : any;
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
          this.facebook = new Facebook();
          this.base64ToBlob = this
               .base64ToBlob
               .bind(this);
     }

     public downloadPosterImage(type : string) {
          const poster : any = document.getElementById('final-poster');
          html2canvas(poster).then((canvas : any) => {
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
          });
     }

     public shareTwitter() {
          const poster : any = document.getElementById('final-poster');

          html2canvas(poster).then(async(canvas : any) => {
               const image = canvas.toDataURL('image/png');

               fetch('http://localhost:5000/api/twitter/image', {
                    method: 'POST',
                    body: JSON.stringify({key: '5994766c58613900370b6153', image: image}),
                         headers: {
                              'Content-Type': 'application/json'
                         }
                    })
                    .then(data => data.json())
                    .then(data => console.log(data))
                    .catch(error => console.log(error));
               // const twitterHeader = TwitterAuth      .getAuth('POST', 'media/upload.json',
               // {media_data: image})      .getHeaderString(); const formData = new
               // FormData(); formData.append('media_data', image);
               // fetch('https://upload.twitter.com/1.1/media/upload.json', {      method:
               // 'POST',      mode: 'cors',      headers: {           "Authorization":
               // twitterHeader,           "Content-Type": "application/x-www-form-urlencoded"
               // },           body: formData      })      .then(data => data.json())
               // .then(data => console.log(data))      .catch(error => console.log(error));
               // twitterConnection.post('media/upload', {      media_data: image }, (error :
               // any, data : any) => {      if (error)           return console.log('twitter
               // media upload error stop process');      const mediaId = data.media_id_string;
               //      twitterConnection.post('statuses/update', {           status: 'Demand
               // Better #pancan',           media_ids: [mediaId]      }, (post_error : any,
               // data : any) => {           if (post_error)                return
               // console.log('error updating the status stop process'); console.log('Twitter
               // status updated.');      }); });
          });

     }
     public shareFacebook() {

          const poster : any = document.getElementById('final-poster');

          html2canvas(poster).then((canvas : any) => {
               const image = canvas.toDataURL('image/jpeg', 1.0);
               let blob : any = '';
               try {
                    blob = this.dataURItoBlob(image);
               } catch (error) {
                    console.log(error, ' Unable to parse to blob.');
               }
               console.log(blob);
               this
                    .facebook
                    .status();

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
                    return <Grid container columns={2} stackable>
                         <Grid.Column textAlign="center">
                              <Button
                                   content='Download Image'
                                   onClick={() => this.downloadPosterImage('image')}/>
                         </Grid.Column>
                         <Grid.Column textAlign="center">
                              <Button content='Download PDF' onClick={() => this.downloadPosterImage('pdf')}/>
                         </Grid.Column>
                    </Grid>;

               case 3:
               case 4:
                    return <Grid container columns={2} stackable>
                         <Grid.Column textAlign="center">
                              <Icon size={'big'} name="twitter" onClick={this.shareTwitter}/>
                         </Grid.Column>
                         <Grid.Column textAlign="center">
                              <Icon size={'big'} name="facebook" onClick={this.shareFacebook}/>
                         </Grid.Column>
                    </Grid>;
               default:
                    return <div/>
          }
     }
     public render() {
          const {poster} = this.props;
          const title = (poster.layoutType === 3 || poster.layoutType === 4)
               ? 'Share your poster'
               : 'Download image';
          return (
               <Container className="step">
                    <Header as='h2' content={title} textAlign="center"/> {this.controllers(poster.layoutType)}
               </Container>
          );
     }
}
const mapStateToProps = (state : any) => ({poster: state.rootReducer.poster});
const mapDispatchToProps = (dispatch : any) => ({
     setPoster: (data : any) => dispatch({type: POSTER_CREATE, payload: data})
});
export default connect(mapStateToProps, mapDispatchToProps)(Three);