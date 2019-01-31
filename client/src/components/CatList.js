import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCats } from '../actions';
import { Link } from 'react-router-dom';



class CatList extends Component {
  componentDidMount() {
    this.props.fetchCats();
  }

  renderCats() {
    return this.props.cats.map(cat => {
      return (
        
        <div key={cat._id} className="card" style={{ maxWidth: '200px', margin: '20px', textAlign: 'center' }}>
          <Link to={'/cats/'+cat._id}>
            <div className="card-image">
            <img style={{height: '200px', width:'200px'}} src={cat.catImage}/>
          </div>
          <span className="card-title">{cat.name}</span>
          </Link>
        </div>
       
      );
    });
  }

  render() {
    console.log(this.props.cats);
    return (
      <div className="row" style={{display:'flex'}}>
        {this.renderCats()}
        <div className="fixed-action-btn">
        <Link to="/catlist/new" className="btn-floating btn-large red">
          <i className="material-icons">add</i>
        </Link>
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { 
    cats: state.cats.cats
  };
};

export default connect(
  mapStateToProps,
  { fetchCats }
)(CatList);
