// import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import "../../assets/style/fonts.css"
import styled from "styled-components";
import PhotoProduct from "../../assets/images/boneca-de-pano.jpg"
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Button } from "@mui/material";
import NavBar from "../navBar/navBar.js"

export default function ShoppingCartScreen() {


    return (
        <>
            <NavBar />
            <Main>
                <DivTitle>
                    <Title>Carrinho de Compras</Title>
                </DivTitle>
                <Container>
                    <ContainerPurchases>
                        <BoxPurchase >
                            <TitlePurchases>MINHAS COMPRAS</TitlePurchases>
                            <Purchase>
                                <BoxImage>
                                    <ImageProduct src={PhotoProduct} />
                                </BoxImage>
                                <OrderDetails>
                                    <Price>R$ 10.00</Price>
                                    <NameProduct>Boneca de pano</NameProduct>
                                    <CloseOutlinedIcon style={{ position: "absolute", top: 10, right: 20, cursor: "pointer" }} />
                                </OrderDetails>
                            </Purchase>
                        </BoxPurchase>
                        <Box >
                            <TitlePurchases>TOTAL</TitlePurchases>
                            <DetailsCheckOut>
                                <DivSubTotal>
                                    <span>Sub-total</span>
                                    <span>R$ 10.00</span>
                                </DivSubTotal>
                            </DetailsCheckOut>
                            <DivButton>
                                <Button variant="contained" color="success">FINALIZAR COMPRA</Button>
                            </DivButton>
                        </Box>
                    </ContainerPurchases>
                </Container>
            </Main>
        </>
    )
}

const Main = styled.div`
    margin-top: 50px;
    background-color: lightgray;
    min-height: 100vh;
`

const Container = styled.div`
    display: flex;
    margin-top: 20px;
    justify-content: center;
    width: 100%;
`

const DivTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 100%;
    height: 150px;
`

const Title = styled.h1`
    font-family: 'Lalezar', cursive;
    font-style: "normal";
    color: gray;
    font-weight: bold;
    font-size: 50px;
`

const ContainerPurchases = styled.div`
    display: flex;
    width: 80%;
`

const BoxPurchase = styled.div`
    padding: 20px;
    box-sizing: border-box;
    background-color: white;
    width: 60%;
    height: 100%;
    margin-right: 20px;
`

const Box = styled.div`
    padding: 20px;
    box-sizing: border-box;
    background-color: white;
    width: 40%;
    height: 300px;
`

const TitlePurchases = styled.h2`
    font-family: 'Lalezar', cursive;
    font-style: "normal";
    color: gray;
    font-size: 30px;
`

const Purchase = styled.div`
    display:flex;
    justify-content: space-between;
    padding: 10px;
    box-sizing: border-box;
    margin-top: 10px;
    border-top:  1px solid lightgray ;
    width: 100%;
`

const BoxImage = styled.div`
    width: 120px;
    height: 100%;
`

const ImageProduct = styled.img`
    width: 100%;
    height: 100%;
`

const OrderDetails = styled.div`
    width: 78%;
    position: relative;
    font-family: 'Lalezar', cursive;
    font-style: normal;
`

const Price = styled.h3`
    position: absolute;
    top:20px;
    font-size: 22px;
    font-style: normal;
    color: gray;
`

const NameProduct = styled.span`
    position: absolute;
    top:40px;
    font-size: 17px;
    flex-wrap: wrap;
    color: #A9A9A9;
`

const DetailsCheckOut = styled.div`
    display:flex;
    justify-content: space-between;
    padding: 10px;
    box-sizing: border-box;
    margin-top: 10px;
    border-top:  1px solid lightgray ;
    width: 100%;
`

const DivSubTotal = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-family: 'Lalezar', cursive;
    font-style: normal;
    font-size: 20px;
    span:nth-child(2){
        color: gray;
    }
`

const DivButton = styled.div`
    margin-top: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`