import React, {ChangeEvent, FC, useState} from 'react';
import className from 'classnames/bind';
import styles from './PageHome.scss';
import {useHistory} from 'react-router-dom';
import {routers} from '../../routers';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../reducers';
import {ActionTitle, ActionUser} from '../../../actions';

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

const PageHome: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [list, setList] = useState<Array<IListItem>>(listMock);
  const [inputName, setInputName] = useState<string>('');
  const name = useSelector((state: RootState) => state.user.name);
  const handleClickTitle = () => {
    history.push(routers.test);
    dispatch(new ActionTitle().getTitle('from HOME'));
  };
  const handleClickItem = (activeId: number) => {
    const activeList: Array<IListItem> = list.map(({id, title}) => ({
      id,
      title,
      isActive: id === activeId,
    }));
    setList(activeList);
  };
  const handleClickChangeName = () => {
    setInputName('');
    dispatch(new ActionUser().updateUser(inputName));
  };
  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    const {target} = e;
    const {value} = target;
    setInputName(value);
  };
  return (
    <div>
      <h1 className={cx('title')} onClick={() => handleClickTitle()}>
        PageHome
      </h1>
      <p>redux name : {name}</p>
      <p>input name : {inputName}</p>
      <input value={inputName} onChange={handleChangeName} />
      <button onClick={handleClickChangeName}>이름 변경</button>
      {list.map(({id, title, isActive}) => (
        <p key={id} onClick={() => handleClickItem(id)}>
          {title}
          &nbsp;
          {isActive ? 'true' : 'false'}
        </p>
      ))}
    </div>
  );
};

export default PageHome;
