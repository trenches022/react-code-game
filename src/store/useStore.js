import { create } from 'zustand';

const useStore = create((set) => ({
  currentLevel: 1,
  totalLevels: 10,
  completedLevels: [],
  userCode: '',
  userXp: 0,
  
  setUserCode: (code) => set({ userCode: code }),
  
  completeLevel: (levelId) => set((state) => {
    if (state.currentLevel >= state.totalLevels) return state;
    return {
      completedLevels: [...state.completedLevels, levelId],
      currentLevel: state.currentLevel + 1,
      userCode: '',
      userXp: state.userXp + 100,
    };
  }),
}));

export default useStore;