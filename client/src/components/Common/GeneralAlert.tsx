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

export interface IGeneralAlertProps {
	title?: string;
	text?: string;
	severity?: ESeverityAlert,
	show: boolean,
}

const GeneralAlert : FC<IGeneralAlertProps> = (props : IGeneralAlertProps) => {
	const { title, text, severity, show } = props;
	const [ showAlert, setShowAlert ] = useState(show);

	const hide = () => {
		console.log('click');
		setShowAlert(false);
	};

	return (
		<Collapse in={showAlert}>
			<Alert severity={ severity } onClose={hide}>
				<AlertTitle>{ title }</AlertTitle>
				{ text }
			</Alert>
		</Collapse>
	);
};

export default GeneralAlert;
