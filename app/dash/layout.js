function Layout({ children }) {
  return (
    <div className="flex min-h-dvh min-h-screen flex-col">
      <header className="m-2">
        <h1 className="text-3xl">Header</h1>
      </header>
      <div className="m-2 grow">{children}</div>
      <footer className="m-2">
        <h3 className="text-xl">Footer</h3>
      </footer>
    </div>
  );
}

export default Layout;
