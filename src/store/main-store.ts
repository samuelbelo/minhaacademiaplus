import { defineStore } from "pinia";

interface State {
	loading: boolean,
	progress: number,
	message: string,
	error: boolean,
	themeDark: boolean
}

export const useMainStore = defineStore("main", {
	state: (): State => ({
		loading: false,
		progress: 0,
		message: "",
		error: false,
		themeDark: window.matchMedia('(prefers-color-scheme: dark)').matches
	}),
	getters: {
		getLoading: (state): boolean => state.loading,
		getProgress: (state): number => state.progress,
		getMessage: (state): string => state.message,
		getError: (state): boolean => state.error,
		getThemeDark: (state): boolean => state.themeDark
	},
	actions: {
		setLoading(display: boolean) {
			this.loading = display;
		},
		setProgress(s, progress: number) {
			this.progress = progress;
			this.loading = true;
		},
		setMessage(s, message: string) {
			this.message = message;
		},
		setError(s, error: boolean) {
			this.error = error;
		},
		setThemeDark(themeDark: boolean) {
			this.themeDark = themeDark
		}
	}
});
