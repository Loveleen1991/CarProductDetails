import React , { Component} from "react";
import { Link } from "react-router-dom";
import chevronsmall from "../images/chevron-small.svg";
import './CarItem.css';

class CarItem extends Component{

    render(){
        const {item}=this.props
        return(
            <div className="carItem">
                <div className="bodyType">{item.bodyType}</div>
                    <div className="modelName"><b>{item.modelName}</b><span className="modelType">{item.modelType}</span></div>
                <div className="carImage"><img id="carImage"src={item.imageUrl} alt="Cars"/></div>
                <div>
                    <span style={{position:"relative",right:"10%"}}>
                        <Link to={{pathname:`/learn/${item.id}`, state:item}}><b>LEARN</b></Link>
                        <img id="anglearrow" src={chevronsmall} alt="arrow" height="12px" width="12px"/>
                    </span>
                    <span style={{position:"relative",left:"10%"}}>
                        <Link to={{pathname:`/shop/${item.id}` ,state:item}}><b>SHOP</b></Link>
                        <img id="anglearrow" src={chevronsmall} alt="arrow" height="12px" width="12px"/>
                    </span>
                   
                </div>
                {this.props.children}
            </div>
        )
    }
}

export default CarItem;