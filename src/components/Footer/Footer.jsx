import { Link } from 'react-router-dom';
import Logo from '../../components/Header/units/Logo'

export default function Footer() {
  
  return (
    <footer className='bg-transparent mt-4 py-4'>
      <div className="d-flex flex-column m-auto p-2 border-top mt-4 pt-4 align-items-center justify-content-center">
        <Link to='/' className='py-3'>
          <Logo />
        </Link>
        <strong>EPIBOOKS</strong>
        <span> Copyright {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}