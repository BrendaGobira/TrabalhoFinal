import Header from '../../components/Header';
import './main.css';
import { Outlet } from 'react-router-dom'

const MainLayout = ({isLogged}) => {
  return (
    <>
      <Header isLogged={isLogged} />
      <div className="full-screen-container-main">
        <div className="centered-content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;