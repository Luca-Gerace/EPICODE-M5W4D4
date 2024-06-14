import logoDark from '../../../../public/epibook-logo-dark.png';
import logoLight from '../../../../public/epibook-logo-light.png';

// TODO - remove me and pass prop to logo component
const theme = 'dark';

export default function Logo() {
  return (
    <img src={theme === 'light' ? logoLight : logoDark} alt="Epibooks logo" className="logo" />
  )
}
