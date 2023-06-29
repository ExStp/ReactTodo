/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import { Header } from "./Header";
import { useTasksDispatch } from "../context/TasksContext";
import { TaskItem } from "./TaskItem";

export function TaskList({ tasks, header }) {
	const dispatch = useTasksDispatch();

	function handleDeleteTask(id) {
		dispatch({ type: "deleted", id });
	}

	function handleCompleteTask(id) {
		dispatch({ type: "completed", id });
	}

	function handleEditTask(id, editingValue) {
		dispatch({ type: "edited", id, editingValue });
	}

	const tasksItems = tasks.map((task) => (
		<TaskItem
			key={task.id}
			id={task.id}
			title={task.title}
			completed={task.completed}
			handleEdit={handleEditTask}
			handleDelete={handleDeleteTask}
			handleComplete={handleCompleteTask}
		/>
	));

	if (!tasks.length) return;
	return (
		<Box sx={{ width: "100%", mt: 5 }}>
			<Header size={"h6"} style={{ textAlign: "center" }}>
				{header} ({tasks.length})
			</Header>
			{tasksItems}
		</Box>
	);
}
