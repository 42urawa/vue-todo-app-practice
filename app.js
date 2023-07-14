const vueOption = {
  setup() {
    const message = "ToDoアプリでございます";
    const todos = Vue.ref(JSON.parse(localStorage.getItem("todos")) || []);
    const newText = Vue.ref("");
    const editText = Vue.ref("");
    const createTodo = () => {
      const id =
        todos.value.length === 0
          ? 1
          : Math.max(...todos.value.map((todo) => todo.id)) + 1;
      const text = newText.value;
      todos.value.push({ id, text, isEditing: false });
      newText.value = "";
      localStorage.setItem("todos", JSON.stringify(todos.value));
    };
    const editTodo = (editedTodo) => {
      todos.value = todos.value.map((todo) => ({
        ...todo,
        isEditing: todo === editedTodo,
      }));
      editText.value = editedTodo.text;
    };
    const updateTodo = (updatedTodo) => {
      todos.value = todos.value.map((todo) => {
        return todo === updatedTodo
          ? { ...todo, text: editText.value, isEditing: false }
          : todo;
      });
      editText.value = "";
      localStorage.setItem("todos", JSON.stringify(todos.value));
    };
    const deleteTodo = (removedTodo) => {
      todos.value = todos.value.filter((todo) => todo !== removedTodo);
      localStorage.setItem("todos", JSON.stringify(todos.value));
    };
    const cancelTodo = () => {
      todos.value = todos.value.map((todo) => ({ ...todo, isEditing: false }));
    };

    return {
      message,
      todos,
      newText,
      editText,
      createTodo,
      editTodo,
      updateTodo,
      deleteTodo,
      cancelTodo,
    };
  },
};

const vm = Vue.createApp(vueOption);
vm.mount("#app");
