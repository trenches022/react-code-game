import { create } from 'zustand';

const useStore = create((set) => ({
  currentLevel: 1,
  totalLevels: 12,
  completedLevels: [],
  userCode: '',
  userXp: 0,
  userLevel: 'Junior',
  
  setUserCode: (code) => set({ userCode: code }),
  
  completeLevel: (levelId) => set((state) => {
    if (state.currentLevel >= state.totalLevels) return state;

    if (state.currentLevel >= 5) {
      state.userLevel = 'Middle';
    }
    if (state.currentLevel >= 10) {
      state.userLevel = 'Senior';
    }
    
    return {
      completedLevels: [...state.completedLevels, levelId],
      currentLevel: state.currentLevel + 1,
      userCode: '',
      userXp: state.userXp + 100,
    };
  }),
}));

export default useStore;