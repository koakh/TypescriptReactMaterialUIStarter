import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Provider } from './app/state';
import { ResponsiveDrawer } from './components/layout/ResponsiveDrawer';
import { drawerCategories, drawerTitle } from './config/constants';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './app/theme';

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
