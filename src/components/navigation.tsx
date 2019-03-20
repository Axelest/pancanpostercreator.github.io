import React, {Component} from 'react';
import {Container, Step, Icon, Button} from 'semantic-ui-react';
import One from './steps/one';
import Two from './steps/two';
import Three from './steps/three';
import {connect} from 'react-redux';
import {SET_STEP} from '../core/actions/poster';
type Props = {
     setStep(step : number);
     poster: any
}
class Nav extends Component < Props > {
     constructor(props : Props) {
          super(props);
          this.stepHandler = this
               .stepHandler
               .bind(this);
          this.stepRender = this
               .stepRender
               .bind(this);
     }

     public stepHandler(step : number) {
          const {setStep} = this.props;
          setStep(step);
     }

     public stepRender() : any {
          const {poster} = this.props;
          const {step} = poster;

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
               <div className="controller-container">
                    <Container>
                         <Step.Group fluid>
                              <Step
                                   active={(poster.step === 1)
                                   ? true
                                   : false}
                                   onClick={() => this.stepHandler(1)}
                                   className="step-button">
                                   <Icon name='vcard'/>
                                   <Step.Content>
                                        <Step.Title>Start</Step.Title>
                                   </Step.Content>
                              </Step>
                              <Step
                                   active={(poster.step === 2)
                                   ? true
                                   : false}
                                   onClick={() => this.stepHandler(2)}
                                   className="step-button">
                                   <Icon name='connectdevelop'/>
                                   <Step.Content>
                                        <Step.Title>Customize</Step.Title>
                                   </Step.Content>
                              </Step>
                              <Step
                                   active={(poster.step === 3)
                                   ? true
                                   : false}
                                   onClick={() => this.stepHandler(3)}
                                   className="step-button">
                                   <Icon name='share alternate square'/>
                                   <Step.Content>
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