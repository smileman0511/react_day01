import { create } from "zustand";
import { combine, persist } from "zustand/middleware";

export const initialMember = {
    memberEmail: "",
    memberPassword: "",
    memberName: ""
  }

const useAuthStore = create(persist(combine(
  {
    isLogin: false,
    currentMember: initialMember,
    previousUrl: "/"
  },
  (set) => ({
    setIsLogin: (loginStatus) => set((state) => ({
      // ...state, // 생략가능
      isLogin: loginStatus
    })),
    setCurrentMember: (member) => set((state) => ({
      currentMember: member
    })),
    setPreviosUrl: (url) => set((state) => ({
      previousUrl: url
    }))
  })
), {
    name: "auth-store"
  }
))

export default useAuthStore;