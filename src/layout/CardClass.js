import { Component } from "react";
class CardClass extends Component{
    render(){
        return(
            <>
            <div className="card mt-4">
                <img src={this.props.image}/>
                <div className="card-body">
                    <h3>{this.props.title}</h3>
                    <p>{this.props.para}</p>
                </div>
            </div>
            </>
        )
    }
}

export default CardClass