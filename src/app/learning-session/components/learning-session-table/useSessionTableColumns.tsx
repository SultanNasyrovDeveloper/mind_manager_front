import { LearningSession } from 'types/learningSession';
import { ColumnType } from 'ui';

const useSessionTableColumns = (): ColumnType<LearningSession>[] => {
	return [
		{ key: 'user', title: 'User', dataIndex: 'user'  },
		{ key: 'start', title: 'Started', dataIndex: 'start_datetime' },
		{ key: 'end', title: 'Ended', dataIndex: 'finish_datetime' },
		{ key: 'targets', title: 'Targets', dataIndex: 'targets' },
		{ key: 'qgs', title: 'Queue', dataIndex: 'queue_generation_strategy' }
	];
};

export default useSessionTableColumns;