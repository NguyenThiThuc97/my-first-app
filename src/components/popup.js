import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import {TransitionGroup, CSSTransition} from 'react-transition-group'

class Popup extends Component {

    constructor(props){
        super(props)
        this.state = {
            message_staff_all : [],
            message_cus_all : [],
            message_cus : ""
        }
    }

    addCusMess = () => {
        // this.state.message_cus_all.push(this.state.message_cus)
        // this.showCusMess(this.state.message_cus)
        var a = this.state.message_cus
        this.setState({
            message_cus_all : this.state.message_cus_all.concat({id : this.state.message_cus_all.length, mess : a}),
            message_cus : ""
        })
        console.log(this.state.message_cus_all)
    }

    showCusMess = () => {
        // var allCusMess = this.state.message_cus_all
        // var result = null
        // if( allCusMess.length > 0)
        // {
        //     result = allCusMess.map((cusMess, index) => {
        //         console.log(cusMess, index)
        //         // return (
        //         //     <div className="row" key = {index}>
        //         //         <div className="col-xs-10 col-sm-10 col-lg-10 mess-customer">{cusMess}</div>
        //         //     </div> 
        //         // )
        //     })
        // }
        // return result;
        // console.log(this.state.message_cus_all)
    }

    handleChange = (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    render() {     
        return (
            <div className="form-popup">
                <form className="form-container">
                    <div className="header">
                    <b>staff</b>
                        <i className="fas fa-times-circle btn-close" onClick = {this.props.onClose}></i>
                    </div>
                    <div className="content">
                        <div className="row">
                            <div className="col-xs-10 col-sm-10 col-lg-10 mess-staff">dai hoc su pham ki thuat</div>
                        </div>
                        {/* <div className="row">
                            <div className="col-xs-10 col-sm-10 col-lg-10 mess-customer">hihi</div>
                        </div> */}
                            {/* {this.state.message_cus_all ? this.state.message_cus_all.map(function(d, idx){
                                return (<li key={idx}>{d}</li>)
                            }) : <div></div>} */}
                            <div className="row">
                                {this.state.message_cus_all.map((messCus, index) => 
                                <div className="col-xs-10 col-sm-10 col-lg-10 mess-customer"  key = {index} >{messCus}</div>
                                )}
                            </div>
                    </div>
                    <div className="footer">
                        <textarea rows="2" cols="30" value = {this.state.message_cus} name = "message_cus" onChange = {this.handleChange}></textarea>
                        <i className="fas fa-chevron-right btn-send-mess" onClick = {this.addCusMess}></i>
                    </div>    
                        {this.props.children}
                </form>
            </div>
        );
    }
}

export default Popup;