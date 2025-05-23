import { Popover } from "antd";
import React from "react";

interface CustomPopoverProps {
  content?: React.ReactNode;
  children?: React.ReactNode;
  open?: boolean;
  trigger?: "click" | "hover";
  placement?:
    | "top"
    | "left"
    | "right"
    | "bottom"
    | "topLeft"
    | "topRight"
    | "bottomLeft"
    | "bottomRight"
    | "leftTop"
    | "leftBottom"
    | "rightTop"
    | "rightBottom";
  arrow?: boolean;
  onOpenChange?: (visible: boolean) => void;
}

export const PopoverCustom = ({
  content,
  children,
  open,
  trigger = "click",
  placement = "top",
  arrow = true,
  onOpenChange,
}: CustomPopoverProps) => {
  const handlePopoverOpenChange = (visible: boolean) => {
    if (onOpenChange) {
      onOpenChange(visible);
    }
  };

  return (
    <>
      {open && (
        <div
          role="button"
          tabIndex={0}
          aria-label="Close Overlay"
          className="z-998 bg-neutral-gray fixed inset-0 z-10 flex h-screen cursor-default flex-col opacity-70 mt-5"
          onClick={() => onOpenChange && onOpenChange(false)}
        />
      )}
      <Popover
        content={content}
        open={open}
        onOpenChange={handlePopoverOpenChange}
        trigger={trigger}
        placement={placement}
        arrow={arrow}
      >
        {children}
      </Popover>
    </>
  );
};
