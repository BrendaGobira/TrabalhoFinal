
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import NewProject from './pages/NewProject';
import Information from './pages/Information';
import Login from './pages/Login';
import Users from "./pages/Users";
import Backgrounds from './pages/Backgrounds';
import { useEffect, useState } from 'react';
import MainLayout from './layouts/Main';
import MinimalLayout from './layouts/Minimal';
import axios from 'axios';

const URL = import.meta.env.VITE_BACKEND_URL;

function App() {
  const [user, setUser] = useState(null);
  const [favBackgrounds, setFavBackgrounds] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(URL + '/backgrounds/' + user.id)
        .then((respFetch) => respFetch.json())
        .then((respJson) => setFavBackgrounds(respJson))
        .catch((err) => console.log(err));
    }
  }, [user]);

  const fetchFavBackgrounds = () => {
    if (user) {
      fetch(URL + '/backgrounds/' + user.id)
        .then((respFetch) => respFetch.json())
        .then((respJson) => setFavBackgrounds(respJson))
        .catch((err) => console.log(err));
    }
  }

  const login = async (email) => {
    try {
      const respFetch = await fetch(URL + '/usuarios');
      const respJson = await respFetch.json();
      console.log(respJson);
      const loginUser = respJson.find((result) => result.email == email);
      console.log(loginUser);
      setUser(loginUser);
      navigate('/backgrounds');
    } catch (err) {
      return console.log(err);
    }
  }

  const onFavBackground = async (background) => {
    if (background.isFavorite) {
      await axios.delete(URL + '/backgrounds/' + background?.id);
    } else {
      await axios
        .post(URL + '/backgrounds', {
          user_id: user.id,
          background: background.background,
        });
    }
    fetchFavBackgrounds();
  }

  const isLogged = !!user;

  return (
    <Routes>
      <Route element={<MinimalLayout isLogged={isLogged} />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={login} />} />
      </Route>
      <Route element={<MainLayout isLogged={isLogged} />}>
        <Route path="/newProject" index element={<NewProject favBackgrounds={favBackgrounds} />} />
        <Route path="/informacao" element={<Information />} />
        <Route path="/usuarios" element={<Users />} />
        <Route
          path="/backgrounds"
          element={
            <Backgrounds favBackgrounds={favBackgrounds} onFavorite={onFavBackground} />
          }
        />
      </Route>
    </Routes>
  );
}

export default App
