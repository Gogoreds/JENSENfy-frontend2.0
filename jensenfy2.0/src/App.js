import { useEffect, useState } from "react";
import { accessToken } from "./spotify";
import logo from "./logo.svg";
import "./App.css";
//funny facts
function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(accessToken);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {!token ? (
          <a className="App-link" href="http://localhost:8888/login">
            Log in with Spotify
          </a>
        ) : (
          <p>Logged in</p>
        )}
      </header>
    </div>
  );
}

export default App;
