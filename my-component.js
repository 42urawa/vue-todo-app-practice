export default {
  data() {
    return {
      newTodo: "",
      editTodo: "",
      todos: [
        { id: 1, text: "Learn HTML", isEditing: false },
        { id: 2, text: "Learn JavaScript", isEditing: false },
        { id: 3, text: "Learn Vue", isEditing: false },
      ],
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    toggle() {
      this.awesome = !this.awesome;
    },
    createTodo() {
      const id =
        this.todos.length === 0
          ? 1
          : Math.max(...this.todos.map((todo) => todo.id));
      this.todos.push({ id: id, text: this.newTodo });
      this.newTodo = "";
    },
    editTodo(editedTodo) {
      this.todos = this.todos.map((todo) => ({
        ...todo,
        isEditing: todo.id === editedTodo.id,
      }));
    },
    updateTodo(updatedTodo) {
      this.todos = this.todos.filter((todo) => todo !== removedTodo);
    },
    deleteTodo(removedTodo) {
      this.todos = this.todos.filter((todo) => todo !== removedTodo);
    },
  },
  template: `
    <form @submit.prevent="addTodo">
      <input v-model="newTodo">
      <button>Add Todo</button>
    </form>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <p>{{ todo.text }}</p>
        <button @click="editTodo(todo)">E</button>
        <button @click="updateTodo(todo)">U</button>
        <button @click="removeTodo(todo)">D</button>
      </li>
    </ul>
  `,
};
