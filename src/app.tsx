import * as React from 'react';
import { Box, Container, Divider, Typography } from '@material-ui/core';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { StatelessWidget } from './components/stateless_widget';
import { StatefulWidget } from './components/stateful_widget';
import { TaskListWidget } from './components/task_list_widget';
import { FetchingWidget } from './components/fetching_widget';
import { Routes } from './config/routes';

// Router

export const App = (): JSX.Element => {
  return (
    <Router>
      <React.Fragment>
        <Box style={{height: '10px'}} />
        <Typography variant="h5" gutterBottom style={{textAlign: 'center'}} >
          Components - Styles - State - Props (Typescript) - Passing Functions - Router - Fetching Data
        </Typography>
        <Box style={{height: '10px'}} />
        <Divider />
        <Typography variant="h5" gutterBottom style={{textAlign: 'center'}} >
          <Container><Link to={Routes.initial} >Home</Link></Container>
          <Container><Link to={Routes.posts} >Posts</Link></Container>
        </Typography>
        <Divider />
      </React.Fragment>
      <Route exact path={Routes.initial} render={() => {
        return (
          <React.Fragment>
            <Box style={{height: '10px'}} />
            <StatelessWidget name={'My button'} />
            <StatelessWidget name={'My button'} index={2020} />
            <Box style={{height: '30px'}} />
            <Divider />
            <Box style={{height: '30px'}} />
            <StatefulWidget initialFirtName={'React'} initialLastName={'js'} />
            <Box style={{height: '30px'}} />
            <Divider />
            <Box style={{height: '30px'}} />
            <TaskListWidget />
          </React.Fragment>
        );
      }} />
      <Route path={Routes.posts} component={() => {
        return (
          <React.Fragment>
            <Box style={{height: '10px'}} />
            <FetchingWidget />
          </React.Fragment>
        );
      }} />
    </Router>
  );
}