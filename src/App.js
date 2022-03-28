import { useContext } from 'react';
import './App.css';
import Infor from './pages/Infor';
import Login from './pages/Login';
import CounterProvider from './providers/CounterProvider';
import { authContext } from './providers/AuthProvider';


function App() {
  const { auth, user, login, logout } = useContext(authContext)
  return (
    <main>
      <h1>
        My Auth Counter
      </h1>
      <CounterProvider>
        {/* {const [auth, setAuth] = useState(false);} */}
        {/* {when auth = false, show login page} */}
        {/* {when auth = true, show logout page} */}
        {/* {you need to consider about not only auth's value, but also the && logic} */}
        {!auth && <Login login={login} />}
        {auth && <Infor logout={logout} user={user} />}
      </CounterProvider>
    </main>
  );
}

export default App;
