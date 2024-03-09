import React from "react";
import Image from "next/image";

type UserBadgeProps = {
  username: string;
  avatarUrl: string;
};

/**
 * Renders a user badge component.
 *
 * @component
 * @param {string} props.username - The username of the user.
 * @param {string} props.avatarUrl - The URL of the user's avatar.
 * @returns {JSX.Element} The rendered UserBadge component.
 */
const UserBadge: React.FC<UserBadgeProps> = ({ username, avatarUrl }) => {
  return (
    <div className="flex items-center">
      <div className="w-14 h-14 overflow-hidden rounded-full m-2 shadow-sm shadow-gray-400">
        <Image
          src={avatarUrl}
          alt={username}
          layout="responsive"
          objectFit="contain"
          quality={50}
          width={10}
          height={10}
        />
      </div>
      <p className="font-normal text-sm lg:text-md">{username}</p>
    </div>
  );
};

export default UserBadge;
