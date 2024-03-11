

const MainNavigation = (): JSX.Element => {
  const routes = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <nav className="p-2 box-border sm:h-screen min-w-1/2 md:min-w-1/4 flex flex-col justify-end items-center">
      <div className="pt-2 sm:pt-4 h-full w-full flex sm:flex-col justify-center items-center">
        {routes.map((route) => (
          <h1 className="mr-2 text-md sm:text-xl font-body tracking-wide text-center animate-fade-in" key={route.path}>
            {route.name}
          </h1>
        ))}
      </div>
      <h1 className="text-6xl font-header italic md:text-8xl animate-fade-in">
        estib
      </h1>
    </nav>
  );
};

export default MainNavigation;
