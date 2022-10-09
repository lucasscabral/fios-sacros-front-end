import { useState, useContext } from "react";
import useContextAPI from "../../contexts/useContext";
import styled from "styled-components"
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import "../../assets/style/fonts.css"
import { Button, Typography } from '@mui/material';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import axios from "axios";
import API_URL from "../../utils/apiUrl";
import { useNavigate } from "react-router-dom";

function UniqueProduct({ product }) {
    const [addProduct, setAddProduct] = useState(false)
    const { token } = useContext(useContextAPI)

    const navigate = useNavigate()

    async function addProductShoppingCart(product) {
        console.log(product)
        const config = {
            headers: {
                Authorization: `Bearer ${token}` || ""
            }
        }
        if (!addProduct) {
            try {
                await axios.post(`${API_URL}/shopping-cart/${product}`, {}, config)
                setAddProduct(!addProduct)
            } catch (error) {
                console.log(error)
                const statusError = error.response.status
                if (statusError === 401) {
                    return Confirm.show(
                        'Aviso',
                        'Para poder adicionar um produto no carrinho de compras é necessário estar logado, gostaria de se logar?',
                        'Sim',
                        'Não',
                        () => {
                            navigate("/signin")
                        },
                        () => {
                        }
                    );
                }
            }
        } else {
            try {
                await axios.delete(`${API_URL}/product/${product}`, config)
                setAddProduct(!addProduct)
            } catch (error) {
                console.log(error)
                alert("Erro ao tentar remover um produto do carrinho de compras")
            }
        }
    }


    return (
        <Product>
            <AddShoppingCartOutlinedIcon onClick={() => addProductShoppingCart(product.id)} sx={{ m: 1, color: `${!addProduct ? "white" : "black"}`, position: "absolute", width: 30, height: 30, cursor: "pointer", border: "red" }} />
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
        categories?.map((category, id) =>
            <ListProducts key={id}>
                <Typography style={{
                    marginBottom: 15, marginLeft: 15, fontFamily: "'Alkalami', serif ", fontStyle: "normal",
                    fontSize: 35, color: "#606060"
                }}>{category.name}</Typography>
                <Products>
                    {products?.map((product, id) => product.categories.name === category.name ? <UniqueProduct key={id} product={product} /> : "")}
                </Products>
            </ListProducts>
        )

    )
}


Confirm.init({
    className: 'notiflix-confirm',
    width: '300px',
    zindex: 4003,
    position: 'center',
    distance: '10px',
    backgroundColor: '#f8f8f8',
    borderRadius: '25px',
    backOverlay: true,
    backOverlayColor: 'rgba(0,0,0,0.5)',
    rtl: false,
    fontFamily: 'Quicksand',
    cssAnimation: true,
    cssAnimationDuration: 300,
    cssAnimationStyle: 'fade',
    plainText: true,
    titleColor: '#FFB6C1',
    titleFontSize: '16px',
    titleMaxLength: 34,
    messageColor: '#1e1e1e',
    messageFontSize: '14px',
    messageMaxLength: 110,
    buttonsFontSize: '15px',
    buttonsMaxLength: 34,
    okButtonColor: '#f8f8f8',
    okButtonBackground: '#FFB6C1',
    cancelButtonColor: '#f8f8f8',
    cancelButtonBackground: '#a9a9a9',
});


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
    gap: 0 20px;
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



