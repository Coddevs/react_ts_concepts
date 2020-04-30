import * as React from 'react';
import { Container, Box, Typography, Button } from '@material-ui/core';

interface IStatelessProps {
  name: string, //@required
  index?: number //@optional
}
/* export class StatelessWidget extends React.Component<IStatelessProps, {}> {
  render(): JSX.Element {
    // console.log(this.props);
    return (
      // Same content of StatelessWidget (const)
    );
  }
} */

/* export function StatelessWidget(props: IStatelessProps): JSX.Element {
  // console.log(props);
  return (
    // Same content of StatelessWidget (const)
  );
} */

export const StatelessWidget = (props: IStatelessProps): JSX.Element => (
  <Container>
    {/* {console.log(props)} */}
    <Typography variant="h5" gutterBottom style={{textAlign: 'center'}} >
      StatelessWidget
    </Typography>
    <Button variant="contained" color="primary" style={{margin: '0px auto', display: 'block'}} >
      {props.name + ' #' + (props.index || '@')}
    </Button>
    <Box style={{height: '10px'}}/>
    <Box style={{textAlign: 'center'}} >
      <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
    </Box>
  </Container>
);
