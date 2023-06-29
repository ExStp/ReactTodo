import { Button, Container, TextField } from "@mui/material";
import { useState } from "react";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { useTasksDispatch } from "../context/TasksContext";
import { nanoid } from "nanoid";

export function TaskForm() {
	const initialInput = "";
	const [inputValue, setInputValue] = useState(initialInput);

	const dispatch = useTasksDispatch();

	function handleSubmit(e) {
		e.preventDefault();
		if (!inputValue.trim()) return;
		dispatch({ type: "added", id: nanoid(), title: inputValue });
		setInputValue(initialInput);
	}

	return (
		<Container sx={{ mt: 4 }}>
			<form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px" }}>
				<TextField
					variant="standard"
					fullWidth
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					label="Добавить задачу"
				/>

				<Button variant="contained" type="submit" endIcon={<PlaylistAddIcon />}>
					Add
				</Button>
			</form>
		</Container>
	);
}
