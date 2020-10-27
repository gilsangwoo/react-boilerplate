import * as React from "react";
import { PageTest } from "./views/page/PageTest";
import { Route, Switch } from "react-router-dom";
import { PageHome } from "./views/page/PageHome";
const App = () => {
    return (
        <Switch>
            <Route path={"/"} component={PageHome} exact/>
            <Route path={"/test"} component={PageTest} />
        </Switch>
    )
};

export default App;