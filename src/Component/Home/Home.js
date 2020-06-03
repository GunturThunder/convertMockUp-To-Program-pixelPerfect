import React, { Component } from 'react'
import DatePicker from 'react-date-picker';
import { Row, Col, Container, DropdownButton, Dropdown, Button } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import './main.css'
import Logo from '../../img/Logo.png'
import Profile from '../../img/profile.jpg'


class Home extends Component {
    state = {
        date: new Date(),
    }

    onChange = date => this.setState({ date })
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
                                        <Col className="label" lg={12}>Select city</Col>
                                        <DropdownButton id="dropdown-basic-button" title="City">
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </DropdownButton>
                                    </div>
                                </Col>
                                <Col className="date" lg={3}>
                                    <div className="borderRadius">
                                        <Col lg={12}>
                                            <DatePicker
                                                className="datePicker"
                                                onChange={this.onChange}
                                                value={this.state.date}
                                            />
                                        </Col>
                                    </div>
                                </Col>
                                <Col className="latest" lg={2}>
                                    <div className="borderRadius">
                                        <Col lg={12}>By</Col>
                                        <DropdownButton id="dropdown-basic-button" title="Latest">
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </DropdownButton>
                                    </div>
                                </Col>
                                <Col className="search" lg={1}>
                                    {/* <div className="borderRadius">
                                        <i className="fas fa-search"></i>
                                    </div> */}
                                    <Button className="button" variant="primary">
                                        <i className="fas fa-search"></i>
                                    </Button>
                                </Col>
                            </Row>
                            <Container fluid style={{ height: '450px', overflowX: 'hidden', overflowY: 'scroll' }}>
                                <Row style={{ height: '120px', borderRadius: '25px', marginBottom: '10px' }}>
                                    <Col className="grid1" lg={1}>

                                    </Col>
                                    <Col className="grid2" lg={3}>
                                        <div className="wrap">
                                            <div className="wrap1">
                                                <text className="text">AJWA DATES</text>
                                                <div className="location">
                                                    <i class="fas fa-map-marker-alt"></i>
                                                    <text style={{ fontSize: '13px' }}>Rawalpindi Saddar</text>
                                                </div>
                                            </div>
                                            <text style={{ fontSize: '13px' }}>Product ID-AD-34566</text>
                                        </div>
                                    </Col>
                                    <Col className="grid3" lg={3}>
                                        <div className="top">
                                            <div className="verified">VERIFED</div>
                                            <div className="cartons">450 cartons</div>
                                        </div>
                                        <div className="bottom">
                                            <div className="availabe"><i class="fas fa-check"></i>AVAILABLE</div>
                                            <div className="costumerJoin">PREVIOUS CUSTOMER</div>
                                        </div>
                                    </Col>
                                    <Col className="grid4" lg={2}>
                                        <Col className="wrapGrid4" lg={12}>
                                            <div className="text">Today 10:45 AM</div>
                                            <DropdownButton id="dropdown-basic-button" title="Details">
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </DropdownButton>
                                        </Col>
                                    </Col>
                                    <Col className="grid5" lg={3}>
                                        <Col className="wrapGrid5" lg={12}>
                                            <div className="asking">
                                                <text>Asking Price</text>
                                                <i class="far fa-bookmark"></i>
                                            </div>
                                            <text className="text">Rs.9670</text>
                                            <div className="auction">AUCTION AVAILABLE</div>
                                        </Col>
                                    </Col>
                                </Row>
                                <Row style={{ height: '120px', borderRadius: '25px', marginBottom: '10px' }}>
                                    <Col className="grid1" lg={1}>

                                    </Col>
                                    <Col className="grid2" lg={3}>
                                        <div className="wrap">
                                            <div className="wrap1">
                                                <text className="text">AJWA DATES</text>
                                                <div className="location">
                                                    <i class="fas fa-map-marker-alt"></i>
                                                    <text style={{ fontSize: '13px' }}>Rawalpindi Saddar</text>
                                                </div>
                                            </div>
                                            <text style={{ fontSize: '13px' }}>Product ID-AD-34566</text>
                                        </div>
                                    </Col>
                                    <Col className="grid3" lg={3}>
                                        <div className="top">
                                            <div className="verified">VERIFED</div>
                                            <div className="cartons">450 cartons</div>
                                        </div>
                                        <div className="bottom">
                                            <div className="availabe"><i class="fas fa-check"></i>AVAILABLE</div>
                                            <div className="costumerJoin">PREVIOUS CUSTOMER</div>
                                        </div>
                                    </Col>
                                    <Col className="grid4" lg={2}>
                                        <Col className="wrapGrid4" lg={12}>
                                            <div className="text">Today 10:45 AM</div>
                                            <DropdownButton id="dropdown-basic-button" title="Details">
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </DropdownButton>
                                        </Col>
                                    </Col>
                                    <Col className="grid5" lg={3}>
                                        <Col className="wrapGrid5" lg={12}>
                                            <div className="asking">
                                                <text>Asking Price</text>
                                                <i class="far fa-bookmark"></i>
                                            </div>
                                            <text className="text">Rs.9670</text>
                                            <div className="auction">AUCTION AVAILABLE</div>
                                        </Col>
                                    </Col>
                                </Row>
                                <Row style={{ height: '120px', borderRadius: '25px', marginBottom: '10px' }}>
                                    <Col className="grid1" lg={1}>

                                    </Col>
                                    <Col className="grid2" lg={3}>
                                        <div className="wrap">
                                            <div className="wrap1">
                                                <text className="text">AJWA DATES</text>
                                                <div className="location">
                                                    <i class="fas fa-map-marker-alt"></i>
                                                    <text style={{ fontSize: '13px' }}>Rawalpindi Saddar</text>
                                                </div>
                                            </div>
                                            <text style={{ fontSize: '13px' }}>Product ID-AD-34566</text>
                                        </div>
                                    </Col>
                                    <Col className="grid3" lg={3}>
                                        <div className="top">
                                            <div className="verified">VERIFED</div>
                                            <div className="cartons">450 cartons</div>
                                        </div>
                                        <div className="bottom">
                                            <div className="availabe"><i class="fas fa-check"></i>AVAILABLE</div>
                                            <div className="costumerJoin">PREVIOUS CUSTOMER</div>
                                        </div>
                                    </Col>
                                    <Col className="grid4" lg={2}>
                                        <Col className="wrapGrid4" lg={12}>
                                            <div className="text">Today 10:45 AM</div>
                                            <DropdownButton id="dropdown-basic-button" title="Details">
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </DropdownButton>
                                        </Col>
                                    </Col>
                                    <Col className="grid5" lg={3}>
                                        <Col className="wrapGrid5" lg={12}>
                                            <div className="asking">
                                                <text>Asking Price</text>
                                                <i class="far fa-bookmark"></i>
                                            </div>
                                            <text className="text">Rs.9670</text>
                                            <div className="auction">AUCTION AVAILABLE</div>
                                        </Col>
                                    </Col>
                                </Row>
                                <Row style={{ height: '120px', borderRadius: '25px', marginBottom: '10px' }}>
                                    <Col className="grid1" lg={1}>

                                    </Col>
                                    <Col className="grid2" lg={3}>
                                        <div className="wrap">
                                            <div className="wrap1">
                                                <text className="text">AJWA DATES</text>
                                                <div className="location">
                                                    <i class="fas fa-map-marker-alt"></i>
                                                    <text style={{ fontSize: '13px' }}>Rawalpindi Saddar</text>
                                                </div>
                                            </div>
                                            <text style={{ fontSize: '13px' }}>Product ID-AD-34566</text>
                                        </div>
                                    </Col>
                                    <Col className="grid3" lg={3}>
                                        <div className="top">
                                            <div className="verified">VERIFED</div>
                                            <div className="cartons">450 cartons</div>
                                        </div>
                                        <div className="bottom">
                                            <div className="availabe"><i class="fas fa-check"></i>AVAILABLE</div>
                                            <div className="costumerJoin">PREVIOUS CUSTOMER</div>
                                        </div>
                                    </Col>
                                    <Col className="grid4" lg={2}>
                                        <Col className="wrapGrid4" lg={12}>
                                            <div className="text">Today 10:45 AM</div>
                                            <DropdownButton id="dropdown-basic-button" title="Details">
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </DropdownButton>
                                        </Col>
                                    </Col>
                                    <Col className="grid5" lg={3}>
                                        <Col className="wrapGrid5" lg={12}>
                                            <div className="asking">
                                                <text>Asking Price</text>
                                                <i class="far fa-bookmark"></i>
                                            </div>
                                            <text className="text">Rs.9670</text>
                                            <div className="auction">AUCTION AVAILABLE</div>
                                        </Col>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Col>
                    <Col className="tranding" lg={2}>
                        <Col style={{ height: '90px', marginBottom: '10px', display: 'flex', alignItems: 'center'}} lg={12}>
                            <div style={{backgroundColor:'white',width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center',padding:'12px',borderRadius:'10px'}}>
                                <div className="profile">
                                    <img className="img" src={Profile} />
                                    <text className="text" >Logout</text>
                                </div>
                                <div className="wrapIcon">
                                    <i class="far fa-bell icon"></i>
                                    <i class="fas fa-ellipsis-h icon"></i>
                                </div>
                            </div>
                        </Col>
                        <Col style={{ backgroundColor: 'blue', height: '90px' }} lg={12}>

                        </Col>
                        <Col style={{ backgroundColor: 'yellow', height: '90px' }} lg={12}>

                        </Col>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home