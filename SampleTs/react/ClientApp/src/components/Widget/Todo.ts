export class TodoItem {
  id: number = Date.now();
  constructor(public text: string) { }
}

export class TodoList {
  items: TodoItem[] = [];
  add(text: string) {
    this.items.push(new TodoItem(text));
  }
  remove(id: number) {
    this.items = this.items.filter(x => x.id !== id);
  }
}