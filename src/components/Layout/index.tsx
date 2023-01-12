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
            flexDirection: "column",
            height: '100vh',
            gap: '20px',
        }}>
            {children}
        </Container>
    )
}
