import styles from './UsersList.module.css';
import UserItem from './UserItem';
import Card from './UI/Card';

function UsersList(props) {

   return (
      <Card>
         <ul className={styles['users-list']}>
            <UserItem />
            <UserItem />
            <UserItem />
            <UserItem />
         </ul>
      </Card>
   );
}

export default UsersList;