import React from 'react';
import { useRoutes } from 'hookrouter'
import styled from 'styled-components'
import AppProvider from './AppProvider.js'
import { AppContext } from './AppProvider.js'
import './App.css';

import { Home } from './pages/Home';
import { Register } from './pages/register/Register.jsx'

const StyledApp = styled.div`
    margin: 0;
    padding: 0;
`;

export const routes = {
  '/': () => <Home />,
  '/register': () => <Register />
}

function App() {
  const routeResult = useRoutes(routes);

    return (
        <AppProvider>
            <AppContext.Consumer>
                {({  }) => (
                    <StyledApp>
                        { routeResult }
                    </StyledApp>
                )}
            </AppContext.Consumer>
        </AppProvider>
    )
}

export default App;
