import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Provider } from './app/state';
import ResponsiveDrawer from './components/layout/ResponsiveDrawer';
import { drawerCategories, drawerTitle } from './config/constants';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import { Theme } from '@material-ui/core/styles';

const theme: Theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[900],
    },
    secondary: {
      main: '#f44336',
    },
  },
});

const App: React.FC = () => {
  return (
    <Router>
      <Provider>
        <MuiThemeProvider theme={theme}>
          <ResponsiveDrawer title={drawerTitle} categories={drawerCategories} />
        </MuiThemeProvider>
      </Provider>
    </Router>
  );
}

export default App;
