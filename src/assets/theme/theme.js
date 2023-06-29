import { createTheme } from "@mui/material";
import { deepPurple } from "@mui/material/colors";

const theme = createTheme({
    
	palette: {
		primary: {
			main: deepPurple[500],
			light: deepPurple[200]
		},
		background: {
			default: "#f5f5f5", // Задайте цвет фона по умолчанию
			paper: "#ffffff", // Задайте цвет фона для бумажных компонентов (например, карточек)
		},
		// Дополнительные цвета
		secondary: {
			main: "#f44336", // Задайте вторичный цвет
		},
		text: {
			primary: "#212121", // Задайте цвет основного текста
			secondary: "#757575", // Задайте цвет вторичного текста
		},
	},
});

export {theme}
