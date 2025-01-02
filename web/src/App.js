import './App.css';
import Category from './category';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

function App() {

  let [categoryData, updateCategoryData] = useState([])
  let [productData, updateProductData] = useState([])
  let [pData,upData] = useState('beauty')

  let getCategoryData = () => {
    axios.get('https://dummyjson.com/products/categories')
      .then((response) => response.data)
      .then((finalResult) => {
        updateCategoryData(finalResult)
      })
  }

  let getProductData = () => {
    axios.get('https://dummyjson.com/products')
      .then((response) => response.data)
      .then((finalResult) => {
        updateProductData(finalResult.products)
      })
  }


  useEffect(() => {
    getCategoryData()
    getProductData( )
  }, [])

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/category/${pData}`)
    .then((response) => response.data)
    .then((finalResult) => {
      updateProductData(finalResult.products)
    })
  }, [pData])
  
  return (
    <>
      <h1 className='text-center mb-5 text-info'>Product Page</h1>
      <Row className='m-0'>
        <Category catData={categoryData} datas={upData}/>
        <Product prodData={productData} />
      </Row>

    </>
  );
}


function Product({ prodData }) {
  console.log(prodData)
  let data = prodData.map((v, i) => {
    return (
    <div className='box' key={i}>
      <img src={v.images[0]} />
      <h5>{v.title}</h5>
    </div>)
  })
  return (
    <>
      <Col lg={10}>
        {data}
      </Col>
    </>
  )
}

export default App;
