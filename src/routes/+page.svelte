<script>
  import { todos } from '../lib/stores/todoStore.js';
  let newTodo = '';

  function addTodo() {
    if (newTodo.trim()) {
      todos.update(list => [...list, { text: newTodo, done: false }]);
      newTodo = '';
    }
  }

  function toggle(index) {
    todos.update(list => {
      list[index].done = !list[index].done;
      return [...list];
    });
  }
</script>

<h1>My Todo List</h1>

<input bind:value={newTodo} placeholder="新しいTodo..." />
<button on:click={addTodo}>追加</button>

<ul>
  {#each $todos as todo, i}
    <li>
      <input type="checkbox" checked={todo.done} on:change={() => toggle(i)} />
      {todo.text}
    </li>
  {/each}
</ul>
