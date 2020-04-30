import * as React from 'react';
import * as Types from '../config/types';
import { Typography, Container } from '@material-ui/core';

interface IFetchingState {
  posts: Types.IPostJSON[];
}
export class FetchingWidget extends React.Component<{}, IFetchingState> {
  constructor(props: any) {
    super(props);
    this.state = {
      posts: [],
    };
  };

  private post(): JSX.Element | JSX.Element[] {
    console.log('posts.length : ' + this.state.posts.length);
    if (this.state.posts.length===0) {
      return (
        <Typography variant="body1" gutterBottom style={{textAlign: 'center'}} >
          Nothing for now...
        </Typography>
      );
    } else {
      return this.state.posts.map((postJSON: Types.IPostJSON) => (
        <Container key={postJSON.id}>
          <Typography variant="h6" gutterBottom style={{textAlign: 'center'}} >
            {postJSON.id + ' - ' + postJSON.title}
          </Typography>
          <Typography variant="body1" gutterBottom >
            {postJSON.body}
          </Typography>
        </Container>
      ));
    }
  }

  render(): JSX.Element {
    return (
      <React.Fragment>
        <Typography variant="h5" gutterBottom style={{textAlign: 'center'}} >
          Rest API
        </Typography>
        {this.post()}
      </React.Fragment>
    );
  }

  async componentDidMount(): Promise<void> {
    const response: Response =  await fetch('https://jsonplaceholder.typicode.com/posts');
    const data: any = await response.json();
    // console.log(data);
    this.setState({posts: data});
  }
}