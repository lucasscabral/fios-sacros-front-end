import { useContext } from "react";
import styled from "styled-components";
import useContextAPI from "../../contexts/useContext";
import "../../assets/style/fonts.css"


export default function Footer() {
    const { categories } = useContext(useContextAPI)

    return (
        <FooterPage>
            <Categories>
                <span>Categorias</span>
                <ul>
                    {categories?.map(category => <li key={category.name}>{category.name}</li>)}
                </ul>
            </Categories>
            <Categories>
                <span>Contatos</span>
                <ul>
                    <li>Telefone: +55 99999-9999</li>
                    <li>Whatsapp: +55 99999-9999</li>
                    <li>Email: xxxxxx@xxxx.com</li>
                </ul>
            </Categories>
            <Categories>
                <span>Atendimento</span>
                <ul>
                    <li>Segunda à Sabado das 08h00 às 18h00</li>
                </ul>
            </Categories>
        </FooterPage>
    )
}


const FooterPage = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #BE4858;
`

const Categories = styled.div`
    width: 100%;
    height: 100%;
    color: white;
    font-family: 'Poppins', sans-serif;
    span{
        font-size: 18px;
    }
    ul{
        margin-top: 10px;
        list-style: inside;
    }
    li{
        font-weight: normal;
        font-size: 15px;
        margin-top: 5px;
    }
    @media (max-width:600px) {
        span{
            font-size: 12px;
        }
        li{
            font-size: 12px;
        }
    }
`