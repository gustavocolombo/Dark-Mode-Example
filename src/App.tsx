import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import { GlobalStyle } from "./styles/styles";
import light from "./styles/theme/light";
import dark from './styles/theme/dark'
import usePersistedState from "./utils/usePersistedState";

function App() {

  const[theme, setTheme] = usePersistedState('theme',light);

  function toggleTheme(){
    setTheme(theme.title ==='light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Header toggleTheme={toggleTheme}/>
    </ThemeProvider>
  );
}

export default App;
