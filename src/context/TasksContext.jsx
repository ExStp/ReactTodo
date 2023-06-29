import { createContext, useContext, useReducer } from "react";
import useLocalStorage from "use-local-storage";

const TasksContext = createContext(null);
const TasksDispatch = createContext(null);

export function useTasks() {
	return useContext(TasksContext);
}

export function useTasksDispatch() {
	return useContext(TasksDispatch);
}

// eslint-disable-next-line react/prop-types
export function TasksProvider({ children }) {
	const initialTasks = [];
	const [appStorage, setAppStorage] = useLocalStorage("ToDoApp", initialTasks);
	const [tasks, dispatch] = useReducer(tasksReducer, appStorage);

	return (
		<TasksContext.Provider value={tasks}>
			<TasksDispatch.Provider value={dispatch}>{children}</TasksDispatch.Provider>
		</TasksContext.Provider>
	);

	function tasksReducer(tasks, action) {
		switch (action.type) {
			case "added": {
				const addedTasks = [
					...tasks,
					{ id: action.id, title: action.title, completed: false },
				];
				setAppStorage(addedTasks);
				return addedTasks;
			}
			case "completed": {
				const completedTasks = [
					...tasks.map((task) =>
						task.id === action.id ? { ...task, completed: !task.completed } : task
					),
				];
				setAppStorage([completedTasks]);
				return completedTasks;
			}
			case "deleted": {
				const delTasks = [...tasks.filter((task) => task.id !== action.id)];
				setAppStorage(delTasks);
				return delTasks;
			}
			case "edited": {
				const editedTasks = [
					...tasks.map((task) =>
						task.id === action.id ? { ...task, title: action.editingValue } : task
					),
				];
				setAppStorage(editedTasks);
				return editedTasks;
			}
			default: {
				console.warn("TasksContext: Unknown action.type " + action.type);
				return tasks;
			}
		}
	}
}
