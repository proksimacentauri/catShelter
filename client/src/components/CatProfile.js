import React, {Component} from 'react';
import { fetchCat } from '../actions';
import {connect} from 'react-redux';


class CatProfile extends Component {
    componentDidMount()
    {
        console.log()
        this.props.fetchCat(this.props.match.params.id);
          console.log(this.props.cat);
    }

    renderCat()
    {
        return this.props.cat ? (
        
            <div key={this.props.cat._id}>
            <div >{this.props.cat.name}</div>
             <img style={{height: '200px', width:'200px'}} src={"/"+this.props.cat.catImage}/>
              <div>age:{this.props.cat.age}</div>
              <div>healthy:{this.props.cat.healthy}</div>
              <div>behaviour:{this.props.cat.behaviour}</div>
              <div>weight:{this.props.cat.weight}</div>
            </div>
           
          ) : null;
    }
 

    render() {
        console.log(this.props.cat);
        return (
        <div>
            {this.renderCat()}
            <button>adopt</button>
            <button>inquire</button>
        </div>
        );
    }
}

const mapStateToProps = state => {
    return { 
        cat: state.cats.cat
     };
  };

  
export default connect(mapStateToProps,{fetchCat})(CatProfile);