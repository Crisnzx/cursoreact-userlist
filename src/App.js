import styles from './App.module.css';
import InputArea from './components/InputArea';
import UsersList from './components/UsersList';
import Modal from './components/UI/Modal';

function App() {
  return (
    <div>
      <InputArea />
      <UsersList />
      {/* <Modal /> */}
    </div>
  );
}

export default App;
