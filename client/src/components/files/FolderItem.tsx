import {
	FC
} from 'react';
import {
	Folder as FolderIcon
} from '@mui/icons-material';
import {
	Box,
	Button
} from '@mui/material';

interface IFolderItem {
	name: string;
}

const FolderItem : FC<IFolderItem> = (props: IFolderItem) => {
	const { name, } = props;
	return (
		<Button sx={{
			display: 'flex',
			alignItems: 'center',
		}}>
			<FolderIcon />
			<Box sx={{ mx: 1 }}>
				{ name }
			</Box>
		</Button>
	);
};

export default FolderItem;
