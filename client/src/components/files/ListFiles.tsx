import {
	FC
} from 'react';
import {
	Box,
	Card,
	CardContent,
	CardHeader,
} from '@mui/material';
import FolderItem from './FolderItem';
import FileItem from './FileItem';

const ListFiles : FC = () => {
	return (
		<Card>
			<CardHeader title='My files' />
			<CardContent>
				<Box sx={{
					display: 'flex',
				}}>
					<FolderItem name='Test' />
					<FileItem name='Test'/>
				</Box>
			</CardContent>
		</Card>
	);
};

export default ListFiles;
