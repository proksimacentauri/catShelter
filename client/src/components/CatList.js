import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchCats} from '../actions';


class CatList extends Component {
 componentDidMount()
 {

 }

 renderCats()
 {

 }
 
 render ()
    {
     return (
         <div>
           hello  
           {this.renderCats()}
         </div>
     );
    }
}

const mapStateToProps = ({cats}) =>
{
    return { cats };
}

export default connect(mapStateToProps,{fetchCats})(CatList);