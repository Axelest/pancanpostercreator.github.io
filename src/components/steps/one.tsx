import React, {Component} from 'react';
import {Header, Grid, Placeholder, Segment} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {SET_LAYOUT} from '../../core/actions/poster';
type Props = {
     setLayout(layout : string);
     poster: any;
}
class One extends Component < Props > {
     constructor(props : Props) {
          super(props);
          this.layoutHandler = this
               .layoutHandler
               .bind(this);
     }

     public layoutHandler(layout : string) {
          const {setLayout} = this.props;
          setLayout(layout);
     }

     public render() {
          const {poster} = this.props;
          return (
               <div className="step-card paddingTop">
                    <Header as='h2' className="text-center poster-h2">Choose your layout</Header>
                    <Grid centered divided columns={3}>
                         <Grid.Column
                              computer={5}
                              mobile={16}
                              tablet={5}
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
                              <p className='center'>Square&nbsp;<br/>(Short message only)</p>
                         </Grid.Column>
                         <Grid.Column
                              computer={7}
                              mobile={16}
                              tablet={7}
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
                                        </Placeholder.Paragraph>
                                   </Placeholder>
                              </Segment>
                              <p className='center'>Horizontal&nbsp;<br/>(Share your story)</p>
                         </Grid.Column>
                         <Grid.Column
                              computer={4}
                              mobile={16}
                              tablet={4}
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
                                             <Placeholder.Line length='medium'/>
                                             <Placeholder.Line length='short'/>
                                             <Placeholder.Line length='medium'/>
                                             <Placeholder.Line length='short'/>
                                             <Placeholder.Line length='medium'/>
                                        </Placeholder.Paragraph>
                                   </Placeholder>
                              </Segment>
                              <p className='center'>Vertical&nbsp;<br/>(Share your story)</p>
                         </Grid.Column>
                    </Grid>
               </div>
          );
     }
}
const mapStateToProps = (state : any) => ({poster: state.rootReducer.poster});
const mapDispatchToProps = (dispatch : any) => ({
     setLayout: (type : string) => dispatch({type: SET_LAYOUT, payload: type})
});
export default connect(mapStateToProps, mapDispatchToProps)(One);