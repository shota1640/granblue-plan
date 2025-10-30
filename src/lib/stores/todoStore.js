import { writable } from 'svelte/store';
import localforage from 'localforage';

// localForage インスタンス作成（任意で設定）
const storage = localforage.createInstance({
  name: 'myApp',
  storeName: 'todos'
});

// 初期値を localForage から読み込む
async function loadTodos() {
  const saved = await storage.getItem('todos');
  return saved || [];
}

// Svelte store を作成
export const todos = writable([]);

// 初期化
loadTodos().then((value) => todos.set(value));

// store 更新時に localForage に保存
todos.subscribe(async (value) => {
  await storage.setItem('todos', value);
});
