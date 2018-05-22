# React Redux Budget Tracker App

**Author** : Rafael Malave

## Overview

Example app that app built with React and Redux that lets users add categories to a list with a form.

## Getting started

Clone this repository to your local computer. Run `npm install` to install the necessary packages. Start the server with npm run watch on your local machine.

#### App Features
##### Category
* in this app a category contains the following properties
* `id` a uuid
* `timestamp` a date from when the category was created
* `title` a string that is the name of the category
* `budget` a number that is the total amount of $ in the category
* fell free to add more to your categories if you want

##### expense
* in this app a expense should contain at least the following properties
  * `id` a uuid
  * `categoryID` an id that corresponds to an existing category
  * `timestamp` a date from when the category was created
  * `name` a string that is the name of the category
  * `price` a number that is the total amount of $ in the category
  * fell free to add more to your expense if you want

##### Redux
###### Category Reducer
* This reducer supports the following interactions
  * `CATEGORY_CREATE`
  * `CATEGORY_UPDATE`
  * `CATEGORY_DESTORY`

###### Expense reducer
* this reducer supports the following interactions
  * `EXPENSE_CREATE` -- store an expense
  * `EXPENSE_UPDATE` -- update an existing expense
  * `EXPENSE_DELETE` -- delete an existing expense
* if you need others feel free to add them

###### Store
* `lib/store.js` exports a function that returns a new redux store from your category reducer

##### Component Structure
```
App
  Provider
    BrowserRouter
      Route / Dashboard
        CategoryForm -- for creating categorys
        [Category Item] -- list of Category items
           CategoryForm  -- for updating categorys
           ExpenseForm -- for creating expenses
           [ExpenseItem]  -- list of expense items
              ExpenseForm -- for updating an expense
```

###### App Component
The App component sets up the Provider for the redux store and the Router.

###### Dashboard Component
*  Displayed on the `/` route
*  Uses react-redux's `connect` to map state and dispatchable methods to props
*  Displays a `CategoryForm` for adding categories to the app state
*  Displays a `CategoryItem` for each category in the app state

###### CategoryForm Component
*  expect an `onComplete` prop to be a function
*  `onComplete` gets invoked with the CategoryForms State when the form is submited
*  Expects a `buttonText` prop to be configure the submit buttons text
*  Supports and optional `category` prop that will initialize the state of the form

###### CategoryItem Component
*  Displays the category's name and budget
*  Displays a delete button
* `onClick` the category is removed from the application state
*  Displays a CategoryForm  

##### ExpenseForm Component
* should support an `expense` prop that will both set the initial form state, and update the state in the hook on `componentWillReceiveProps()`
* A `buttonText` prop configures the submit button's text

##### ExpenseItem Component
* Creates a new expense `onClick`
* Displays the `name` and `price` of the component
* Displays an ExpenseForm that enables the user to update the expense in the app state

##### Form Validation Middleware
* Title and number fields for category should not be empty
* Title and price fields for expense should not be empty

## Technologies

- Nodejs
- Express
- npm
- MongoDB
