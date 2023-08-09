import { Container } from '@mui/material';
import {
	FC
} from 'react';
import UploadFileForm from './UploadFileForm';

const FileContainer : FC = () => {
	return (
		<Container maxWidth={'sm'}>
			<UploadFileForm />
		</Container>
	);
};

export default FileContainer;
