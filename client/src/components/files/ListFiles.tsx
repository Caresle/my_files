import {
	FC
} from 'react';
import {
	Card,
	CardContent,
	CardHeader,
} from '@mui/material';
import FolderItem from './FolderItem';

const ListFiles : FC = () => {
	return (
		<Card>
			<CardHeader title='My files' />
			<CardContent>
				<FolderItem name='Test' />
			</CardContent>
		</Card>
	);
};

export default ListFiles;
