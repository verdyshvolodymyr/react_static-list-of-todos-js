// Add the required props
import usersFromServer from '../../api/users.json';
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => (
  <article
    className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
  >
    {usersFromServer.map(user => (
      <>
        <h2 className="TodoInfo__title">{todo.title}</h2>
        <UserInfo user={user} />
      </>
    ))}
  </article>
);
