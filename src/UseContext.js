import React, {useContext} from 'react'

const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee"
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222"
    }
  };
  
const ThemeContext = React.createContext();

function UseContext () {
    return (
        <ThemeContext.Provider value={themes.dark}>
          <Toolbar />
        </ThemeContext.Provider>
      );
}

function Toolbar(props) {
    return (
      <div>
        <ThemedButton />
      </div>
    );
  }
  
  function ThemedButton() {
    const theme = useContext(ThemeContext);
    return (
      <h1 style={{ background: theme.background, color: theme.foreground }}>
        I am styled by theme context!
      </h1>
    );
  }

export default UseContext;