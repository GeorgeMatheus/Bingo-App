import {
	ButtonCancel,
	ButtonSuccess,
	ConfirmationMessageContainer,
} from "./styles";

interface IConfirmationMessage {
	onClose: () => void;
	onAction: () => void;
}

export function ConfirmationMessage({
	onClose,
	onAction,
}: IConfirmationMessage) {
	function handleAction() {
		onAction();
		onClose();
	}

	return (
		<ConfirmationMessageContainer>
			<ButtonCancel type="button" onClick={onClose}>
				Cancelar
			</ButtonCancel>
			<ButtonSuccess type="button" onClick={handleAction}>
				Confirmar
			</ButtonSuccess>
		</ConfirmationMessageContainer>
	);
}
