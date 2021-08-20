import { buildQueries } from '@testing-library/react';
import React, { Component } from 'react';
import styled, { createGlobalStyle } from "styled-components"
import addbtn from './assets/add.svg'
import rmv from './assets/remove.svg'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`
const BoxCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1024px;
  height: 30vh;
`
const AddImg = styled.img`
  cursor: pointer;
  border-radius: 50px;
`
const BoxTitle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 5rem;
`
const Card = styled.div`
  border: solid rgb(232 232 232) 2px;
  width: 13.563rem;
  height: 8.563rem;
  border-radius: 6px;
  margin: 7px;
  text-align: center;
`
const BuyBox = styled.div`
  border: solid rgb(232 232 232) 2px;
  width: 35rem;
  height: 40rem;
  overflow-y: scroll;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
`
const ContainerBuy = styled.div`
  display: flex;
  flex-direction: column;
`

const MapBox = styled.div`
  flex-wrap: wrap;
`
const HeaderCard = styled.div`
  border-bottom: solid rgb(232 232 232) 2px;
  background-color: rgb(245 245 245);
  height: 2.125rem;
  border-radius: 6px 6px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const HeaderCardBuy = styled.div`
  border-bottom: solid #5bc0de 2px;
  background-color: #5bc0de;
  height: 2.125rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color:#ffff;
`
const ParagraphBuy = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Container = styled.div`
  
`
const T = styled.div`
  display: flex;
`
const L = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
const CardBuy = styled.div`
  height: 80px;
  width: 515px;
  border: solid #5bc0de 2px;
  margin-bottom: 1rem;
`

class App extends Component {
  state = {
    buy: [],
    cart: [],
    carro: [
      {
        id: 1,
        modelo: 'Jetta',
        montadora: 'Volkswagen',
        preco: 144000,
        tipo: 'Sedan'
      },
      {
        id: 2,
        modelo: 'Polo',
        montadora: 'Volkswagen',
        preco: 70000,
        tipo: 'hatch'
      },
      {
        id: 3,
        modelo: 'T-cross',
        montadora: 'Volkswagen',
        preco: 123000,
        tipo: 'suv'
      },
      {
        id: 4,
        modelo: 'Tigun r-line',
        montadora: 'Volkswagen',
        preco: 146000,
        tipo: 'suv'
      },
      {
        id: 5,
        modelo: 'Civic',
        montadora: 'honda',
        preco: 115000,
        tipo: 'Sedan'
      },
      {
        id: 6,
        modelo: 'Corolla',
        montadora: 'toyta',
        preco: 110000,
        tipo: 'Sedan'
      },
      {
        id: 7,
        modelo: 'Corolla cross',
        montadora: 'toyta',
        preco: 184000,
        tipo: 'suv'
      },
      {
        id: 8,
        modelo: 'Compass',
        montadora: 'jeep',
        preco: 132000,
        tipo: 'suv'
      },
      {
        id: 9,
        modelo: 'Golf gti',
        montadora: 'Volkswagen',
        preco: 138000,
        tipo: 'hatch'
      },
    ]

  }

  

  handleRmv = (id) => {
    const { buy } = this.state
    this.setState({
      buy: buy.filter((item) => item.id !== id)
    })
  }


  handleAdd = (id) => {
    //adicionar | um elemento unico | na lista de compras 'buy'
    const { buy, carro } = this.state
    const teste = carro.find((item) => item.id === id)
    this.setState({
      buy: buy.concat(teste)
    })
  }

  render() {
    return (
      <Container>
        <GlobalStyle />
        <BoxTitle>
          <div>
            <h1>Loja de Carros!</h1>
          </div>
        </BoxTitle>
        <T>
          <BoxCards>
            {this.state.carro.map((item, index) => (
              <MapBox key={index}>
                <Card>
                  <HeaderCard>
                    <b><p>{item.modelo}</p></b>
                    <AddImg onClick={() => this.handleAdd(item.id)} src={addbtn} alt='' />
                  </HeaderCard>
                  <p><b>Montadira: </b>{item.montadora}</p>
                  <p><b>Preço: </b>{item.preco}</p>
                  <p><b>Tipo: </b>{item.tipo}</p>
                </Card>
              </MapBox>
            ))}
          </BoxCards>
          <ContainerBuy>
            <BuyBox>
              {this.state.buy.map((item, id) => (
                <CardBuy style={{ background: '' }}>
                  <HeaderCardBuy>
                    <b><p>{item.modelo}</p></b>
                    <AddImg onClick={() => this.handleRmv(item.id)} src={rmv} alt='' />
                  </HeaderCardBuy>
                  <ParagraphBuy>
                    <p><b>Tipo: </b>{item.tipo}</p>
                    <p><b>Preço: </b>{item.preco}</p>
                  </ParagraphBuy>
                </CardBuy>
              ))}
            </BuyBox>
            <L>
              <b><p>Total :</p></b>
              <p> {this.state.buy.reduce((a,b) => a + b.preco, 0)} </p>
            </L>
          </ContainerBuy>
        </T>
      </Container>
    )
  }
}

export default App;