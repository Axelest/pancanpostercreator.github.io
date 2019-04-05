import React, {Component} from 'react';
import {Container, Step, Icon, Button, Image} from 'semantic-ui-react';
import One from './steps/one';
import Two from './steps/two';
import Three from './steps/three';
import {connect} from 'react-redux';
import {SET_STEP} from '../core/actions/poster';

type Props = {
     setStep(step : number);
     poster: any
}
interface IState {
     element : any;
}
class Nav extends Component < Props,
IState > {
     state : IState = {
          element: HTMLElement
     };
     constructor(props : Props) {
          super(props);
          this.stepHandler = this
               .stepHandler
               .bind(this);
          this.stepRender = this
               .stepRender
               .bind(this);
     }

     componentDidMount() {
          const element = document.getElementById('controller-container-app');
          this.setState({element});
     }

     public stepHandler(step : number) {
          const {setStep} = this.props;
          setStep(step);
     }

     public stepRender() : any {
          const {poster} = this.props;
          const {step} = poster;
          this.state.element.scrollTop = 0;
          switch (step) {
               case 1:
                    return <One/>;
               case 2:
                    return <Two/>;
               case 3:
                    return <Three/>;
          }
     }

     public render() {
          const {poster} = this.props;

          return (
               <div className="controller-container" id="controller-container-app">
                    <Container>
                         <Step.Group fluid unstackable>
                              <Step
                                   active={(poster.step === 1)
                                   ? true
                                   : false}
                                   onClick={() => this.stepHandler(1)}
                                   className="step-button">
                                   <Image
                                        src='https://0b9aafecab229788ebf1-90f622f94aeb4d165ef7469777c28f31.ssl.cf2.rackcdn.com/poster-creator/NavigationIcons-01.png'
                                        size='mini'/>
                                   <Step.Content className="step-text">
                                        <Step.Title>Start</Step.Title>
                                   </Step.Content>
                              </Step>
                              <Step
                                   active={(poster.step === 2)
                                   ? true
                                   : false}
                                   onClick={() => this.stepHandler(2)}
                                   className="step-button">
                                   <Image
                                        src='https://0b9aafecab229788ebf1-90f622f94aeb4d165ef7469777c28f31.ssl.cf2.rackcdn.com/poster-creator/NavigationIcons-02.png'
                                        size='mini'/>
                                   <Step.Content className="step-text">
                                        <Step.Title>Customize</Step.Title>
                                   </Step.Content>
                              </Step>
                              <Step
                                   active={(poster.step === 3)
                                   ? true
                                   : false}
                                   onClick={() => this.stepHandler(3)}
                                   className="step-button">
                                   <Image
                                        src='https://0b9aafecab229788ebf1-90f622f94aeb4d165ef7469777c28f31.ssl.cf2.rackcdn.com/poster-creator/NavigationIcons-03.png'
                                        size='mini'/>
                                   <Step.Content className="step-text">
                                        <Step.Title>Save & Share</Step.Title>
                                   </Step.Content>
                              </Step>
                         </Step.Group>
                         {this.stepRender()}
                         <Button
                              onClick={() => this.stepHandler(poster.step - 1)}
                              className={(poster.step > 1)
                              ? 'back-button show'
                              : ' hide'}>
                              <Icon name='arrow left'/>&nbsp;Back
                         </Button>
                         <Button
                              className={(poster.step < 3)
                              ? 'next-button show'
                              : ' hide'}
                              onClick={() => this.stepHandler(poster.step + 1)}>
                              Next&nbsp;<Icon name='arrow right'/>
                         </Button>
                    </Container>
               </div>
          );
     }
}

const mapStateToProps = (state : any) => ({poster: state.rootReducer.poster});
const mapDispatchToProps = (dispatch : any) => ({
     setStep: (step : number): void => dispatch({type: SET_STEP, payload: step})
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);