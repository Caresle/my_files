import { create } from 'zustand';

interface IThemeAppStore {
	useDark: boolean;
	changeTheme: () => void;
	setDefault: (value: boolean) => void;
}

const useThemeAppStore = create<IThemeAppStore>()((set) => ({
	useDark: false,
	changeTheme: () => set(state => ({ useDark: !state.useDark })),
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	setDefault: value => set(_ => ({ useDark: value })),
}));

export default useThemeAppStore;
