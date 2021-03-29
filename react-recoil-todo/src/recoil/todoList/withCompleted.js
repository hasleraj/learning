import { selector } from "recoil";
import SELECTORS from "../../enums/selectorKeys";
import todoListAtom from "./todoList";

const withCompleted = selector({
		key: SELECTORS.COMPLETEDTODOS,
		get: ({get}) => {
			let todos = get(todoListAtom);
			return todos.filter(todo => todo.completed === true)
		},
})

export default withCompleted;