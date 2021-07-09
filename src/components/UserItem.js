import styles from './UserItem.module.css';

function UserItem(props) {

   return (
      <li className={styles['list-item']}>
         <p>Max (31 years old)</p>
      </li>
   );
}

export default UserItem;