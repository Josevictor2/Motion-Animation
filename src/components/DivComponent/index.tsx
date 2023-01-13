import { Box } from "@mui/material"
import { FC } from "react"

type DivComponentProps = Record<'color', string>

export const DivComponent: FC<DivComponentProps> = ({color}) => {
    return (
        <Box sx={{
            minHeight: '70px',
            minWidth: '100px',
            backgroundColor: color,
            borderRadius: '10px',
            pointerEvents: 'none',
        }} />
    )
}