const validateCategory = store => next => action => {
  const isCategory = action.type && action.type.startsWith('CATEGORY') && !action.type.startsWith('CATEGORY_INFLATE');
    if (isCategory) {
      try {
        const category = action.payload;
        console.log(category);
        const notValid = !category.title || !category.number

        if (notValid) {
          throw new Error('VALIDATION ERROR: category must include title and amount');
        } else {
          return next(action);
        }

      } catch (err) {
        console.error(err);
    }
  } else {
    return next(action);
  }
}

export default validateCategory;
