import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import userData from '../data/user';
import statisticData from '../data/data';
import friendData from '../data/friends';
import transactionData from '../data/transactions';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.appConteiner}>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics title="Upload stats" stats={statisticData} />
      <FriendList friends={friendData} />
      <TransactionHistory items={transactionData} />
    </div>
  );
};
