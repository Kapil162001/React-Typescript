class Todo {
  id: string;
  text: string;
  constructor(todoText: string) {
    this.text = todoText;
    this.id = Math.random().toString();
    console.log(this.id);
  }
}

export default Todo;
