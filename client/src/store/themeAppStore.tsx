import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface IThemeAppStore {
	useDark: boolean;
	changeTheme: () => void;
	setDefault: (value: boolean) => void;
}

const useThemeAppStore = create<IThemeAppStore>()(
	persist(
		(set) => ({
			useDark: false,
			changeTheme: () => set(state => {
				return { useDark: !state.useDark };
			}),
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			setDefault: value => set(_ => ({ useDark: value })),
		}),
		{
			name: 'theme-storage',
			storage: createJSONStorage(() => localStorage),
		}
	)
);

export default useThemeAppStore;
