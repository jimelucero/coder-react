import React, { Component } from 'react'
import Card from './CardUI'

// import de imagenes
import img1 from "../assets/mix1.jpg"
import img2 from "../assets/mix2.jpg"
import img3 from "../assets/mix3.jpg"


class Cards extends Component {
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={img1} title="Mix n1" /> 
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img2} title="Mix n2" />
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img3} title="Mix n3" />
                    </div>

                </div>
            </div>
        )
    }
}

export default Cards;