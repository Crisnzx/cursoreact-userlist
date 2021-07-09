import styles from './App.module.css';
import InputArea from './components/InputArea';
import UsersList from './components/UsersList';
import Modal from './components/UI/Modal';
import { useState } from 'react';

function App() {

  const [listUsers, setListUsers] = useState([]);
  const [toggleModal, setToggleModal] = useState(false);
  const [isEmptyValues, setIsEmptyValues] = useState(true);

  function addUserHandler(user) {
    setListUsers((lastState) => {
      const updatedState = [...lastState];
      updatedState.push(user);
      return updatedState;
    });
  }

  function deleteUserHandler(id) {
    setListUsers((lastState) => {
      const updatedState = lastState.filter((user) => user.id !== id);
      return updatedState;
    });
  }

  

  function emptyValuesErrorHandler() {
    setToggleModal(true);
    setIsEmptyValues(true);
  }

  function invalidAgeErrorHandler() {
    setToggleModal(true);
    setIsEmptyValues(false);
  }

  return (
    <div>
      <InputArea showInvalidAgeError={invalidAgeErrorHandler} showEmptyValuesError={emptyValuesErrorHandler} onAddUser={addUserHandler} />
      <UsersList onDeleteUser={deleteUserHandler} listUsers={listUsers} />
      {toggleModal && <Modal toggleModal={() => setToggleModal(false)} isEmptyValuesError={isEmptyValues} />}
    </div>
  );
}

export default App;
