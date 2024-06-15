import { useContext } from 'react';
import logo from '../../../../public/epibooks-logo.png';
import Context from '../../../modules/Context';

export default function Logo() {
  
  // Theme prop
  const { theme } = useContext(Context);

  return (
    <img className={`${theme === 'light' ? 'filter' : '' } logo`} src={logo} alt="Epibooks logo" />
  )
}
