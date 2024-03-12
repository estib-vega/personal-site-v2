import Image from "next/image";
import React from "react";
import UserBadge from "../generic/UserBadge";
import { ImageInfo } from "@/lib/image";

const MAIN_USERNAME = "estib";
const MAIN_AVATAR_URL = "/img/estib-profile.jpeg";

interface HeaderImageProps {
  image: ImageInfo | undefined;
}

const HeaderImage: React.FC<HeaderImageProps> = (props) => {
  if (!props.image) {
    return null;
  }

  return (
    <div className="w-full h-96">
      <div className="relative w-full h-full mr-4 rounded-lg overflow-hidden">
        <Image
          src={props.image.url}
          alt={props.image.alt}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

interface HeaderProps {
  children: React.ReactNode;
  headerImage?: ImageInfo;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <div className="mb-4">
      <div className="mb-4 xl:flex">
        <HeaderImage image={props.headerImage} />
        <div className="w-full xl:w-1/2">
          <h1 className="font-header text-8xl lg:text-10xl mb-4 break-words">
            {props.children}
          </h1>
        </div>
      </div>
        <UserBadge username={MAIN_USERNAME} avatarUrl={MAIN_AVATAR_URL} />
    </div>
  );
};

export default Header;
