import { FC, useState } from 'react';
import {
	Alert,
	AlertTitle,
	Collapse,
} from '@mui/material';

export enum ESeverityAlert {
	Error = 'error',
	Success = 'success',
	Info = 'info',
	Warning = 'warning',
}

interface IGeneralAlertProps {
	title?: string;
	text?: string;
	severity?: ESeverityAlert
}

const GeneralAlert : FC<IGeneralAlertProps> = (props : IGeneralAlertProps) => {
	const { title, text, severity } = props;
	const [ showAlert, setShowAlert ] = useState(false);

	const show = () => {
		setShowAlert(true);
	};

	const hide = () => {
		setShowAlert(false);
	};

	return (
		<Collapse in={showAlert}>
			<Alert severity={ severity } onClose={() => { hide }}>
				<AlertTitle>{ title }</AlertTitle>
				{ text }
			</Alert>
		</Collapse>
	);
};

export default GeneralAlert;
