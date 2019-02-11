import React, {Component} from 'react';
import {connect} from 'react-redux';
import PosterMessage from '../poster.message';
import PosterImage from '../poster.image';
import PostMessage from '../post.message';
import PostImage from '../post.image';

type Props = {
     poster: any;
}
class Two extends Component < Props > {
     constructor(props : Props) {
          super(props);
          this.renderStep = this
               .renderStep
               .bind(this);
     }

     public renderStep(type : number) {
          switch (type) {
               case 1:
                    return <PosterMessage/>;
               case 2:
                    return <PosterImage/>;
               case 3:
                    return <PostMessage/>;
               case 4:
                    return <PostImage/>;
               default:
                    return 'Error ocurred go back';
          }
     }

     public render() {
          const {poster} = this.props;
          return (
               <div className="step-3-container">
                    {this.renderStep(poster.layoutType)}
               </div>
          );
     }
}

const mapStateTopProps = (state : any) => ({poster: state.rootReducer.poster});

export default connect(mapStateTopProps, null)(Two);