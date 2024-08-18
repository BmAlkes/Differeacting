import {useDroppable} from '@dnd-kit/core'

type DropTaskProps ={
    status:string
}

const DropTask = ({status}:DropTaskProps) => {

    const {isOver, setNodeRef} = useDroppable({
        id:status
    })

  return (
    <div className="text-xs font-semibold uppercase p-2 border border-dashed border-slate-500 mt-5 grid place-content-center  text-slate-500" ref={setNodeRef} >Drag Here</div>
  )
}

export default DropTask