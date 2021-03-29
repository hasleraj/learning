import { createUseStyles } from "react-jss";

// Components
import Heading from "./heading";
import List from "./list";
import ListItem from "./listItem";

const useStyles = createUseStyles({
  listWrapper: {
		width: '250px',
  },
})

const ListWrapper = ({title, dataItems}) => {
	const classes = useStyles();

	return (
		<div className={classes.listWrapper} >
			<Heading>{title}</Heading>
			<List>
				{dataItems.map((item) => (
					<ListItem key={item.title} item={item} />
				))}
			</List>
		</div>
	);
}
  
export default ListWrapper;