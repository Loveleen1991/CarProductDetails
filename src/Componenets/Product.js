import React, { Component } from "react"
import CarItem from './CarItem'
import chevron from '../images/chevron-circled.svg';
import './Product.css';


class Product extends Component{
  constructor(props){
      super(props);
      this.state={
          carsData:[],
          loadInitialData:[],
          currentIndex:4,
          value:"",
          remainingFilterDataLen:0
      }
  }
  getData=()=>{
    fetch('api/cars.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    ).then(function(response){
        return response.json();
      })
      .then((data)=>{
          console.log(data)
          this.setState({carsData:data})
          this.loadInitialData(0,this.state.currentIndex,data)
      });
  
  }
  loadInitialData=(start,end,data)=>{
    if(this.state.value == ""){
      let initialdata = data.slice(start,end)
      this.setState({loadInitialData:initialdata})
    }else{
      let type =  this.state.value.toLowerCase()
      let data1 = this.state.carsData.filter((item)=>item.bodyType == type)
      let initialdata = data1.slice(start,end)
      let rem = data1.length - end
      this.setState({loadInitialData:initialdata , remainingFilterDataLen:rem})
    }
    
  }
  componentDidMount(){
    this.getData()
    
  }
  goToPrevSlide=()=>{
    const {currentIndex} = this.state;
    const newPointer = currentIndex - 4;
    this.loadInitialData(newPointer-4,newPointer,this.state.carsData)
    this.setState({currentIndex: newPointer});
  }
  goToNextSlide = () => {
    const {currentIndex} = this.state;
    const newPointer = currentIndex + 4;
    this.loadInitialData(currentIndex,newPointer,this.state.carsData)
    this.setState({currentIndex: newPointer});
    
  }
  handleonChange = (e)=>{
    this.setState({ value:e.target.value})
  }
  filterData = ()=>{
   const {currentIndex} = this.state;
   this.loadInitialData(0,currentIndex,this.state.carsData)
   this.setState({currentIndex: 4});
 
  }

  render(){
      console.log(this.state.loadInitialData)
      const enable = ((this.state.carsData.length - this.state.currentIndex <= 0)  || (this.state.remainingFilterDataLen <= 0 && this.state.value != "")) ? false :true
      const enableLeftArrow = this.state.currentIndex-4 <= 0 ? false :true
      const imagecss = enable?"rightArrow":"rightArrowDisable"
      const leftimagecss = enableLeftArrow?"leftArrow":"leftArrowDisable"
      return(
          <div className="mainContainer">
            <div className="searchBox">
              <input type="text" value={this.state.value} onChange={this.handleonChange}/>
              <button onClick={this.filterData}>Filter</button>
            </div>
          <div className="carContainer">
            
             {
                this.state.loadInitialData.length >0 ? (
                  this.state.loadInitialData.map((item)=>(
                    <CarItem item={item}/>
                   ))
                ):(<div> No Records Found</div>)
                    
                  
             } 
          </div>
          {
          this.state.loadInitialData.length >0 ?(
            <div className="arrow">
               <img id={leftimagecss} src={chevron} alt="Next arrow" height="30px" width="30px" onClick={this.goToPrevSlide}/>
               <img id={imagecss}src={chevron}  alt="Prev arrow" height="30px" width="30px" onClick={this.goToNextSlide} />
             </div>
          ):(<div></div>)

          }
             
          </div>
      )
  }
}

export default Product;