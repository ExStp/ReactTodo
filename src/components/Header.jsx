import { Container, Typography } from "@mui/material";

// eslint-disable-next-line react/prop-types
export function Header({ size, children, ...other }) {
	return (
		<Container>
			<Typography variant={size} gutterBottom sx={{ color: "primary.main" }} {...other}>
				{children}
			</Typography>
		</Container>
	);
}
