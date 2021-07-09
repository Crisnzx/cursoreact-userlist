import styles from './InputArea.module.css';
import Card from './UI/Card';
import Button from './UI/Button';

function InputArea(props) {


   return (
      <Card>
         <form>
            <div className={styles['input-group']}>
               <label for="name">Username</label>
               <input id="name" name="name" type="text" />
            </div>
            <div className={styles['input-group']}>
               <label for="age">Age (Years)</label>
               <input id="age" name="age" type="number" />
            </div>
            <Button type="submit">Add User</Button>
         </form>
      </Card>
   );
}

export default InputArea;