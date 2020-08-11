import React, {Component} from 'react'

class Article extends Component{
    constructor(props){
        super(props)
    }
    btnClick = (e)=>[
        this.props.openLink()
    ]
    render(){
        return (
            <div className="card">
                <img className="card-img-top" src={this.props.image} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.description}</p>
                    <a href="#" className="btn">Read On</a>
                </div>
            </div>
        )
    }
}
export default Article