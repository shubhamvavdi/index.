import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function Category({catData,datas}) {
    let data = catData.map((v, i) => {
        console.log(v.slug)
        return (
            <li class="nav-item bg-body-secondary m-1 list" onClick={() => datas(v.slug)} key={i}>
                <a class="nav-link text-black">{v.name}</a>
            </li>
        )
    })
    return (
        <>
            <Col lg={2} className='p-0'>
                <h5>Product Category</h5>

                <ul class="nav flex-column">
                    {data}
                </ul>
            </Col>
        </>
    )
}


