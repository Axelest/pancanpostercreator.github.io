import React, {Component} from 'react';
import {
     Button,
     Popup,
     Header,
     Grid,
     Flag,
     Placeholder,
     Segment
} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {SET_LAYOUT, SET_LANGUAGE} from '../../core/actions/poster';
type Props = {
     setLayout(layout : string);
     setLanguage(language : string);
     poster: any;
}
class One extends Component < Props, {} > {
     constructor(props : Props) {
          super(props);
          this.langHandler = this
               .langHandler
               .bind(this);
          this.layoutHandler = this
               .layoutHandler
               .bind(this);
     }

     public langHandler(lan : string) {
          const {setLanguage} = this.props;
          setLanguage(lan);
     }

     public layoutHandler(layout : string) {
          const {setLayout} = this.props;
          setLayout(layout);
     }

     public render() {
          const {poster} = this.props;
          return (
               <div className="step-card">
                    <Popup
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
                    </Popup>
                    <Header as='h2' className="text-center">Poster Layout</Header>
                    <Grid centered divided columns={2}>
                         <Grid.Column
                              textAlign='center'
                              className={(poster.type === 'poster message only')
                              ? 'active layout-selector'
                              : 'layout-selector '}
                              onClick={() => this.layoutHandler('poster message only')}>
                              <Segment raised>
                                   <Placeholder>
                                        <Placeholder.Paragraph>
                                             <Placeholder.Line length='short'/>
                                             <Placeholder.Line length='medium'/>
                                             <Placeholder.Line length='short'/>
                                             <Placeholder.Line length='medium'/>
                                             <Placeholder.Line length='short'/>
                                             <Placeholder.Line length='medium'/>
                                             <Placeholder.Line length='short'/>
                                        </Placeholder.Paragraph>
                                   </Placeholder>
                              </Segment>
                              <p className='center'>Customise message only</p>
                         </Grid.Column>
                         <Grid.Column
                              textAlign='center'
                              className={(poster.type === 'poster message and image')
                              ? 'active layout-selector'
                              : 'layout-selector'}
                              onClick={() => this.layoutHandler('poster message and image')}>
                              <Segment raised>
                                   <Placeholder>
                                        <Placeholder.Header image>
                                             <Placeholder.Line/>
                                             <Placeholder.Line/>
                                        </Placeholder.Header>
                                        <Placeholder.Paragraph>
                                             <Placeholder.Line length='medium'/>
                                             <Placeholder.Line length='short'/>
                                             <Placeholder.Line length='medium'/>
                                             <Placeholder.Line length='short'/>
                                        </Placeholder.Paragraph>
                                   </Placeholder>
                              </Segment>
                              <p className='center'>Customise message and image</p>
                         </Grid.Column>
                    </Grid>
                    <Header as='h2' className="text-center">Social Post Layout</Header>
                    <Grid centered divided columns={2}>
                         <Grid.Column
                              textAlign='center'
                              className={(poster.type === 'post message only')
                              ? 'active layout-selector'
                              : 'layout-selector'}
                              onClick={() => this.layoutHandler('post message only')}>
                              <Segment raised>
                                   <Placeholder>
                                        <Placeholder.Paragraph>
                                             <Placeholder.Line length='medium'/>
                                             <Placeholder.Line length='short'/>
                                             <Placeholder.Line length='medium'/>
                                             <Placeholder.Line length='short'/>
                                        </Placeholder.Paragraph>
                                   </Placeholder>
                              </Segment>
                              <p className='center'>Customise message</p>
                         </Grid.Column>
                         <Grid.Column
                              textAlign='center'
                              className={(poster.type === 'post image')
                              ? 'active layout-selector'
                              : 'layout-selector'}
                              onClick={() => this.layoutHandler('post image')}>
                              <Segment raised>
                                   <Placeholder>
                                        <Placeholder.Header image>
                                             <Placeholder.Line/>
                                        </Placeholder.Header>
                                        <Placeholder.Paragraph>
                                             <Placeholder.Line length='medium'/>
                                             <Placeholder.Line length='short'/>
                                        </Placeholder.Paragraph>
                                   </Placeholder>
                              </Segment>
                              <p className='center'>Customise image</p>
                         </Grid.Column>
                    </Grid>
               </div>
          );
     }
}
const mapStateToProps = (state : any) => ({poster: state.rootReducer.poster});
const mapDispatchToProps = (dispatch : any) => ({
     setLayout: (type : string) => dispatch({type: SET_LAYOUT, payload: type}),
     setLanguage: (type : string) => dispatch({type: SET_LANGUAGE, payload: type})
});
export default connect(mapStateToProps, mapDispatchToProps)(One);