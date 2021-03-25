import React, {FC} from 'react';
import className from 'classnames/bind';
import styles from './PageTest.scss';
import {useHistory} from 'react-router-dom';
import {routers} from '../../routers';
import {RootState} from '../../../reducers';
import {useSelector} from 'react-redux';

const cx = className.bind(styles);
const PageTest: FC = () => {
  const history = useHistory();
  const title = useSelector((state: RootState) => state.title.title);
  const handleClickTitle = () => {
    history.push(routers.home);
  };
  return (
    <h1 className={cx('title')} onClick={() => handleClickTitle()}>
      PageTest {title}
    </h1>
  );
};
export default PageTest;
