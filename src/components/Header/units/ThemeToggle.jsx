import Switch from 'react-switch';
import { Moon, Sun } from 'react-bootstrap-icons';
import { useContext } from 'react';
import Context from '../../../modules/Context';

export default function ThemeToggle() {

  // Switch theme
  const { theme, toggleTheme } = useContext(Context);

  return (
    <div className='d-flex align-items-center border p-2 rounded-pill'>
      <Sun className='me-2' />
      <Switch
      data-testid='toggle'
      onChange={toggleTheme}
      checked={theme === 'dark'}
      offColor="#DDD"
      onColor="#a94bff"
      uncheckedIcon={false}
      checkedIcon={false}
      handleDiameter={20}
      height={20}
      width={40}
      />
      <Moon className='ms-2' />
    </div>
  )
}