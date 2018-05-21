export const CATEGORY_CREATE = 'CATEGORY_CREATE';
export const CATEGORY_UPDATE = 'CATEGORY_UPDATE';
export const CATEGORY_DESTROY = 'CATEGORY_DESTROY';
export const CATEGORY_INFLATE = 'CATEGORY_DATA_INFLATE';

export const categoryCreate = category => {
  return {type: CATEGORY_CREATE, payload: category};
};

export const categoryUpdate = category => {
  console.log('category', category);
  return {type: CATEGORY_UPDATE, payload: category};
};

export const categoryDestroy = categoryId => {
  return {type: CATEGORY_DESTROY, payload: {id: categoryId}};
};

export const categoryInflate = category => {
  return {type: CATEGORY_INFLATE, payload: category};
};