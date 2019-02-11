import React, {Component} from 'react';
import {connect} from 'react-redux';
import {SET_MESSAGE, SET_THEME} from '../core/actions/poster';
import {
     Header,
     Icon,
     Grid,
     Container,
     Button,
     Select,
     Form,
     TextArea
} from 'semantic-ui-react';

type Props = {
     setTheme(theme : string);
     setMessage(message : string);
     poster: any;
}

type State = {
     messageType: number;
     error: {
          message: string;
          active: boolean;
     },
     messages: any
}

class PostMessage extends Component < Props,
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
     }
     constructor(props : Props) {
          super(props);
          this.themeHandler = this
               .themeHandler
               .bind(this);
          this.selectorHandler = this
               .selectorHandler
               .bind(this);
          this.changeHandler = this
               .changeHandler
               .bind(this);
     }

     public themeHandler(theme : string) {
          const {setTheme} = this.props;
          setTheme(theme);
     }

     public selectorHandler(value : any) {
          const {setMessage} = this.props;
          setMessage(value);

     }

     public changeHandler(e : any) {
          const {setMessage} = this.props;
          setMessage(e.target.value);
     }

     public render() {
          const {poster} = this.props;
          return (
               <div>
                    <Header as='h2' className="text-center">Post Theme</Header>
                    <Grid centered columns={2}>
                         <Grid.Column
                              textAlign='center'
                              onClick={() => this.themeHandler('pancan-purple')}
                              className={(poster.theme === 'pancan-purple')
                              ? 'active theme-selector'
                              : 'theme-selector'}>
                              <Icon name="circle" size="big" className="pancan-purple"/>
                              <Header as="h4">pancan purple</Header>
                         </Grid.Column>
                         <Grid.Column
                              textAlign='center'
                              onClick={() => this.themeHandler('wpcc-purple')}
                              className={(poster.theme === 'wpcc-purple')
                              ? 'active theme-selector'
                              : 'theme-selector'}>
                              <Icon name="circle" size="big" className="wpcc-purple"/>
                              <Header as="h4">wpcc purple</Header>
                         </Grid.Column>
                    </Grid>
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
                    </Container>
               </div>
          );
     }
}

const mapStateTopProps = (state : any) => ({poster: state.rootReducer.poster});
const mapDispatchToProps = (dispatch : any) => ({
     setTheme: (theme : string) => dispatch({type: SET_THEME, payload: theme}),
     setMessage: (message : string) => dispatch({type: SET_MESSAGE, payload: message})
});

export default connect(mapStateTopProps, mapDispatchToProps)(PostMessage);
