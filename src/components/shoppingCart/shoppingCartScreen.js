import { useState, useEffect, useContext } from "react";
import "../../assets/style/fonts.css"
import styled from "styled-components";
import NavBarShoppingCartScreen from "./navBarShoppingCartScreen";
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import { Link } from "react-router-dom";
import axios from "axios";
import API_URL from "../../utils/apiUrl";
import useContextAPI from "../../contexts/useContext";
import ListProductsInShoppingCart from "./listProductsInShoppingCart";

export default function ShoppingCartScreen() {
    const [shoppingCart, setShoppingCart] = useState([])
    const [deleteProduct, setDeleteProduct] = useState(false)
    const { token, finalizePurchase } = useContext(useContextAPI)



    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}` || ""
            }
        }
        const allProductsShoppingCart = axios.get(`${API_URL}/shopping-cart`, config)
        allProductsShoppingCart.then(res => {
            const allProducts = res.data
            setShoppingCart(allProducts)
        }).catch(_ => {
            setShoppingCart([])
        })
    }, [finalizePurchase, token, deleteProduct])

    return (
        <>
            <NavBarShoppingCartScreen />
            <Main>
                <DivTitle>
                    <Title>Carrinho de Compras</Title>
                </DivTitle>
                {
                    shoppingCart.length === 0 ?
                        <ContainerEmptyCart>
                            <LocalGroceryStoreOutlinedIcon sx={{ m: 1, width: 80, height: 80, color: "white" }} />
                            <DivTitleEmptyCart>
                                <h2>Seu carrinho está vazio</h2>
                                <span>Os produtos que você deseja estão lhe esperenado,<Link to={"/"} style={{ textDecoration: "none" }}>clique aqui</Link> </span>
                            </DivTitleEmptyCart>
                        </ContainerEmptyCart> :
                        <ListProductsInShoppingCart shoppingCart={shoppingCart} deleteProduct={deleteProduct} setDeleteProduct={setDeleteProduct} />
                }
            </Main>
        </>
    )
}

const Main = styled.div`
    margin-top: 50px;
    background-color: lightgray;
    min-height: 100vh;
    @media (max-width:600px) {
        margin-top: 80px;
    }
`

const DivTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 100%;
    height: 150px;
    @media (max-width:600px) {
        text-align: center;
    }
`

const Title = styled.h1`
    font-family: 'Lalezar', cursive;
    font-style: "normal";
    color: gray;
    font-weight: bold;
    font-size: 50px;
`

const ContainerEmptyCart = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
    height: 300px;
    justify-content: center;
    align-items: center;
`

const DivTitleEmptyCart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 450px;
    height: 100px;
    text-align: center;
    font-family: 'Varela Round', sans-serif;
    h2{
       font-weight: bold;
       font-size: 20px;
       margin-bottom: 20px;
    }
    span{
        font-size: 17px;
    }
`

