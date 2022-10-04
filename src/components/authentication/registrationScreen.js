import { Link as LinkRouter, useNavigate } from "react-router-dom"
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from "@mui/material/Link"
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container/';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CircularLoading from "../../utils/buttonLoading";
import Alert from '@mui/material/Alert';
import axios from "axios"
import API_URL from "../../utils/apiUrl";

const theme = createTheme();

export default function RegistrationScreen() {
    const [loadingButtonForm, setLoadingButtonForm] = React.useState(false)
    const [errorSignUp, setErrorSignUp] = React.useState(false)

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();

        setLoadingButtonForm(true)

        const data = new FormData(event.currentTarget);
        const bodyRegistration = {
            name: `${data.get('firstName')} ${data.get('lastName')}`,
            profile_url: data.get('profilePicture'),
            email: data.get('email'),
            password: data.get('password'),
        }

        const promise = axios.post(`${API_URL}/signup`, bodyRegistration)
        promise.then(_ => {
            setLoadingButtonForm(false)
            navigate("/signin")
        }).catch(_ => {
            setLoadingButtonForm(false)
            setErrorSignUp(true)
            setTimeout(() => {
                setErrorSignUp(false)
            }, 4000)
        })
    };

    return (
        <ThemeProvider theme={theme}>
            {!errorSignUp ? "" : <Alert severity="error" style={{ m: 1, position: "fixed", top: "0", right: "0" }}>Erro ao tentar cadastrar-se,verifique todos os dados!</Alert>}
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
                        Sign up
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="Nome"
                                    disabled={loadingButtonForm}
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Sobrenome"
                                    name="lastName"
                                    disabled={loadingButtonForm}
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="profilePicture"
                                    label="Foto de Perfil"
                                    name="profilePicture"
                                    disabled={loadingButtonForm}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    name="email"
                                    disabled={loadingButtonForm}
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Senha"
                                    type="password"
                                    id="password"
                                    disabled={loadingButtonForm}
                                    autoComplete="new-password"
                                />
                            </Grid>
                        </Grid>
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
                            Sign Up
                        </Button>}
                        <Grid container justifyContent="flex-end">
                            <Grid item>

                                <LinkRouter to={loadingButtonForm ? "" : "/signin"} style={{ textDecoration: "none" }}>
                                    <Link style={{ textDecoration: "none" }}>
                                        já tem uma conta? Entrar
                                    </Link>
                                </LinkRouter>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}