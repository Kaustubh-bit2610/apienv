const BASE_URL = 'http://localhost:3005/api/todos';

export const getAllTodos = async () => {
  const response = await fetch(`/api/todos/viewall`);
  if (!response.ok) {
    throw new Error('Failed to fetch todos');
  }
  return response.json();
};

export const addTodo = async (title, completed) => {
  const response = await fetch(`${BASE_URL}/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, completed }),
  });
  if (!response.ok) {
    throw new Error('Failed to add todo');
  }
  return response.json();
};

export const updateTodo = async (id, title, completed) => {
  const response = await fetch(`http://localhost:3005/api/todos/update/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, completed }),
  });
  if (!response.ok) {
    throw new Error('Failed to update todo');
  }
  return response.json();
};

export const deleteTodo = async (id) => {
  const response = await fetch(`http://localhost:3005/api/todos/delete/${id}`, {
    method: 'POST',
  });
  if (!response.ok) {
    throw new Error('Failed to delete todo');
  }
  return response.json();
};
