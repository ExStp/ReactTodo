import { ThemeProvider } from "@emotion/react";
import { theme } from "./assets/theme/theme";
import { TasksProvider } from "./context/TasksContext";
import { TodoApp } from "./pages/TodoApp";
function App() {
	return (
		<ThemeProvider theme={theme}>
			<TasksProvider>
				<TodoApp />
			</TasksProvider>
		</ThemeProvider>
	);
}

export default App;
