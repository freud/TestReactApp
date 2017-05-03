import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from "./components/app";
import reducer from './reducers';

const css = require("./index.scss");
const root = document.getElementById("root");
const store = createStore(reducer)

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>, 
  root
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./components/app", () => {
    const NextApp = require<RequireImport>("./components/app").default;
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <NextApp />
        </Provider>
      </AppContainer>,
      root
    );
  });
}