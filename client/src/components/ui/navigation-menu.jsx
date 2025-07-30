import * as React from "react";
import { cn } from "@/lib/utils";

const NavigationMenu = React.forwardRef(({ className, ...props }, ref) => (
  <nav
    ref={ref}
    className={cn("flex gap-4 items-center", className)}
    {...props}
  />
));
NavigationMenu.displayName = "NavigationMenu";

const NavigationMenuList = ({ children, className }) => {
  return <ul className={cn("flex gap-6", className)}>{children}</ul>;
};

const NavigationMenuItem = ({ children, className }) => {
  return <li className={cn("relative", className)}>{children}</li>;
};

const NavigationMenuTrigger = ({ children, className }) => {
  return (
    <button
      className={cn(
        "hover:text-blue-600 focus:outline-none font-medium",
        className
      )}
    >
      {children}
    </button>
  );
};

const NavigationMenuContent = ({ children, className }) => {
  return (
    <div
      className={cn(
        "absolute top-full mt-2 w-48 bg-white border shadow-lg rounded p-3 z-10",
        className
      )}
    >
      {children}
    </div>
  );
};

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
};

export default NavigationMenu;