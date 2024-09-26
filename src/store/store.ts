import {create} from 'zustand'

type OpenStore ={
    open:Boolean
     changeState :()=>void
}

export const useOpenStore = create<OpenStore>((set)=>({
   open:false,
   changeState:()=>set((state)=>({open: !state.open}))
}))