import css from './Profile.module.css';

type stats = { followers: number; views: number; likes: number };

type userDataProps = {
  name: string;
  tag: string;
  location: string;
  image: string;
  stats: stats;
};

export const Profile: React.FC<userDataProps> = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css['profile-wrapper']}>
      <div className={css['profile-header']}>
        <img src={image} alt="User avatar" className={css['profile-image']} />
        <p className={css['profile-name']}>{name}</p>
        <p className={css['profile-tag']}>{tag}</p>
        <p className={css['profile-location']}>{location}</p>
      </div>
      <ul className={css['profile-stats-list']}>
        <li className={css['profile-stats-item']}>
          <span>Followers</span>
          <span className={css['profile-stats-item-quantity']}>{followers}</span>
        </li>
        <li className={css['profile-stats-item']}>
          <span>Views</span>
          <span className={css['profile-stats-item-quantity']}>{views}</span>
        </li>
        <li className={css['profile-stats-item']}>
          <span>Likes</span>
          <span className={css['profile-stats-item-quantity']}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
