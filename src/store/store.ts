import { validateHeaderValue } from 'http'
import {create} from 'zustand'

type OpenStore ={
    open:Boolean
     changeState :()=>void
}

export const useOpenStore = create<OpenStore>((set)=>({
   open:false,
   changeState:()=>set((state)=>({open: !state.open}))
}))

type GlobalSearchStore ={
   value:string,
   changeValue:(string:string)=> void
}

export const useGlobalSearchStore =create<GlobalSearchStore>((set)=>({
   value:'',
   changeValue:(value)=>set(()=>({value: value}))
}))