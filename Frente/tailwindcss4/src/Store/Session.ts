import { create } from "zustand";


interface SessionGlobal {
    sesion: string,      
    setSession: () => void;

}

export const SessionGlobal = create<SessionGlobal>((set) => ({
    sesion: '',
    setSession: () =>{
         const token = localStorage.getItem('token') || '';
         set({sesion: token})
    }

}))