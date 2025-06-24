import { create } from "zustand";


interface SessionGlobal {
    sesion: string,      
    setSession: () => void;

}

export const SessionGlobal = create<SessionGlobal>((set, get) => ({
    sesion: '',
    setSession: () =>{
         const token = localStorage.getItem('token') || '';
         set({sesion: token})
    }

}))