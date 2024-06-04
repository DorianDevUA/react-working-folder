import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, ModalContent } from './Modal.styled';

const modalRoot = document.getElementById('modal-root');

export class Modal extends Component {
  componentDidMount = () => {
    window.addEventListener('keydown', this.handleKeydown);
  };

  componentWillUnmount = () => {
    window.removeEventListener('keydown', this.handleKeydown);
  };

  handleKeydown = (evt) => {
    if (evt.code === 'Escape') {
      console.log('Натиснули ESC');
    }
  };

  handleBackdropClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      console.log('Click on Backdrop!');
    }
  };

  render() {
    const { children } = this.props;

    return createPortal(
      <Backdrop onClick={this.handleBackdropClick}>
        <ModalContent>{children}</ModalContent>
      </Backdrop>,
      modalRoot,
    );
  }
}
