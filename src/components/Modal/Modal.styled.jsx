import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  min-width: 380px;
  max-width: 600px;
  min-height: 300px;

  padding: ${({ theme }) => theme.spacing(3)};

  background-color: #fcc;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);

  //------------------------------------|
  //     Удалить, после настройки!      |
  //------------Для тестов--------------|
  h2 {
    width: 100%;
    text-align: center;
    background-color: darkcyan;
  }
  //------------Для тестов--------------|
  //     Удалить, после настройки!      |
  //------------------------------------|
`;
