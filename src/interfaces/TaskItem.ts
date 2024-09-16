export interface TaskProps {
	task: {
		id: number;
		body: string;
		due: string;
		tag: string;
		time: string;
		priority: number;
	};
	onEdit: () => void;
	onDelete: () => void;
	onCheckboxChange: () => void;
}

export const priorityEmojis = {
	0: "0",
	1: "🔺",
	2: "⏫",
	3: "🔼",
	4: "🔽",
	5: "⏬",
};

// Priority Options
export const priorityOptions = [
	{ value: '0', text: 'NONE' },
	{ value: '1', text: 'Highest : 🔺' },
	{ value: '2', text: 'High : ⏫' },
	{ value: '3', text: 'Medium : 🔼' },
	{ value: '4', text: 'Low : 🔽' },
	{ value: '5', text: 'Lowest : ⏬' }
];
