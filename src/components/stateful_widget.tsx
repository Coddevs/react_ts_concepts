import * as React from 'react';
import * as Types from '../config/types';
import { Container, Box, TextField, Typography } from '@material-ui/core';


interface IStatefulProps {
  initialFirtName?: string; //@optional
  initialLastName?: string; //@optional
}
/* interface IStatefulState {
  firstName: string;
  lastName: string;
}
export class StatefulWidget extends React.Component<IStatefulProps, IStatefulState> {
  // state = { => IStatefulState
  //   firstName: this.props.initialFirtName || '',
  //   lastName: this.props.initialLastName || '',
  // };

  constructor(props: IStatefulProps) {
    super(props);
    this.state = { //@required where (IStatefulState!=null && state==null)
      firstName: this.props.initialFirtName || '',
      lastName: this.props.initialLastName || '',
    };
  };

  private onFirstName(event: Types.TextFieldEvent): void {
    this.setState({firstName: event.target.value});
  }

  private onLastName(event: Types.TextFieldEvent): void {
    this.setState({lastName: event.target.value});
  }

  render(): JSX.Element {
    return (
      <Container>
        <Typography variant="h5" gutterBottom style={{textAlign: 'center'}} >
          StatefulWidget
        </Typography>
        <Box style={{width: '399.999px', margin: '0 auto'}} >
          <TextField
            value={this.state.firstName}
            onChange={(e) => this.onFirstName(e)}
            label="First Name"
            variant="outlined"
          />
          <Box style={{width: '5.333px', display: 'inline-block'}} />
          <TextField
            value={this.state.lastName}
            onChange={(e) => this.onLastName(e)}
            label="Last Name"
            variant="outlined"
          />
        </Box>
        <Box style={{height: '10px'}} />
        <Typography variant="body2" gutterBottom style={{textAlign: 'center'}} >
          Hello, {this.state.firstName} {this.state.lastName}
        </Typography>
      </Container>
    );
  }
} */

/* export function StatefulWidget(props: IStatefulProps): JSX.Element {
  // Same content of StatefulWidget (const)
} */

export const StatefulWidget = (props: IStatefulProps): JSX.Element => { //State Hook
  const [firstName, setFirstName] = React.useState<string>(props.initialFirtName || '');
  const [lastName, setLastName] = React.useState<string>(props.initialLastName || '');

  function onFirstName(event: Types.TextFieldEvent): void {
    setFirstName(event.target.value);
  }

  function onLastName(event: Types.TextFieldEvent): void {
    setLastName(event.target.value);
  }

  return (
    <Container>
      <Typography variant="h5" gutterBottom style={{textAlign: 'center'}} >
        StatefulWidget
      </Typography>
      <Box style={{width: '399.999px', margin: '0 auto'}} >
        <TextField
          value={firstName}
          onChange={(e) => onFirstName(e)}
          label="First Name"
          variant="outlined"
        />
        <Box style={{width: '5.333px', display: 'inline-block'}} />
        <TextField
          value={lastName}
          onChange={(e) => onLastName(e)}
          label="Last Name"
          variant="outlined"
        />
      </Box>
      <Box style={{height: '10px'}} />
      <Typography variant="body2" gutterBottom style={{textAlign: 'center'}} >
        Hello, {firstName} {lastName}
      </Typography>
    </Container>
  );
};