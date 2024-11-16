import { Profile } from './components/Profile/Profile';
import { Container } from './components/Container/Container';
import { FriendList } from './components/FriendList/FriendList';
import { TransactionHistory } from './components/TransactionHistory/TransactionHistory';

import userData from './userData.json';
import friends from './friends.json';
import transactions from './transactions.json';

import './App.css';

const App: React.FC = () => {
  const { username, tag, location, avatar, stats } = userData;

  return (
    <Container>
      <Profile name={username} tag={tag} location={location} image={avatar} stats={stats} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};

export default App;
