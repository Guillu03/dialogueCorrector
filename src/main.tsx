import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { store } from "./shared/redux/store";
import { Provider } from "react-redux";
import { SingletonHooksContainer } from "react-singleton-hook";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <>
      <SingletonHooksContainer />
      <App />
    </>
  </Provider>
);
