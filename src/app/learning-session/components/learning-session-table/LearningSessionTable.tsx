import React, { FC } from 'react';
import useAsyncOnce from 'lib/hooks/useAsyncOnce';
import { useLearningSessionStore } from 'store/learning-session/store';
import { getPaginationConfig } from 'store/selectors';
import { LearningSession } from 'types/learningSession';
import { Card, Table, TableProps, Pagination } from 'ui';
import useSessionTableColumns from './useSessionTableColumns';

export interface LearningSessionTableProps
	extends TableProps<LearningSession> {

}

const LearningSessionTable: FC<LearningSessionTableProps> = (
	{...rest}
) => {
	const columns = useSessionTableColumns();
	const { onChange, ...pagination } = useLearningSessionStore(getPaginationConfig);
	const sessions = useLearningSessionStore(state => state.list);
	const fetchSessions = useLearningSessionStore(state => state.fetchList);
	
	useAsyncOnce(async () => await fetchSessions());
	
  return (
		<Card
			noBodyPadding
			footer={
				<Pagination
					showSizeChanger
					showQuickJumper
					{...pagination}
					onChange={(page, pageSize) => {
						onChange && onChange(page, pageSize);
						return fetchSessions();
					}}
				/>
			}
		>
			<Table
				columns={columns}
				dataSource={sessions}
				{...rest}
			/>
		</Card>
  
  );
};

export default LearningSessionTable;