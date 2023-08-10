import { create, useStore } from 'zustand';
import {
	persist,
	createJSONStorage
} from 'zustand/middleware';

interface IUserStore {
	user: string;
	saveUser: (data: string) => void;
}

const userStore = create<IUserStore>()(
	persist(
		(set) => ({
			user: '',
			saveUser(data) {
				return set({ user: data });
			}
		}),
		{
			name: 'user-storage',
			storage: createJSONStorage(() => sessionStorage),
		}
	)
);

export default useStore;
