import React from 'react';

import CategoryList from './categoryList.jsx';
import CategoryForm from './categoryForm.jsx';

class Dashboard extends React.Component {

  render() {
    return <div>
      <h1>Track Your Budget</h1>
      <h2>Create A Category:</h2>
      <CategoryForm buttonText="create"></CategoryForm>
      <CategoryList></CategoryList>
    </div>;
  }
}

export default Dashboard;