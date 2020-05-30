import React, { Component } from 'react'
import { Row, Col, Container, DropdownButton, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './main.css'
import Logo from '../../img/Logo.png'


class Home extends Component {
    render() {
        return (
            <Container fluid>
                <Row className="wrap">
                    <Col className="sidebar" lg={2}>
                        <div className="sidebarWrap">
                            <header>
                                <img src={Logo} />
                                <p className="logoName"><b>Grocery Bazar</b></p>
                            </header>
                            <ul className="sidebarList">
                                <li className="li"><i class="fas fa-home icon" />Search Hub</li>
                                <li className="li"><i class="fas fa-briefcase icon" />Your Products</li>
                                <li className="li"><i class="fas fa-shopping-cart icon"></i>Selling Mode</li>
                                <li className="li"><i class="fas fa-truck icon"></i>Orders</li>
                                <li className="li"><i class="fas fa-comment-alt icon"></i>Messages</li>
                                <li className="li"><i class="fas fa-bookmark icon"></i>Book Marks</li>
                                <li className="li"><i class="fas fa-university icon" />Account</li>
                                <li className="li"><i class="fas fa-info-circle icon"></i>Support</li>
                            </ul>
                        </div>
                    </Col>
                    <Col className="wrapContent" lg={8}>
                        {/* <Row className="content">
                            <Col style={{ height: '20px' }} lg={8}>
                                <text className="title">Search Hub</text>
                            </Col>
                            <Col className="wrapName" lg={4}>
                                <div>
                                    <text className="wellcome">Wellcome Back! </text>
                                    <text className="name"> Guntur</text>
                                </div>
                            </Col>
                            <Col style={{ backgroundColor: 'green',height:'200px' }} lg={12}>
                            </Col>
                        </Row> */}
                        <Col className="content" lg={12}>
                            <Row className="header" lg={12}>
                                <div>
                                    <text className="title">Search Hub</text>
                                </div>
                                <div>
                                    <text className="wellcome">Wellcome Back! </text>
                                    <text className="name"> Guntur</text>
                                </div>
                            </Row>
                            <Row className="option" >
                                <Col className="itemType" lg={3}>
                                    <div className="borderRadius">
                                        <Col lg={12}>Select item type</Col>
                                        <DropdownButton id="dropdown-basic-button" title="All Lists">
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </DropdownButton>
                                    </div>
                                </Col>
                                <Col className="city" lg={3}>
                                    <div className="borderRadius">
                                    <Col lg={12}>Select city</Col>
                                        <DropdownButton id="dropdown-basic-button" title="City">
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </DropdownButton>
                                    </div>
                                </Col>
                                <Col className="date" lg={2}>
                                </Col>
                                <Col className="latest" lg={2}>
                                </Col>
                                <Col className="search" lg={2}>
                                </Col>
                            </Row>
                        </Col>
                    </Col>
                    <Col className="tranding" lg={2}>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Home