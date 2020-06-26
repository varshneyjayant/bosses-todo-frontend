import React, { Component } from 'react';
import { Container } from 'react-materialize';
import Header from '../common/Header';
import history from '../utils/HistoryUtils';
import SessionChecker from './SessionChecker';
import { UserContext } from '../AppContexts';
import AppRoutes from '../routes/AppRoutes';
import RoutesList from '../routes/RoutesList';

interface AppState {
  isLoggedIn: boolean;
  userChecked: boolean;
}

export default class App extends Component<{}, AppState> {

  constructor(props: {}) {

    super(props);
    this.state = {
      isLoggedIn: true,
      userChecked: false
    }
  }

  updateLoggedIn(status: boolean) {

    this.setState({
      isLoggedIn: status
    });
  }

  async componentDidMount() {

    if(await SessionChecker.checkUser()) {

      this.updateLoggedIn(true);
      this.setState({
        userChecked: true
      })
      history.replace('/app');
    }
    else{

      this.updateLoggedIn(false);
      history.replace('/login')
      this.setState({
        userChecked: true
      })
    }
  }

  render(){


    return(
      <Container>
        <Header/>
          { this.state.userChecked ? (

            <UserContext.Provider value={this.state.isLoggedIn}>
              <RoutesList routes={AppRoutes} />
            </UserContext.Provider>

          ) : (<div></div>)
        }
      </Container>
    )
    
  }
}