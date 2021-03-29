import { useRecoilValue } from "recoil";

// Components
import ListWrapper from "../components/listWrapper";
import AddToDo from "../components/addTodo";

// State
import withActive from "../recoil/todoList/withActive";
import withCompleted from "../recoil/todoList/withCompleted";

const Main = () => {
	const todos = useRecoilValue(withActive);
	const completedTodos = useRecoilValue(withCompleted);

  return (
		<div className="main">
			<AddToDo />
			<ListWrapper title="Things to do" dataItems={todos} />
			<ListWrapper title="Completed" dataItems={completedTodos} />
		</div>
	)
}

export default Main;