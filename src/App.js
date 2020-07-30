import React from "react";
import "./App.css";

import Routes from "./routes";
import { Provider } from "react-redux";
import store from "./redux/store/Store";

import { ThemeProvider } from "@material-ui/core/styles";
import MyTheme from "./utils/Theme";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={MyTheme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
