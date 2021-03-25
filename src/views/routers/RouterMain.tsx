import React, {FC} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {PageHome, PageTest} from '../page';
import {routers} from './';

const RouterMain: FC = () => {
  return (
    <Switch>
      <Route exact path={routers.home} component={PageHome} />
      <Route path={routers.test} component={PageTest} />
      <Redirect to={routers.home} />
    </Switch>
  );
};

export default RouterMain;
