import { useEffect, useState, useContext } from 'react';
// import NavBar from "../navBar/NavBar.js"
import NavBar from "../navBar/navBarPrimary.js"
import styled from "styled-components"
import Foto from "../../assets/images/logo-fios-sacros.png"
import { Button, useMediaQuery } from '@mui/material';
import "../../assets/style/fonts.css"
import axios from "axios"
import API_URL from '../../utils/apiUrl';
import ListAllProducts from './listProducts.js';
import useContextAPI from '../../contexts/useContext.js';
import Footer from './footer.js';
import KnowMore from './knowMore.js';

export default function HomeScreen() {
    const [allProducts, setAllProducts] = useState()
    const { token } = useContext(useContextAPI)

    const matches = useMediaQuery('(max-width:600px)');
    useEffect(() => {
        const getAllProducts = axios.get(`${API_URL}/products`)
        getAllProducts.then((res) => {
            const products = res.data
            setAllProducts(products)

        }).catch(() => {
            alert("Falha ao tentar buscar todos os produtos")
        })

    }, [])


    return (
        <>
            <NavBar />
            <Baner>
                <ImageBaner src={Foto} />
                {!matches ?
                    <Button href='#saiba-mais' variant="contained" style={{
                        position: 'absolute', right: 60, bottom: 50, backgroundColor: "#FFB6C1", width: 200, height: 45
                    }}>Saiba Mais
                    </Button> : <Button href='#saiba-mais' variant="contained" style={{
                        position: 'absolute', right: 20, bottom: 25, backgroundColor: "#FFB6C1"
                    }}>Saiba Mais</Button>}
            </Baner>
            <ListAllProducts products={allProducts} />
            <KnowMore />
            <Footer />
        </>
    )
}

const Baner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`

const ImageBaner = styled.img`
    width: 100%;
    max-height: 450px;
    background-color: transparent;
    -webkit-mask-image: linear-gradient(to bottom, transparent 5%, #FFC0CB 30%);
    @media (max-width:600px){
        margin-top: 25px;
        max-height: 300px;
        -webkit-mask-image: linear-gradient(to bottom, transparent 5%, #FFC0CB 30%);
    }
    box-shadow: 0 0 15px 15px rgba(0, 0, 0, 0.5);
`
