import { FriendItem } from '../FriendItem/FriendItem';

import css from './FriendList.module.css';

export type FriendDataProps = {
  avatar: string;
  name: string;
  isOnline: boolean;
  id: number;
};

type FriendsDataProps = {
  friends: FriendDataProps[];
};

export const FriendList: React.FC<FriendsDataProps> = ({ friends }) => {
  return (
    <ul className={css['firends-list']}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className={css['friend-item']} key={id}>
          <FriendItem avatar={avatar} name={name} isOnline={isOnline} id={id} />
        </li>
      ))}
    </ul>
  );
};
