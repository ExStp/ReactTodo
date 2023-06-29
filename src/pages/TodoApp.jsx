import { Container, useMediaQuery } from "@mui/material";
import { TaskForm } from "../components/TaskForm";
import { Header } from "../components/Header";
import { TaskOutput } from "../components/TaskOutput";

export function TodoApp() {
	const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
	return (
		<Container
			sx={{
				minHeight: '100vh',
				bgcolor: "background.default",
				height: "fit-content",
				padding: isSmallScreen ? '0' : '0 20'
			}}
		>
			<Container
				sx={{
					padding: '40px 0',
					bgcolor: "transparent",
					height: "fit-content",
					width: isSmallScreen ? "100%" : "70%",
					minWidth: isSmallScreen ? '300px' : "550px",
					maxWidth: "800px",
				}}
			>
				<Header size={"h3"}>Todo App</Header>
				<TaskForm />
				<TaskOutput />
			</Container>
		</Container>
	);
}
