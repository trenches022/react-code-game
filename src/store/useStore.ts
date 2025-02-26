import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type TUserData = {
  currentLevel: number;
  totalLevels: number;
  completedLevels: number[];
  userCode: string;
  userXp: number;
  userLevel: 'Junior' | 'Middle' | 'Senior';

  setUserCode: (code: string) => void;
  completeLevel: (levelId: number) => void;
};

const useStore = create<TUserData>()(
  persist(
    (set) => ({
      currentLevel: 1,
      totalLevels: 12,
      completedLevels: [],
      userCode: '',
      userXp: 0,
      userLevel: 'Junior',

      setUserCode: (code) => set({ userCode: code }),

      completeLevel: (levelId) =>
        set((state) => {
          if (state.currentLevel >= state.totalLevels) return state;

          let newUserLevel: 'Junior' | 'Middle' | 'Senior' = 'Junior';
          if (state.currentLevel + 1 >= 5) newUserLevel = 'Middle';
          if (state.currentLevel + 1 >= 10) newUserLevel = 'Senior';

          return {
            completedLevels: [...state.completedLevels, levelId],
            currentLevel: state.currentLevel + 1,
            userXp: state.userXp + 100,
            userCode: '',
            userLevel: newUserLevel,
          };
        }),
    }),
    { name: 'gameState' }
  )
);

export default useStore;
