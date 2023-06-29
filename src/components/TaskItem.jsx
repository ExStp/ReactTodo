/* eslint-disable react/prop-types */
import { Box, Checkbox, IconButton, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export function TaskItem({ title, id, completed, handleDelete, handleComplete, handleEdit }) {
	return (
		<Box
			sx={{
				boxSizing: "border-box",
				height: "55px",
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				border: (theme) => `1px solid ${theme.palette.primary.light}`,
				padding: "7px 15px",
				borderRadius: "8px",
				marginTop: "5px",
				gap: "8px",
			}}
		>
			<TaskItemContent
				title={title}
				id={id}
				completed={completed}
				handleEdit={handleEdit}
				handleDelete={handleDelete}
				handleComplete={handleComplete}
			/>
		</Box>
	);
}

function TaskItemContent({ title, id, completed, handleDelete, handleComplete, handleEdit }) {
	const emptyEditValue = "";
	const [isEditing, setIsEditing] = useState(false);
	const [editingValue, setEditingValue] = useState(title);

	function handleCloseEditing() {
		setIsEditing(false);
		setEditingValue(title);
	}

	function handleSaveEditing() {
		if (editingValue === emptyEditValue) return;
		handleEdit(id, editingValue);
		setIsEditing(false);
	}

	if (completed) {
		return (
			<>
				<Checkbox
					size="small"
					sx={{ padding: "0" }}
					checked={completed}
					onChange={() => handleComplete(id)}
				></Checkbox>
				<div style={{ overflowWrap: "anywhere" }}>{title}</div>
				<IconButton
					aria-label="delete"
					size="small"
					color="secondary"
					onClick={() => handleDelete(id)}
				>
					<DeleteIcon fontSize="small" />
				</IconButton>
			</>
		);
	}
	return (
		<>
			<Checkbox
				sx={{ padding: "0" }}
				checked={completed}
				size="small"
				onChange={() => handleComplete(id)}
			></Checkbox>
			{isEditing ? (
				<TextField
					value={editingValue}
					onChange={(e) => setEditingValue(e.target.value)}
					fullWidth
					id="standard-basic"
					label="Задача"
					variant="standard"
					size="small"
				/>
			) : (
				<div style={{ overflowWrap: "anywhere" }}>{title}</div>
			)}

			<Box sx={{ display: "flex", justifyContent: "right" }}>
				{isEditing ? (
					<Box sx={{ display: "flex", justifyContent: "right" }}>
						<IconButton aria-label="save" size="small" onClick={handleSaveEditing}>
							<CheckIcon />
						</IconButton>
						<IconButton aria-label="close" size="small" onClick={handleCloseEditing}>
							<CloseIcon />
						</IconButton>
					</Box>
				) : (
					<Box sx={{ display: "flex", justifyContent: "right" }}>
						<IconButton
							aria-label="edit"
							size="small"
							color="primary"
							onClick={() => setIsEditing(true)}
						>
							<EditIcon fontSize="small" />
						</IconButton>
						<IconButton
							aria-label="delete"
							size="small"
							color="secondary"
							onClick={() => handleDelete(id)}
						>
							<DeleteIcon fontSize="small" />
						</IconButton>
					</Box>
				)}
			</Box>
		</>
	);
}
