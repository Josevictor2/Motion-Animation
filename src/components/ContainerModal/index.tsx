import { Container, Typography } from "@mui/material";
import { FC } from "react";

type ContainerProps = {
  closeModal: () => void;
};

export const ContainerModal: FC<ContainerProps> = ({closeModal}) => {
return(
  <Container sx={{
      width:'300px',
      height:'80px',
      backgroundColor:'white',
      borderRadius:'10px',
      border:'1px solid black',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'column'
    }}>
        <Typography>Contéudo aqui</Typography>
        <button onClick={closeModal}>Close Modal</button>
    </Container>
  )
};
