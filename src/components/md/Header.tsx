import React from "react";
import UserBadge from "../generic/UserBadge";
import { ImageName } from "@/lib/image";
import Img from "../generic/Img";

const MAIN_USERNAME = "estib";
const MAIN_AVATAR_URL = "/img/estib-profile.jpeg";

interface HeaderImageProps {
  image: ImageName | undefined;
}

const HeaderImage: React.FC<HeaderImageProps> = (props) => {
  if (!props.image) {
    return null;
  }

  return (
    <div className="w-full h-96 rounded-sm overflow-hidden">
      <Img className="relative w-full h-full mr-4 " name={props.image} />
    </div>
  );
};

interface TitleProps {
  small?: boolean;
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = (props) => {
  if (props.small) {
    return (
      <h1 className="font-header text-3xl mb-2 break-words">
        {props.children}
      </h1>
    );
  }
  return (
    <h1 className="font-header text-7xl lg:text-10xl mb-4 break-words text-red-900">
      {props.children}
    </h1>
  );
};

interface HeaderProps {
  children: React.ReactNode;
  small?: boolean;
  headerImage?: ImageName;
  noUserBadge?: boolean;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <div className="mb-4">
      <div className="mb-4 xl:flex xl:items-center bg-red-200 rounded-lg overflow-hidden animate-fade-in-2">
        <HeaderImage image={props.headerImage} />
        <div className="w-full xl:w-1/2 p-2">
          <Title small={props.small}>{props.children}</Title>
        </div>
      </div>
      {props.noUserBadge ? null : (
        <UserBadge username={MAIN_USERNAME} avatarUrl={MAIN_AVATAR_URL} />
      )}
    </div>
  );
};

export default Header;
