import Header from '../../components/Header';
import './minimal.css';
import { Outlet } from 'react-router-dom'

const MinimalLayout = ({isLogged}) => {
  return (
    <>
      <Header isLogged={isLogged} />
      <div className="full-screen-container-minimal">
        <div className="centered-content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MinimalLayout;