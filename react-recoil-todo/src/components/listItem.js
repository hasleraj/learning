import { createUseStyles } from 'react-jss';
import { useRecoilState } from 'recoil';
import todoListAtom from '../recoil/todoList/todoList';

const useStyles = createUseStyles({
  listItem: {
		display: 'flex',
		justifyContent: 'space-between',
		padding: '8px',
  },
	listItemContent: {
		display: 'flex',
		paddingRight: '8px',
  }
})

const replaceItemAtIndex = (arr, index, newValue) => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

const ListItem = ({item}) => {
	const classes = useStyles();
	const [todos, setTodos] = useRecoilState(todoListAtom);
	const index = todos.findIndex((listItem) => listItem.title === item.title);

	const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todos, index, {
      ...item,
      completed: !item.completed,
    });

    setTodos(newList);
  };

	return (
		<div className={classes.listItem}>
			<div className={classes.listItemContent}>
				<input checked={item.completed} type="checkbox" onChange={toggleItemCompletion} />
				<div>{item.title}</div>
			</div>
			<button>Delete</button>
		</div>
	);
}
  
  export default ListItem;