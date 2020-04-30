import * as React from 'react';
import * as Types from '../config/types';
import tasksImported from '../services/tasks.json';
import { Container, Box, TextField, Typography, Button } from '@material-ui/core';
import { Card, CardActionArea, CardContent, Checkbox } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';

// Passing Functions

interface ICreateTask {
  title: string;
  description: string;
}



interface IFormProps {
  createTask: (args: ICreateTask) => boolean; //typedef
}
interface IFormState {
  title: string,
  description: string,
}
class FormWidget extends React.Component<IFormProps, IFormState> {
  constructor(props: IFormProps) {
    super(props);
    this.state = {
      title: '',
      description: '',
    };
  }

  private onTitle(event: Types.TextFieldEvent): void {
    this.setState({title: event.target.value});
  }

  private onDescription(event: Types.TextFieldEvent): void {
    this.setState({description: event.target.value});
  }

  private onSave(): void {
    const result: boolean = this.props.createTask({
      title: this.state.title,
      description: this.state.description
    });

    if (result===true) {
      this.setState({title: ''});
      this.setState({description: ''});
    }
  }

  render(): JSX.Element {
    return (
      <React.Fragment>
        <Box style={{width: '399.999px', margin: '0 auto'}} >
          <TextField
            value={this.state.title}
            onChange={(e) => this.onTitle(e)}
            label="Task title"
            variant="outlined"
          />
          <Box style={{width: '5.333px', display: 'inline-block'}} />
          <TextField
            value={this.state.description}
            onChange={(e) => this.onDescription(e)}
            label="Task description"
            variant="outlined"
          />
        </Box>
        <Button
          onClick={(_) => this.onSave()} variant="contained" color="primary"
          style={{margin: '10px auto', display: 'block'}} >
          Add task
        </Button>
      </React.Fragment>
    );
  }
}



interface ITaskProps {
  title: string;
  description: string;
  done: boolean;
  switchDone: () => void;
  deleteTask: () => void;
}
class TaskWidget extends React.Component<ITaskProps, {}> {
  render() {
    const taskProps = this.props;
    // console.log(taskProps);
    return (
      <Card style={{marginBottom: '20px'}}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {taskProps.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {taskProps.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Container>
          <Typography gutterBottom variant="h5" component="h2" style={{margin: '0 auto', display: 'inline-block'}}>
            Completed?
          </Typography>
          <Checkbox
            checked={taskProps.done}
            onChange={(_) => taskProps.switchDone()}
            name="checkedB"
            color="primary"
            style={{margin: '0px auto', display: 'inline-block'}}
          />
          <Button
            onClick={(_) => taskProps.deleteTask()}
            variant="contained"
            color="primary"
            style={{margin: '10px 0', display: 'block'}} >
            Delete task
          </Button>
        </Container>
      </Card>
    );
  }
}



interface ITaskListState {
  tasks: Types.ITaskJSON[];
  title: string;
  description: string;
}
export class TaskListWidget extends React.Component<{}, ITaskListState> {
  constructor(props: any) {
    super(props);
    this.state = {
      tasks: tasksImported,
      title: '',
      description: '',
    };
  }

  private createTask(args: ICreateTask): boolean {
    if (args.title===undefined || args.description===undefined) {
      console.log('===Error on create task (args===undefined)');
      return false;
    } else if (args.title.length===0 || args.description.length===0) {
      console.log('===Error on create task (length===0)');
      return false;
    } else {
      const newTask: Types.ITaskJSON = {
        uid: uuidv4(),
        title: args.title,
        description: args.description,
        done: false
      };
      console.log('Adding task [' + newTask.title + ': ' + newTask.uid + ']');

      this.setState({
        tasks: [...this.state.tasks, newTask]
      });
      console.log('===Task added');
      return true;
    }
  }

  private updateTask/*switchDone*/(args: {uid: string}): void {
    const newTask: Types.ITaskJSON[] = this.state.tasks.map((task) => {
      if (task.uid===args.uid) {
        task.done = !task.done
      }
      return task;
    });
    this.setState({tasks: newTask});
  }

  private deleteTask(args: {uid: string}): void {
    const result: Types.ITaskJSON[] = this.state.tasks.filter((task) => (task.uid!==args.uid));
    // console.log(this.state.tasks);
    // console.log(result);
    // console.log(this.state.tasks);
    this.setState({tasks: result});
  }

  render(): JSX.Element {
    return (
      <Container>
        <Typography variant="h5" gutterBottom style={{textAlign: 'center'}} >
          CRUD (State)
        </Typography>
        <FormWidget createTask={(args: ICreateTask) => this.createTask(args)} />
        {this.state.tasks.map((taskJSON: Types.ITaskJSON) => (
          <TaskWidget
            key={taskJSON.uid}
            title={taskJSON.title}
            description={taskJSON.description}
            done={taskJSON.done}
            switchDone={() => this.updateTask({uid: taskJSON.uid})}
            deleteTask={() => this.deleteTask({uid: taskJSON.uid})}
          />
        ))}
      </Container>
    );
  }
}