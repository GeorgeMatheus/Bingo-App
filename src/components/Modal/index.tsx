import { Backdrop, Fade, Modal as ModalMui } from "@mui/material";
import { ReactNode } from "react";
import {
	ButtonX,
	CloseButton,
	Container,
	Content,
	Overlay,
	Title,
} from "./styles";

interface ModalProps {
	closeOnClickOutside?: boolean;
	onClose: () => void;
	open: boolean;
	children: ReactNode;
	title: string;
}

export default function Modal({ children, onClose, title, open }: ModalProps) {
	return (
		<ModalMui
			open={open}
			aria-labelledby={`transition-modal-${title}`}
			aria-describedby={`transition-modal-${title}`}
			onClose={onClose}
			closeAfterTransition
			slots={{ backdrop: Backdrop }}
			slotProps={{
				backdrop: {
					timeout: 500,
				},
			}}
		>
			<Fade in={open}>
				<Overlay>
					<Container>
						<Title>{title}</Title>
						<CloseButton
							aria-label="Close modal"
							type="button"
							onClick={onClose}
						>
							<ButtonX>x</ButtonX>
						</CloseButton>
						<Content>{children}</Content>
					</Container>
				</Overlay>
			</Fade>
		</ModalMui>
	);
}
