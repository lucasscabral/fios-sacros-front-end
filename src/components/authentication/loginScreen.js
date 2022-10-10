import { Link as LinkRouter, useNavigate } from "react-router-dom"
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CircularLoading from "../../utils/buttonLoading";
import Alert from '@mui/material/Alert';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useContextAPI from "../../contexts/useContext";
import axios from "axios"

const theme = createTheme();

export default function SignIn() {
    const [loadingButtonForm, setLoadingButtonForm] = React.useState(false)
    const [errorSignUp, setErrorSignUp] = React.useState(false)
    const { setToken, dataUser } = React.useContext(useContextAPI)
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoadingButtonForm(true)
        const data = new FormData(event.currentTarget);
        const bodySignIn = {
            email: data.get('email'),
            password: data.get('password'),
        }

        const promise = axios.post(`https://fios-sacros.herokuapp.com/signin`, bodySignIn)
        promise.then((res) => {
            dataUser.id = res.data.id
            dataUser.name = res.data.name
            dataUser.profile_url = res.data.profile_url
            setToken(res.data.token)
            localStorage.setItem("token", res.data.token)
            setLoadingButtonForm(false)
            navigate("/")
        }).catch((_) => {
            setLoadingButtonForm(false)
            setErrorSignUp(true)
            setTimeout(() => {
                setErrorSignUp(false)
            }, 4000)
        })
    };

    return (
        <ThemeProvider theme={theme}>
            {!errorSignUp ? "" : <Alert severity="error" style={{ m: 1, position: "fixed", top: "0", right: "0" }}>Erro ao tentar logar-se,email ou senha inválidos!</Alert>}
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>

                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            disabled={loadingButtonForm}
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Senha"
                            type="password"
                            id="password"
                            disabled={loadingButtonForm}
                            autoComplete="current-password"
                        />
                        {loadingButtonForm ? <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            <CircularLoading />
                        </Button> : <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>}
                        <Grid container justifyContent={'space-between'}>
                            <Grid>
                                {""}
                            </Grid>
                            <Grid item >
                                <LinkRouter to={loadingButtonForm ? "" : "/signup"} style={{ textDecoration: "none" }}>
                                    {"Não tem uma conta? Inscrever-se"}
                                </LinkRouter>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}