import React, {Component} from 'react';
import Preview from './preview';
import Nav from './navigation';
import {Grid} from 'semantic-ui-react';

export class App extends Component {
     render() {
          return (
               <Grid container columns='equal' divided stackable>
                    <Grid.Column mobile={16} tablet={16} computer={16} largeScreen={10}>
                         <Nav/>
                    </Grid.Column>
                    <Grid.Column
                         mobile={16}
                         tablet={16}
                         computer={16}
                         largeScreen={6}
                         className="purple-gradient-bck"
                         style={{
                         paddingTop: 25,
                         display: 'flex',
                         alignItems: 'center',
                         minHeight: 600
                    }}>
                         <Preview/>
                    </Grid.Column>
               </Grid>
          );
     }
}

export default App;