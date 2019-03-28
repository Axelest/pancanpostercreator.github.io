import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';
import {PopupWindow} from '../core/helpers/popup';

/** interface */
interface State {
     facebook : string;
     twitter : string;
     instagram : string;
}

class SocialButtons extends Component < {},
State > {

     state: State = {
          facebook: 'https://www.facebook.com/sharer/sharer.php?u=https://www.pancan.org/get-involved' +
                    '/moments-matter/',
          twitter: 'https://twitter.com/intent/tweet/?text=' + encodeURIComponent('#MomentsMatter. Join me & @PanCAN in sharing our stories & raising #pancreaticca' +
                    'ncer awareness so more patients can have more moments with their loved ones. htt' +
                    'p://pcan.at/MnM'),
          instagram: 'https://www.instagram.com/pancan/'
     };

     constructor(props : any) {
          super(props);
          this.socialHandler = this
               .socialHandler
               .bind(this);
     }

     public socialHandler(url : string) {
          new PopupWindow().getWindow(url, 'Share Poster Creator', 530, 400);
     }

     public render() {
          return (
               <div className="social-button-container">
                    <Button
                         circular
                         color='facebook'
                         icon='facebook'
                         onClick={() => this.socialHandler(this.state.facebook)}/>
                    <Button
                         circular
                         color='twitter'
                         icon='twitter'
                         onClick={() => this.socialHandler(this.state.twitter)}/>
                    <Button
                         circular
                         color='instagram'
                         icon='instagram'
                         onClick={() => this.socialHandler(this.state.instagram)}/>
               </div>
          );
     }
}

export default SocialButtons;