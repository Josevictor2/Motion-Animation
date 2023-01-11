import { Box, Container } from "@mui/material";
import { FC } from "react";

type LayoutProps = {
    children: React.ReactNode;
};

export const Layout : FC<LayoutProps> = ({ children }) => {
    return (
        <Container sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        }}>
            {children}
        </Container>
    )
}