import React from "react";
import { ImageInfo } from "@/lib/image";

/**
 * Returns the CSS class name for the header element based on the provided image information.
 *
 * @param useDarkFont - Whether to use a dark font color.
 * @returns The CSS class name for the header element.
 */
function getHeaderClassName(
  useDarkFont: boolean | undefined,
  underline: boolean | undefined
): string {
  const classNameBuffer = ["font-body text-4xl sm:text-6xl"];
  classNameBuffer.push(
    useDarkFont ? "text-red-400 border-red-400" : "text-red-50 border-red-50"
  );
  if (underline) {
    classNameBuffer.push("border-b-2 mb-2 p-2 sm:p-4");
  }
  return classNameBuffer.join(" ");
}

/**
 * Returns the CSS class name for the header subtitle based on the value of `useDarkFont`.
 *
 * @param useDarkFont - A boolean indicating whether to use a dark font color.
 * @returns The CSS class name for the header subtitle.
 */
function getHeaderSubtitleClassName(useDarkFont: boolean | undefined): string {
  const classNameBuffer = ["font-body text-1xl sm:text-2xl"];
  classNameBuffer.push(useDarkFont ? "text-red-400" : "text-red-50");
  return classNameBuffer.join(" ");
}

/**
 * Returns the container class name based on the provided center flag.
 *
 * @param center - A boolean flag indicating whether the container should be centered.
 * @returns The container class name.
 */
function getContainerClassName(center: boolean | undefined): string {
  const classNameBuffer = [
    "w-full h-full relative bottom-full p-4 flex flex-col",
  ];
  classNameBuffer.push(center ? "justify-center items-center" : "justify-end");
  return classNameBuffer.join(" ");
}

interface BaseThumbnailHeaderProps {
  center?: boolean;
  underline?: boolean;
}

interface ThumbnailHeaderImageProps extends BaseThumbnailHeaderProps {
  imageInfo: ImageInfo;
}

function isThumbnailHeaderImageProps(
  props: ThumbnailHeaderProps
): props is ThumbnailHeaderImageProps {
  return (props as ThumbnailHeaderImageProps).imageInfo !== undefined;
}

interface ThumbnailHeaderTextProps extends BaseThumbnailHeaderProps {
  title: string;
  subtitle?: string;
  useDarkFont?: boolean;
}

function isThumbnailHeaderTextProps(
  props: ThumbnailHeaderProps
): props is ThumbnailHeaderTextProps {
  return (props as ThumbnailHeaderTextProps).title !== undefined;
}

type ThumbnailHeaderProps =
  | ThumbnailHeaderImageProps
  | ThumbnailHeaderTextProps;

const ThumbnailHeaderTitle: React.FC<ThumbnailHeaderProps> = (props) => {
  if (isThumbnailHeaderImageProps(props)) {
    return (
      <h1
        className={getHeaderClassName(
          props.imageInfo.useDarkFont,
          props.underline
        )}
      >
        {props.imageInfo.displayName ?? props.imageInfo.name}
      </h1>
    );
  }

  if (isThumbnailHeaderTextProps(props)) {
    return (
      <div className="flex flex-col items-center">
        <h1 className={getHeaderClassName(props.useDarkFont, props.underline)}>
          {props.title}
        </h1>
        {props.subtitle && (
          <h2 className={getHeaderSubtitleClassName(props.useDarkFont)}>
            {props.subtitle}
          </h2>
        )}
      </div>
    );
  }

  return null;
};

const ThumbnailHeader: React.FC<ThumbnailHeaderProps> = (props) => {
  return (
    <div className={getContainerClassName(props.center)}>
      <ThumbnailHeaderTitle {...props} />
    </div>
  );
};

export default ThumbnailHeader;
