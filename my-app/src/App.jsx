import { Provider } from "react-redux";
import { Store } from "./ReduxToolkit/Store/Store";
import User from "./ReduxToolkit/User";
import UserForm from "./ReduxToolkit/UserForm";

function App() {
    return (
       <Provider store={Store}>

        <User/>
        <UserForm/>
       </Provider>
    );
}

export default App;