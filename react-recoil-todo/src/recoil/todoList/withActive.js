import { selector } from "recoil";
import SELECTORS from "../../enums/selectorKeys";
import todoListAtom from "./todoList";

const withActive = selector({
    key: SELECTORS.ACTIVETODOS,
    get: ({get}) => {
			const todos = get(todoListAtom);
			return todos.filter(todo => !todo.completed)
    },
})

export default withActive;