import Dashboard  from "./containers/Dashboard";
import { ThemeProvider } from "styled-components";
import {  GlobalStyles } from './styles/global';
import { lightTheme, darkTheme } from "./styles/theme";
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles/>
        <Dashboard/>
      </ThemeProvider>
    </div>
  );
}

export default App;
