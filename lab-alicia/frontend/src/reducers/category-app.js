import {
  CATEGORY_INFLATE,
  CATEGORY_CREATE,
  CATEGORY_UPDATE,
  CATEGORY_DESTROY,
} from '../actions/category-actions.js';
import uuidv4 from 'uuid/v4';

const initialState = {
  categories: [],
};

const categoryReducer = (state = initialState, action) => {
  let newState = {};
  let categories = [];
  
  if (state === undefined) {
    return initialState;
  }

  switch (action.type) {
  case CATEGORY_INFLATE:
    let newCategories = action.category.map(category => {
      return new Category(category.name, category.budget, category.id, category.timestamp)
    });
    Object.assign(newState, state, {categories: newCategories});
    return newState;

  case CATEGORY_CREATE:
    action.payload.id = uuidv4();
    newCategories = state.categories.concat(action.payload);
    return {...state, categories: newCategories};

  case CATEGORY_UPDATE:
    categories = state.categories.map(category => {
      if(category.id === action.payload.id) {
        return { ...category, ...action.payload };
      }
      return category;
    });
    return { ...state, categories };

  case CATEGORY_DESTROY:
    categories = state.categories.filter(category => {
      return action.payload.id !== category.id;
    });
    return {...state, categories};

  default: 
    return state;
  }
};

export default categoryReducer;