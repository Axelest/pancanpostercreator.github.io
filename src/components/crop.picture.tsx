import React, { Component } from 'react';
import ReactCrop from 'react-image-crop';
import { connect } from 'react-redux';
import '../styles/crop.scss';

interface Props {
     poster: any;
     imageCropChangeComplete(dataURI: string);
}

interface State {
     crop: {
          aspect: number;
          x: number;
          y: number;
          width: number;
          height: number;
     }
}

class Cropper extends Component<Props, State> {
     state: State = {
          crop: {
               aspect: 1 / 1,
               x: 20,
               y: 10,
               width: 25,
               height: 25
          }
     }
     constructor(props) {
          super(props);
          this.handleOnCropChange = this.handleOnCropChange.bind(this);
          this.imageLoaded = this.imageLoaded.bind(this);
     }

     public imageLoaded() {
          (document.getElementById('crop-holder-element') as HTMLElement).style.display = 'block';
     }

     public handleOnCropChange = (crop) => {
          this.setState({ crop: crop })
     }

     public handleOnCropComplete = (crop: any, pixelCrop: any) => {
          const { image } = this.props.poster;
          const { imageCropChangeComplete } = this.props;
          const canvas: any = document.createElement('canvas') as HTMLElement;
          canvas.width = pixelCrop.width;
          canvas.height = pixelCrop.height;
          const ctx = canvas.getContext('2d');
          const imageItem = new Image();
          imageItem.src = image;
          imageItem.onload = () => {
               ctx.drawImage(imageItem, pixelCrop.x, pixelCrop.y, pixelCrop.width, pixelCrop.height, 0, 0, pixelCrop.width, pixelCrop.height);
               try {
                    canvas.toBlob((blob: any) => {
                         imageCropChangeComplete(URL.createObjectURL(blob));
                    });
               } catch (error) {
                    console.log('Error ocurred ignored');
               }

          }
     }

     public render() {
          const { image } = this.props.poster;
          return (
               <div>
                    <ReactCrop
                         src={image}
                         crop={this.state.crop}
                         onImageLoaded={this.imageLoaded}
                         onComplete={this.handleOnCropComplete}
                         onChange={this.handleOnCropChange} />
               </div>
          );
     }
}

const mapProps = (poster: any) => ({ poster: poster.rootReducer.poster });
const mapDispatch = (dispatch: any) => ({
     imageCropChangeComplete: (dataURI: string) => dispatch({
          type: 'IMAGE_CROP',
          payload: {
               url: dataURI
          }
     })
});

export default connect(mapProps, mapDispatch)(Cropper);