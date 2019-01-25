import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCats } from '../actions';

class CatList extends Component {
  componentDidMount() {
    this.props.fetchCats();
  }

  renderCats() {
    return this.props.cats.map(cat => {
      return (
        <div key={cat._id} className="card" style={{ maxWidth: '200px', margin: '20px', textAlign: 'center' }}>
            <div className="card-image">
            <img style={{height: '200px', width:'200px'}} src={cat.catImage}/>
          </div>
          <span className="card-title">{cat.name}</span>
        </div>
      );
    });
  }

  render() {
    console.log(this.props.cats);
    return (
      <div className="row" style={{display:'flex'}}>
        {this.renderCats()}
      </div>
    );
  }
}

const mapStateToProps = ({ cats }) => {
  return { cats };
};

export default connect(
  mapStateToProps,
  { fetchCats }
)(CatList);
