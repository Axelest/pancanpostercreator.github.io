import React, {Component} from 'react';
import Preview from './preview';
import Controller from './controller';
import {Grid} from 'semantic-ui-react';

export class App extends Component {
     render() {
          return (
               <Grid container columns={2} divided stackable>
                    <Grid.Column width={10}>
                         <Controller/>
                    </Grid.Column>
                    <Grid.Column width={6} className="dark-bck">
                         <Preview/>
                    </Grid.Column>
               </Grid>
          );
     }
}

export default App;