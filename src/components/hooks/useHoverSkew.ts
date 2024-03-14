import React from "react";

const DEFAULT_SKEW_DEGREE = 0.5;
const DEFAULT_SKEW_PERSPECTIVE_PX = 500;
const DEFAULT_SKEW_SCALE_DELTA = 0.005;
const MIN_WIDTH_THRESHOLD = 700;
const MIN_DEGREE_FOR_SMALL_WIDTH = 2;

export interface HoverSkewHook {
  ref: React.RefObject<HTMLDivElement>;
  onMouseMove: React.MouseEventHandler<HTMLDivElement>;
  onMouseOut: React.MouseEventHandler<HTMLDivElement>;
  onMouseDown: React.MouseEventHandler<HTMLDivElement>;
  onMouseUp: React.MouseEventHandler<HTMLDivElement>;
}

export interface HoverSkewHookParams {
  degree?: number;
  scaleDelta?: number;
  perspective?: number;
}

export default function useHoverSkew(
  params?: HoverSkewHookParams
): HoverSkewHook {
  const elementRef = React.useRef<HTMLDivElement>(null);
  const widthRef = React.useRef<number>();
  const heightRef = React.useRef<number>();

  const perspective = params?.perspective ?? DEFAULT_SKEW_PERSPECTIVE_PX;
  const scaleHover = 1 + (params?.scaleDelta ?? DEFAULT_SKEW_SCALE_DELTA);
  const scaleClick = 1 - (params?.scaleDelta ?? DEFAULT_SKEW_SCALE_DELTA);
  const degree = params?.degree ?? DEFAULT_SKEW_DEGREE;

  /**
   * Gets the width of an element.
   *
   * Cache the result.
   * @returns The width of the element, or 0 if the element is not found.
   */
  const getWidth = (): number => {
    if (widthRef.current !== undefined) {
      return widthRef.current;
    }

    const element = elementRef.current;
    if (element) {
      widthRef.current = element.clientWidth;
      return widthRef.current;
    }

    return 0;
  };

  /**
   * Returns the height of the element.
   *
   * Cache the result
   * @returns The height of the element.
   */
  const getHeight = (): number => {
    if (heightRef.current !== undefined) {
      return heightRef.current;
    }

    const element = elementRef.current;
    if (element) {
      heightRef.current = element.clientHeight;
      return heightRef.current;
    }

    return 0;
  };

  /**
   * Returns the x offset of the element.
   *
   * @returns The x offset of the element.
   */
  const getX = (): number => {
    const element = elementRef.current;
    if (element) {
      return element.getBoundingClientRect().left;
    }
    return 0;
  };

  /**
   * Returns the y offset of the element.
   *
   * Cache the result
   * @returns The y offset of the element.
   */
  const getY = (): number => {
    const element = elementRef.current;
    if (element) {
      return element.getBoundingClientRect().top;
    }
    return 0;
  };

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const xVal = e.clientX - getX();
    const yVal = e.clientY - getY();

    const width = getWidth();
    const height = getHeight();

    const d = width < MIN_WIDTH_THRESHOLD ? Math.max(MIN_DEGREE_FOR_SMALL_WIDTH, degree) : degree;

    const yRotation = d * ((xVal - width / 2) / width);
    const xRotation = -d * ((yVal - height / 2) / height);

    const string = `perspective(${perspective}px) scale(${scaleHover}) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;

    const element = elementRef.current;
    if (element) {
      element.style.transform = string;
    }
  }

  function handleMouseOut() {
    const element = elementRef.current;
    if (element) {
      element.style.transform = `perspective(${perspective}px) scale(1) rotateX(0) rotateY(0)`;
    }
  }

  function handleMouseDown() {
    const element = elementRef.current;
    if (element) {
      element.style.transform = `perspective(${perspective}px) scale(${scaleClick}) rotateX(0) rotateY(0)`;
    }
  }

  function handleMouseUp() {
    const element = elementRef.current;
    if (element) {
      element.style.transform = `perspective(${perspective}px) scale(${scaleHover}) rotateX(0) rotateY(0)`;
    }
  }

  return {
    ref: elementRef,
    onMouseMove: handleMove,
    onMouseOut: handleMouseOut,
    onMouseDown: handleMouseDown,
    onMouseUp: handleMouseUp,
  };
}
