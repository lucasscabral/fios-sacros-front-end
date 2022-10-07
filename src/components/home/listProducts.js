import { useState, useContext } from "react";
import useContextAPI from "../../contexts/useContext";
import styled from "styled-components"
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import "../../assets/style/fonts.css"
import { Button, Typography } from '@mui/material';

function UniqueProduct({ product }) {
    return (
        <Product>
            <AddShoppingCartOutlinedIcon sx={{ m: 1, color: "white", position: "absolute", width: 30, height: 30, cursor: "pointer", border: "red" }} />
            <ImageProduct src={product.image_url} />
            <DetailsProduct>
                <Details>
                    <Typography style={{ fontFamily: "'Alkalami', serif ", fontStyle: "normal", fontSize: 16, marginBottom: 10 }}>{product.name}</Typography>
                    <Typography style={{ fontFamily: "'Alkalami', serif ", fontStyle: "normal" }}>R${product.price}</Typography>
                </Details>
                <Button variant="contained" style={{
                    backgroundColor: "#A9A9A9", height: 35, marginTop: 45
                }}>Comprar</Button>
            </DetailsProduct>
        </Product>
    )
}


export default function ListAllProducts({ products }) {
    const { categories } = useContext(useContextAPI)


    return (
        categories?.map((category) =>
            <ListProducts>
                <Typography style={{
                    marginBottom: 15, marginLeft: 15, fontFamily: "'Alkalami', serif ", fontStyle: "normal",
                    fontSize: 35, color: "#606060"
                }}>{category.name}</Typography>
                <Products>
                    {products?.map(product => product.categories.name === category.name ? <UniqueProduct product={product} /> : "")}
                </Products>
            </ListProducts>

        )

    )
}


const ListProducts = styled.div`
    margin-top: 50px;
    width: 100%;
    height: 100%;
`
const Products = styled.div`
    display: flex;
    border-radius: 5px 5px 0 0;
    margin-left: 15px;
    overflow-x: scroll;
    gap: 20px;
`

const Product = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 250px;
    max-height: 250px;
`

const ImageProduct = styled.img`
    max-width: 250px;
    height: 60%;
    border-radius: 5px 5px 0 0;
`

const DetailsProduct = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: lightgray;
    width: 100%;
    height: 40%;
    border-radius: 0 0 5px 5px;
`
const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 120px;
`



