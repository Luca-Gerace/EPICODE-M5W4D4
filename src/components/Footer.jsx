function Footer() {
  return (
    <footer className="d-flex bg-dark mt-4 py-4">
      <span className="text-white m-auto p-2">
        <strong>EPIBOOK</strong> - Copyright {new Date().getFullYear()}
      </span>
    </footer>
  );
}

export default Footer;