import React, {Component} from 'react';
import {Container} from 'semantic-ui-react';
import {connect} from 'react-redux';
import Vertical from './previews/vertical';
import Horizontal from './previews/horizontal';
import Square from './previews/square';

type Props = {
     poster: any;
}
class Preview extends Component < Props > {

     constructor(props : Props) {
          super(props);
          this.renderPreview = this
               .renderPreview
               .bind(this);
     }

     public renderPreview() : any {
          const {poster} = this.props;

          switch (poster.layoutType) {
               case 1:
                    return <Square/>;
               case 2:
                    return <Horizontal/>;
               case 3:
                    return <Vertical/>;
               default:
                    return console.log('invalid layout type');
          }
     }

     public render() {
          return (
               <Container className="preview-container">
                    <div id="final-poster">
                         {this.renderPreview()}
                    </div>
               </Container>
          );
     }
}

const mapStateToProps = (state : any) => ({poster: state.rootReducer.poster});

export default connect(mapStateToProps, null)(Preview);