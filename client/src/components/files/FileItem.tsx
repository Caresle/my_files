import {
	FC
} from 'react';

import {
	InsertDriveFile as FileIcon
} from '@mui/icons-material';
import {
	Box,
	Button,
} from '@mui/material';

interface IFileItem {
	name: string;
}

const FileItem : FC<IFileItem> = (props: IFileItem) => {
	const { name } = props;

	return (
		<Button
			sx={{
				display: 'flex',
				alignItems: 'center'
			}}
			color='inherit'
		>
			<FileIcon />
			<Box sx={{ mx: 1 }}>
				{ name }
			</Box>
		</Button>
	);
};

export default FileItem;
