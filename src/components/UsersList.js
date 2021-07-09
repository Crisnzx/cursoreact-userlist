import styles from './UsersList.module.css';
import UserItem from './UserItem';
import Card from './UI/Card';

function UsersList(props) {

   function deleteUserHandler(id) {
      props.onDeleteUser(id);
   }

   let content;

   if (props.listUsers.length === 0) {
      content = <p>Nothing here. You should add a new user</p>
   } else {
      content = (
         <ul className={styles['users-list']}>
            {props.listUsers.map(listUser => (
               <UserItem
                  onDeleteUser={deleteUserHandler}
                  id={listUser.id}
                  key={listUser.id}
                  name={listUser.name}
                  age={listUser.age}
               />))}
         </ul>
      );
   }
   return (
      <Card>
         {content}
      </Card>
   );
}

export default UsersList;