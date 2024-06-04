import { Component } from 'react';
import { Wrapper } from './App.styled';
import { Modal } from '../Modal';

export class App extends Component {
  render() {
    return (
      <Wrapper>
        <Modal>
          <h2>Hello from Modal!</h2>
        </Modal>
        <h1>Hello World!</h1>
        <p>Nice try this is sparta</p>
      </Wrapper>
    );
  }
}
