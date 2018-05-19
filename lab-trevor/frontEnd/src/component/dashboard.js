import React from 'react'
import {connect} from 'react-redux';
import {
  catCreate,
  catUpdate,
  catDestroy,
} from '../action/budget-actions';

import CategoryList from './category-list.js'
import CategoryForm from './category-form'

class Dashboard extends React.Component {
  constructor(props){
    super(props);
      
   
  }

 render() {
   console.log('dash props', this.props)
    return <div>
         <h1>{this.props.appName}</h1>
         <CategoryForm createCategory={this.props.catCreate}/>
         <CategoryList categories={this.props.categories} 
                       catUpdate={this.props.catUpdate}
                       catDestroy={this.props.catDestroy} />
    </div>
 }
};

const mapStateToProps = state => ({
  appName: state.budgetReducer.appName,
  categories: state.budgetReducer.categories,
  appstate: state
});


const mapDispatchToProps = (dispatch, getState) => {
  return {
    catCreate: (data) => dispatch(catCreate(data)),
    catUpdate: (data) => dispatch(catUpdate(data)),
    catDestroy: (data) => dispatch(catDestroy(data))
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);