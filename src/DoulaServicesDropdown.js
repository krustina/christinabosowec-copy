import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import './App.css';



class DoulaServicesDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdown: false,
            servicetitle: this.props.service.servicetitle,
            servicedesc: this.props.service.servicedesc,
            package1title: this.props.service.package1title,
            package1price: this.props.service.package1price,
            package1pricedetails: this.props.service.package1pricedetails,
            package1desc: this.props.service.package1desc,
            package2title: this.props.service.package2title,
            package2price: this.props.service.package2price,
            package2pricedetails: this.props.service.package2pricedetails,
            package2desc: this.props.service.package2desc
        };
        this.handleDropdown.bind(this);
    }

    handleDropdown(e) {
        e.preventDefault()
        if (this.state.dropdown === false) {
            this.setState({
                dropdown: true
            })
        }
        if (this.state.dropdown === true) {
            this.setState({
                dropdown: false
            })

        }
    }
    render() {
        if (this.state.dropdown === false) {
            return (
                <div className='doula-services-sub-container'>
                    <div className='doula-service'>
                        <h1>{this.state.servicetitle}</h1>

                        <h2>{this.state.servicedesc}</h2>
                        <a onClick={this.handleDropdown.bind(this)}>
                            <h2>See package details +</h2>
                        </a>
                    </div>
                    <img className='curved-line' src={require('./images/curve.png')} />
                </div>
            )
        }
        if (this.state.dropdown === true) {
            return (
                <div className='doula-services-sub-container'>
                    <div className='doula-service'>
                        <h1>{this.state.servicetitle}</h1>

                        <h2>{this.state.servicedesc}</h2>
                        <a onClick={this.handleDropdown.bind(this)}>
                            <h2 className='active-toolbar'>Hide package details -</h2>
                        </a>
                        <div className='doula-service-details'>
                            <div className='doula-package'>
                                <b><h2>{this.state.package1title}&nbsp;{this.state.package1price}</h2></b>
                                <ul>
                                    {this.state.package1desc.map((desc, i) =>
                                        <li key={i}>{desc}</li>)}
                                </ul>
                                <ul>
                                    {this.state.package1pricedetails.map((price, i) =>
                                        <li key={i}>{price}</li>)}
                                </ul>
                            </div>
                            <div className='doula-package'>
                                <h2>{this.state.package2title}&nbsp;{this.state.package2price}</h2>
                                <ul>
                                    {this.state.package2desc.map((desc, i) =>
                                        <li key={i}>{desc}</li>)}
                                </ul>
                                <ul>
                                    {this.state.package2pricedetails.map((price, i) =>
                                        <li key={i}>{price}</li>)}
                                </ul>
                            </div>

                        </div>
                    </div>
                    <img className='curved-line' src={require('./images/curve.png')} />
                </div >
            )
        }
    }
}

export default DoulaServicesDropdown;