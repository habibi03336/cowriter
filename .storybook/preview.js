import "bootstrap/dist/css/bootstrap.min.css";

// Only import this if you want to use Bootstrap's
// JQuery helpers
import "bootstrap/dist/js/bootstrap.bundle";

export const parameters = {
	controls: {
		expanded: true,
		hideNoControlsWarning: true,
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};
