import clsx from 'clsx';

import { FriendDataProps } from '../FriendList/FriendList';

import css from './FriendItem.module.css';

export const FriendItem: React.FC<FriendDataProps> = ({ avatar, name, isOnline }) => {
  const className = clsx(isOnline ? [css.online] : [css.offline]);
  return (
    <div className={css["friend-block"]}>
      <img src={avatar} className={css["friend-image"]} alt="Avatar" width="48" />
      <p className={css["friend-name"]}>{name}</p>
      <p className={className}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
};
