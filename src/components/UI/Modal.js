import Button from './Button';
import styles from './Modal.module.css';

function Modal(props) {

   let content = props.isEmptyValuesError ? 'Please enter a valid name and age (non-empty values).' : 'Please enter a valid age (> 0).';

   // <h1 onClick={props.toggleModal}>{content}</h1>

   function clickHandler(e) {
      const target = e.target.id;

      if(target === 'close-modal1' || target === 'close-modal2') {
         props.toggleModal();
      }

   }

   return (

      <div id="close-modal1" onClick={clickHandler} className={styles['modal-overlay']}>
         <div className={styles.modal}>
            <h2>Invalid Input</h2>
            <div className={styles.content}>
               <p>{content}</p>
               <div>
                  <Button id="close-modal2">Okay</Button>
               </div>
            </div>
         </div>
      </div>

   );
}

export default Modal;