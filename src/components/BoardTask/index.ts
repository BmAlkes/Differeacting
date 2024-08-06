import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";
import { Columns } from "../../@types";
import { onDragEnd } from "../../utils/onDragEnd";


const Home = () => {
	const [columns, setColumns] = useState<Columns>();
	const [modalOpen, setModalOpen] = useState(false);
	const [selectedColumn, setSelectedColumn] = useState("");

	const openModal = (columnId: any) => {
		setSelectedColumn(columnId);
		setModalOpen(true);
	};

	const closeModal = () => {
		setModalOpen(false);
	};

	const handleAddTask = (taskData: any) => {
		const newBoard = { ...columns };
		newBoard[selectedColumn].items.push(taskData);
	};

	return (
    
    )   
};

export default Home;
