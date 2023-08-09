import { Container } from '@mui/material';
import {
	FC
} from 'react';
import UploadFileForm from './UploadFileForm';
import ListFiles from './ListFiles';

const FileContainer : FC = () => {
	return (
		<Container maxWidth={'xl'}>
			<Container maxWidth={'sm'}>
				<UploadFileForm />
			</Container>
			<Container maxWidth={'lg'}>
				<ListFiles />
			</Container>
		</Container>
	);
};

export default FileContainer;
