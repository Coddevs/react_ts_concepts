export type TextFieldEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

export interface ITaskJSON { //@type /services/tasks.json
  uid: string;
  title: string;
  description: string;
  done: boolean;
}

export interface IPostJSON { //@type https://jsonplaceholder.typicode.com/posts
  id: string;
  title: string;
  body: string;
}