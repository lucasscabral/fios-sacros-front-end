import styled from "styled-components";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Button } from "@mui/material";
import { useState } from "react"


function ListProducts({ productId, productImage, productPrice, productName }) {

    return (
        <Purchase>
            <BoxImage>
                <ImageProduct src={productImage} />
            </BoxImage>
            <OrderDetails>
                <Price>R$ {productPrice}</Price>
                <NameProduct>{productName}</NameProduct>
                <CloseOutlinedIcon style={{ position: "absolute", top: 10, right: 20, cursor: "pointer" }} />
            </OrderDetails>
        </Purchase>
    )

}



export default function ListProductsInShoppingCart({ shoppingCart }) {
    let priceTotal = 0
    shoppingCart.map(product => priceTotal += Number(product.product.price))

    console.log(priceTotal)
    return (
        <Container>
            <ContainerPurchases>
                <BoxPurchase >
                    <TitlePurchases>MINHAS COMPRAS</TitlePurchases>
                    {shoppingCart.map((product, id) => <ListProducts key={id} productId={product.product.id} productImage={product.product.image_url} productPrice={product.product.price} productName={product.product.name} />)}
                </BoxPurchase>
                <Box >
                    <TitlePurchases>TOTAL</TitlePurchases>
                    <DetailsCheckOut>
                        <DivSubTotal>
                            <span>Sub-total</span>
                            <span>R$ {priceTotal}</span>
                        </DivSubTotal>
                    </DetailsCheckOut>
                    <DivButton>
                        <Button variant="contained" color="success">FINALIZAR COMPRA</Button>
                    </DivButton>
                </Box>
            </ContainerPurchases>
        </Container>
    )
}


const Container = styled.div`
    display: flex;
    margin-top: 20px;
    justify-content: center;
    width: 100%;
`


const ContainerPurchases = styled.div`
    display: flex;
    width: 80%;
    @media (max-width:600px) {
        flex-direction: column;
        align-items: center;
    }
`

const BoxPurchase = styled.div`
    padding: 20px;
    box-sizing: border-box;
    background-color: white;
    width: 60%;
    height: 100%;
    margin-right: 20px;
    @media (max-width:600px) {
        margin-bottom: 30px;
        margin-right: 0;
        padding: 15px;
        width: 100%;
    }
`

const Box = styled.div`
    padding: 20px;
    box-sizing: border-box;
    background-color: white;
    width: 40%;
    height: 300px;
    @media (max-width:600px) {
        padding: 15px;
        width: 100%;
    }
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