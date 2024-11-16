import css from './Container.module.css';

interface IContainerChildren {
  children: React.ReactNode;
}

export const Container: React.FC<IContainerChildren> = ({ children }) => {
  return <div className={css.container}>{children}</div>;
};
