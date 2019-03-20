import React, {Component} from 'react';
import {connect} from 'react-redux';
// import {Button, Popup, Flag, Header, Grid} from 'semantic-ui-react';
import {SET_LANGUAGE} from '../../core/actions/poster';
import GeneralCustom from '../poster.all';

// Will be used in the future for other campaign import PosterMessage from
// '../poster.message'; import PosterImage from '../poster.image'; import
// PostMessage from '../post.message'; import PostImage from '../post.image';

type Props = {
     poster: any;
     setLanguage(language : string);
}

class Two extends Component < Props > {
     constructor(props : Props) {
          super(props);
          this.renderStep = this
               .renderStep
               .bind(this);
          this.langHandler = this
               .langHandler
               .bind(this);
     }

     public langHandler(lan : string) {
          const {setLanguage} = this.props;
          setLanguage(lan);
     }

     public renderStep(type : number) {
          return <GeneralCustom/>;
          // This section will be used in the future for other campaigns; switch (type) {
          //  case 1:           return <PosterMessage/>;      case 2:           return
          // <PosterImage/>;      case 3:           return <PostMessage/>;      case 4:
          // return <PostImage/>;      default:           return 'Error ocurred go back';
          // }
     }

     public render() {
          const {poster} = this.props;
          return (
               <div className="step-card">
                    {/* <Popup
                         trigger={< Button circular icon = "world" content = {
                         "Language - " + poster
                              .language
                              .toUpperCase()
                    }
                    className = "lang-selector" />}
                         flowing
                         hoverable>
                         <Grid centered divided columns={3}>
                              <Grid.Column
                                   textAlign='center'
                                   className={(poster.language === 'english')
                                   ? 'active country-selector'
                                   : 'country-selector'}
                                   onClick={() => this.langHandler('english')}>
                                   <Header as='h4'>English</Header>
                                   <Flag name='us' className="flag-selector"/>
                              </Grid.Column>
                              <Grid.Column
                                   textAlign='center'
                                   className={(poster.language === 'spanish')
                                   ? 'active country-selector'
                                   : 'country-selector'}
                                   onClick={() => this.langHandler('spanish')}>
                                   <Header as='h4'>Spanish</Header>
                                   <Flag name='spain' className="flag-selector"/>
                              </Grid.Column>
                              <Grid.Column
                                   textAlign='center'
                                   className={(poster.language === 'french')
                                   ? 'active country-selector'
                                   : 'country-selector'}
                                   onClick={() => this.langHandler('french')}>
                                   <Header as='h4'>French</Header>
                                   <Flag name='france' className="flag-selector"/>
                              </Grid.Column>
                         </Grid>
                    </Popup> */}
                    {this.renderStep(poster.layoutType)}
               </div>
          );
     }
}

const mapStateTopProps = (state : any) => ({poster: state.rootReducer.poster});
const mapDispatchToProps = (dispatch) => ({
     setLanguage: (type : string) => dispatch({type: SET_LANGUAGE, payload: type})
});

export default connect(mapStateTopProps, mapDispatchToProps)(Two);