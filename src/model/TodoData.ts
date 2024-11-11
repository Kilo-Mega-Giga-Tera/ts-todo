class TodoData {
  id: string;
  title: string;

  constructor(text: string) {
    this.id = new Date().toISOString();
    this.title = text;
  }
}

export default TodoData;
