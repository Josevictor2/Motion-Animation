import { FC } from "react";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout : FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex justify-center items-center flex-col min-h-screen gap-5">
            {children}
        </div>
    )
}
