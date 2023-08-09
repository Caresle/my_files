import {
	FC
} from 'react';
import {
	Folder as FolderIcon
} from '@mui/icons-material';
import { Box } from '@mui/material';


interface IFolderItem {
	name: string;
}

const FolderItem : FC<IFolderItem> = (props: IFolderItem) => {
	const { name, } = props;
	return (
		<Box sx={{
			display: 'flex',
			alignItems: 'center',
		}}>
			<FolderIcon />
			<Box sx={{ mx: 1 }}>
				{ name }
			</Box>
		</Box>
	);
};

export default FolderItem;
