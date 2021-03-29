import { useState } from "react";
import { useSetRecoilState } from "recoil";

// State
import todoListAtom from "../recoil/todoList/todoList";

const AddTodo = () => {
	const setTodosState = useSetRecoilState(todoListAtom);
	const [newTodoTitle, setNewTodoTitle] = useState('');

	const addTodo = () => {
		const newItem = {
			title: newTodoTitle,
			completed: false
		}

		setTodosState(todos => [...todos, newItem])
		setNewTodoTitle('');
  }

	return (
		<>
			<input 
				type="text"
				id="todo"
				name="todo"
				value={newTodoTitle}
        		onChange={e => setNewTodoTitle(e.target.value)} />
			<button type="button" onClick={addTodo}>Click Me!</button>
		</>
	);
}
  
export default AddTodo;