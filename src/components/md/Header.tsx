import Image from "next/image";
import React from "react";
import UserBadge from "../generic/UserBadge";

const MAIN_USERNAME = "estib";
const MAIN_AVATAR_URL = "/estib-profile.jpeg";

interface HeaderProps {
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <div className="mb-10">
      <h1 className="font-header text-8xl lg:text-10xl mb-8">
        {props.children}
      </h1>
      <UserBadge username={MAIN_USERNAME} avatarUrl={MAIN_AVATAR_URL} />
    </div>
  );
};

export default Header;
