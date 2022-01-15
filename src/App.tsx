import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Navigation } from './app/components/Navigation';
import { About } from './app/containers/About';
import { Contacts } from './app/containers/Contacts';
import Login from './app/containers/Login';
import { NotFound } from './app/containers/NotFound';
import { ResetPassword } from './app/containers/ResetPassword';
import { StartPage } from './app/containers/StartPage';
import { UserOptions } from './app/containers/UserOptions';
import { Tickets } from './app/containers/Tickets';

import './styles/App.css';
import ChangePassword from './app/containers/ChangePassword';

export const App: React.FunctionComponent = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<Navigation />
				<Switch>
					<Route exact path="/" render={() => (<StartPage />)} />
					<Route exact path="/about" render={() => (<About />)} />
					<Route exact path="/contactsUs" render={() => (<Contacts />)} />
					<Route exact path="/login" render={() => (<Login />)} />
					<Route exact path="/reset-password" render={() => (<ResetPassword />)} />
					<Route exact path="/user-options" render={() => (<UserOptions />)} />
					<Route exact path="/tickets" render={() => (<Tickets />)} />
					<Route exact path="/asd" render={() => (<ChangePassword />)} />
					<Route render={() => (<NotFound />)} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}