import React, { Component } from 'react'
import '../../style/main.scss'
import { Col } from 'react-bootstrap'

class YourProduct extends Component {
    render() {
        return (
            <Col lg={12} className="wrapYourProduct">
                <h1>Your Product</h1>
            </Col>
        )
    }
}

export default YourProduct