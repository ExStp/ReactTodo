import { Container } from "@mui/material";
import { TaskList } from "./TaskList";
import { useTasks } from "../context/TasksContext";

export function TaskOutput() {
	const tasks = useTasks();
	const completedTasks = tasks.filter((task) => task.completed === true);
	const inCompletedTasks = tasks.filter((task) => task.completed === false);

	return (
		<Container sx={{ mt: 3 }}>
			<TaskList header={"План"} tasks={inCompletedTasks} />
			<TaskList header={"Готово"} tasks={completedTasks} />
		</Container>
	);
}
