import { Component } from 'react';
import { Wrapper } from './App.styled';
import { Modal } from '../Modal';
import { TestForm } from '../TestForm';

export class App extends Component {
  state = {
    showModal: true,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
    console.log('toggle showModal');
  };

  render() {
    const { showModal } = this.state;

    return (
      <Wrapper>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h2>Hello from Modal!</h2>
            <TestForm />
          </Modal>
        )}
        <h1>Hello World!</h1>
        <p>Nice try this is sparta</p>
        <button type="button" onClick={() => {
          console.log("Press Open Modal Btn");
          this.toggleModal();
        }}>
          Open Modal
        </button>
      </Wrapper>
    );
  }
}
