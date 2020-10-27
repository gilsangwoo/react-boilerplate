import React, { useState } from 'react';
import className from 'classnames/bind';
import styles from './PageHome.scss';

const cx = className.bind(styles);

interface IListItem {
  id: number;
  title: string;
  isActive: boolean;
}
const listMock: Array<IListItem> = [
  {
    id: 1,
    title: 'hahaha',
    isActive: true,
  },
  {
    id: 2,
    title: 'hohoho',
    isActive: false,
  },
  {
    id: 3,
    title: 'hehehe',
    isActive: false,
  },
];
const PageHome: React.FunctionComponent = () => {
  const [list, setList] = useState<Array<IListItem>>(listMock);
  const handleClickItem = (activeId: number) => {
    const activeList: Array<IListItem> = list.map(({ id, title }) => ({
      id,
      title,
      isActive: id === activeId,
    }));
    setList(activeList);
  };
  return (
    <div>
      <h1 className={cx('title')}>PageHome</h1>
      {list.map(({ id, title }) => (
        <p key={id} onClick={() => handleClickItem(id)}>
          {title}
        </p>
      ))}
    </div>
  );
};
export default PageHome;
