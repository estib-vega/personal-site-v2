import { Route, routes } from "@/lib/links";
import Link from "next/link";

const MainNavigation = (): JSX.Element => {
  return (
    <nav className="p-2 box-border sm:h-screen min-w-1/2 md:min-w-1/4 flex flex-col justify-end items-center">
      <div className="pt-2 sm:pt-4 mb-2 h-full w-full flex sm:flex-col justify-center items-center">
        {routes
          .filter((r) => !r.hide)
          .map((route) => (
            <Link href={route.path} key={route.path}>
              <h1 className="mr-2 text-md sm:text-xl sm:mb-2 font-body tracking-wide text-center cursor-pointer animate-fade-in">
                {route.name}
              </h1>
            </Link>
          ))}
      </div>
      <Link href={Route.Home}>
        <h1 className="text-4xl font-header italic sm:text-6xl md:text-8xl animate-fade-in cursor-pointer">
          estib
        </h1>
      </Link>
    </nav>
  );
};

export default MainNavigation;
