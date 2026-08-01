import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/utils/cn";

type ContainerProps = ComponentPropsWithoutRef<"div">;

const Container = ({ className, children, ...props }: ContainerProps) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1440px] px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
