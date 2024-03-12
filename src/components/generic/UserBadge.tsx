import React from "react";
import Img from "./Img";

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
      <Img
        className="w-14 h-14 overflow-hidden rounded-full m-2 shadow-sm shadow-gray-400 relative"
        src={avatarUrl}
        alt={username}
        quality={20}
      />
      <p className="font-normal text-gray-600 text-sm lg:text-md">{username}</p>
    </div>
  );
};

export default UserBadge;
