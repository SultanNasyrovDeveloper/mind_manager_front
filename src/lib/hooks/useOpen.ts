import { useState, Dispatch, SetStateAction } from 'react';

export type useDrawerOpenReturnValue = [
	boolean,
	Dispatch<SetStateAction<boolean>>,
	() => void
];

const useOpen = (defaultOpen: boolean = false): useDrawerOpenReturnValue => {
	const [open, setOpen] = useState(defaultOpen);
	const toggleOpen = () => setOpen(prev => !prev);
	return [open, setOpen, toggleOpen];
};

export default useOpen;