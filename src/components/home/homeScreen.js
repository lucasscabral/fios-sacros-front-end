import ResponsiveAppBar from "../navBar/navBar"
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Foto from "../../assets/images/logo-fios-sacros.png"
import { Box } from "@mui/material";

export default function HomeScreen() {
    return (
        <>
            <ResponsiveAppBar />
            <Container maxWidth="xl" style={{ height: "100vh" }}>
                <Box sx={{ flexGrow: 1 }} style={{ width: "100%", backgroundColor: "red" }}>
                    {/* <Typography textAlign="center">AQUI VEM OS PRODUTOS</Typography> */}
                    {/* <img src={Foto} style={{ width: "100%", maxHeight: "400px" }} /> */}
                </Box>
            </Container>
        </>
    )
}