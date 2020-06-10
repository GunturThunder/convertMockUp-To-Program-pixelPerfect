import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import '../../style/main.scss'
import Logo from '../../img/Logo.png'
import Profile from '../../img/profile.jpg'
import Run from '../../img/iconRun.png'

import SearchHub from '../SearchHub/SearchHub'
import YourProduct from '../YourProduct/YourProduct'
import SellingMode from '../SellingMode/SellingMode'


class Home extends Component {
    state = {
        date: new Date(),
        contentSearch: 1
    }

    contentSelling = () => {
        this.setState({
            contentSearch: 3
        })
    }

    contentYourProduct = () => {
        this.setState({
            contentSearch: 2
        })
    }

    contentSearchHandle = () => {
        this.setState({
            contentSearch: 1
        })
    }

    render() {
        // console.log(this.state.contentSearch)
        const Check = () => {
            if (this.state.contentSearch == 1) {
                return (
                    <SearchHub />
                )
            }
            else if (this.state.contentSearch == 2) {
                return (
                    <YourProduct />
                )
            }
            else if (this.state.contentSearch == 3) {
                return (
                    <SellingMode />
                )
            }
        }
        return (
            <Container fluid>
                <Row className="wrap">
                    <Col className="sidebar" lg={2} >
                        <div className="sidebarWrap">
                            <header>
                                <img src={Logo} />
                                <p className="logoName"><b>Grocery Bazar</b></p>
                            </header>
                            <ul className="sidebarList">
                                <li className="li"><a onClick={this.contentSearchHandle}><i class="fas fa-home icon" />Search Hub</a></li>
                                <li className="li"><a onClick={this.contentYourProduct}><i class="fas fa-briefcase icon" />Your Products</a></li>
                                <li className="li"><a onClick={this.contentSelling} className="button" variant="primary"><i class="fas fa-shopping-cart icon"></i>Selling Mode</a></li>
                                <li className="li"><i class="fas fa-truck icon"></i>Orders </li>
                                <li className="li"><i class="fas fa-comment-alt icon"></i>Messages</li>
                                <li className="li"><i class="fas fa-bookmark icon"></i>Book Marks</li>
                                <li className="li"><i class="fas fa-university icon" />Account</li>
                                <li className="li"><i class="fas fa-info-circle icon"></i>Support</li>
                            </ul>
                        </div>
                    </Col>
                    <Col className="wrapContent" lg={8}>
                        <Check />
                    </Col>
                    <Col className="tranding" lg={2}>
                        <Col style={{ height: '12vh', marginBottom: '10px', display: 'flex', alignItems: 'center', backgroundColor: 'white', borderRadius: '10px', marginTop: '5px', justifyContent: 'space-between' }} lg={12}>
                            {/* <div style={{ backgroundColor: 'white', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', borderRadius: '10px' }}> */}
                            <div className="profile">
                                <img className="img" src={Profile} />
                                <text className="text" >Logout</text>
                            </div>
                            <div className="wrapIcon">
                                <i class="far fa-bell icon"></i>
                                <i class="fas fa-ellipsis-h icon"></i>
                            </div>
                            {/* </div> */}
                        </Col>
                        <Col style={{ backgroundColor: 'white', height: '45vh', marginBottom: '10px', borderRadius: '20px' }} lg={12}>

                        </Col>
                        <Col style={{ height: '37vh', borderRadius: '20px', backgroundColor: 'white' }} lg={12}>
                            <div className="wrapTips">
                                <b className="text">ESSESTIAL TIPS</b>
                                <p className="paragraph">Unless it’s a core competency of your brand, don’t try to be clever in your product description, sales page, or product title. </p>
                            </div>
                            <img className="img" src={Run} />
                        </Col>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home