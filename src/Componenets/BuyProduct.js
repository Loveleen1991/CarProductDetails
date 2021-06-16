import React , { Component} from "react";

class BuyProduct extends Component{
    render(){
        const {state}=this.props.location
        return(
            <div style={{display:"flex",flexDirection:"column" , textAlign:"left"}}>
                <h3>Shop Product Page</h3>
                <span><b>Model Id:</b> {this.props.match.params.id}</span>
                <span><b>Model Name: </b>{state.modelName}</span>
                <span><b>Model Type:</b> {state.modelType}</span>
            </div>
        )
    }
}

export default BuyProduct;