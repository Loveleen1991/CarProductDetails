import React , { Component } from "react";
//import {useParams} from "react-router-dom"

/* const ProductDetails=()=>{
    const {id} = useParams()
    return(
        <div>
          { id}
        </div>
    )
} */

     
 class ProductDetails extends Component{
     render(){
         const {state}=this.props.location
         return(
             <div style={{display:"flex",flexDirection:"column" , textAlign:"left"}}>
                 <h3>Car Details:</h3>
                 <span><b>Model Id:</b> {this.props.match.params.id}</span>
                 <span><b>Model Name: </b>{state.modelName}</span>
                 <span><b>Model Type:</b> {state.modelType}</span>
             </div>
         )
     }
 }  
        
    


export default ProductDetails;