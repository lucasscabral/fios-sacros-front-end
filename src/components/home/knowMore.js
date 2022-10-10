import styled from "styled-components";



export default function KnowMore() {
    return (
        <KnowMorePage id="saiba-mais">
            <Title>Porque as pessoa escolhem a gente</Title>
            <Details>
                <Specifications>
                    <img alt="icone-alta-qualidade" src="https://projeto14-lea-store-front-fpu0tn11l-lucasscabral.vercel.app/static/media/star.84353f90.svg" />
                    <h2>Alta qualidade</h2>
                    <p>Nossos produtos passam por um processo rigoroso de inspeção antes de serem despachados.</p>
                </Specifications>
                <Specifications>
                    <img alt="icone-retorno-facil" src="https://projeto14-lea-store-front-fpu0tn11l-lucasscabral.vercel.app/static/media/return.53dcee69.svg" />
                    <h2>Retorno fácil</h2>
                    <p>Nossa política de devolução é simples , o cliente tem até 30 dias após a entrega para entrar em contato caso não esteja satisfeito com o produto.</p>
                </Specifications>
            </Details>
            <Details>
                <Specifications>
                    <img alt="icone-atendimento-ao-cliente" src="https://projeto14-lea-store-front-fpu0tn11l-lucasscabral.vercel.app/static/media/costumer.783f2e21.svg" />
                    <h2>Atendimento ao Cliente</h2>
                    <p>Oferecemos um atendimento ao cliente incrível, não importa o que aconteça.Para mais informações ligue para (99) 9 9999-9999</p>
                </Specifications>
            </Details>
        </KnowMorePage>
    )
}


const KnowMorePage = styled.div`
    width: 100%;
    min-height: 300px;
    display: flex;
    margin: 40px 0;
    padding: 20px;
    box-sizing: border-box;
    font-family: 'Alkalami', serif;
    align-items: center;
    flex-direction: column;
    background-color: #FFB6C1;

`
const Title = styled.div`
    width: 100%;
    text-align: center;
    font-size: 25px;
`

const Details = styled.div`
    margin-top: 15px;
    display: flex;
    width: 350px;
    div:nth-child(1){
        margin-right: 30px;
    }
`

const Specifications = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;

    h2{
        margin-top: 10px;
        font-size: 25px;
    }
    p{
        font-size: 19px;
        font-style: normal;
        color: white;
    }
`
