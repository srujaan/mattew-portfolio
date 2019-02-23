---
type: "post"
slug: "learn-the-concepts-of-redux-with-hooks"
date: 2019-02-20
title: "Learn the concepts of Redux with Hooks"
description: "Making use of useReducer to emulate Redux's principles."
---

React 16.8 is out now, and with it, comes Hooks. If you haven't heard, Hooks are a way to add state to functional components, creating much cleaner code.

Let's take a look at an example, here is a simple counter in a class component.

```jsx
import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCounter() {
    this.setState({ count: this.state.count + 1 });
  }

  decrementCounter() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <p>{count}</p>
        <button onClick={() => this.incrementCounter()}>+</button>
        <button onClick={() => this.decrementCounter()}>-</button>
      </div>
    );
  }
}

export default Counter;
```

And here is the same thing with Hooks.

```jsx
import React, { useState } from "react";

const HookCounter = () => {
  const [count, changeCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => changeCount(count + 1)}>+</button>
      <button onClick={() => changeCount(count - 1)}>-</button>
    </div>
  );
};

export default HookCounter;
```

As you can see, `useState` results in much cleaner code.

Now, `useState` is just one of the many new Hooks implemented; a couple of other common ones are `useEffect` (`componentDidMount`, `componentDidUpdate`, `componentWillUnmount` all in one), and `useReducer`, which is like `useState` but works best when you have complex logic.

Today, we'll be working with `useReducer` instead of Redux to build the Todo App that is created in [Redux's tutorial](https://redux.js.org/basics/example). Our app will showcase the principles of Redux without the whole boilerplate that it comes with. We'll use this to learn more about how Redux works with actions and reducers.

So, to start off with, generate the app with `create-react-app` - I prefer yarn, so, do `yarn create react-app todos-with-hooks` to generate the boilerplate. After that, I like to go through and remove all of the css files and the logo, and turn `App.js` into a function component.

```jsx
import React from "react";

const App = () => {
  return (
    <div>
      <h1>Todo List</h1>
    </div>
  );
};

export default App;
```

And then `yarn start` and visit http://localhost:3000

We should be presented with a nice page that simply says Todo App.

Now it's time to set up our reducer.

```jsx
import { useReducer } from "react";

const initialState = () => [];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.todo];
    case "TOGGLE_TODO":
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, completed: true };
        }
        return todo;
      });
    case "REMOVE_TODO":
      return state.filter(todo => !(todo.id === action.id));
    default:
      return state;
  }
};

const useTodoList = () => {
  const [todos, dispatch] = useReducer(reducer, initialState());

  return [todos, dispatch];
};

export default useTodoList;
```

This is our reducer, it gets passed the current state and an action. You can think of the state, reducer and the action like a bank. You can't go in to your bank and just manually adjust your bank account (`state`), you must deposit some money (`action`). The action `{type: 'DEPOSIT_MONEY', amount: 100.00}` would request to deposit $100 into your account, and then it would return the state of your bank account, plus $100 (`reducer`). This way, if you kept a store of all of the transactions on an account, it will add up to the same amount.

This is one of the core concepts behind Redux, we do not mutate the state.

So, a reducer will look at the action and decide what should be done to the state in response. An action looks like: `{type: 'ADD_TODO', todo: {name: 'Todo', completed: false, id: 1}}` and the reducer will always return the state. For example, after we pass that action the state is `[{name: 'Todo', completed: false, id: 1}]`

When a todo is added, since we don't want to mutate state, it returns a new array that consists of the current state with the new todo at the end.

Then, `'TOGGLE_TODO'`, which gets passed in an ID in the action. This action looks like `{type: 'TOGGLE_TODO', id: 1}` and the reducer will search through the current state, find the todo that matches the action.id, and then return the new state, with the todo that matches the action.id toggled. If we pass the above action to the reducer, with our current state, we'll get `[{name: 'Todo', completed: true, id: 1}]`

And finally, `'REMOVE_TODO'` gets passed an ID as well, but this one will simply return the state with the todo matching action.id filtered out. Again, if we pass the action `{type: 'REMOVE_TODO', id: 1}` to our reducer with our state, we'll get `[]` as the new state.

The default needs to just return state, because if it's not a defined action, it doesn't do anything to the state. This leads to a very nicely controlled state that shouldn't have any unexpected side effects.

So, how do we integrate this into our app?

We'll modify our `App.js` to use the `useTodoList` function that we created above.

```jsx
import React from "react";
import useTodoList from "./useTodoList";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const App = () => {
  const [todos, dispatch] = useTodoList();

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo dispatch={dispatch} />
      <TodoList dispatch={dispatch} todos={todos} />
    </div>
  );
};

export default App;
```

With our new `App.js`, we import the `useTodoList` function that we created earlier and two additional components, one to add the todos and the other to list the todos. We use the `useTodoList` hook to get state (list of todos) and the dispatch function.

The dispatch function is where we pass our actions. You call it by using `dispatch({type: 'ADD_TODO, todo: ....})` and it will send the action to the reducer.

We'll see it in action in the `AddTodo` component..

```jsx
import React, { useState } from "react";

let nextTodoId = 0;

const initialState = () => ({ name: "", completed: false, id: nextTodoId });

const AddTodo = ({ dispatch }) => {
  const [state, setState] = useState(initialState());

  const handleChange = e => {
    let input = e.target.value;

    setState(prevState => ({ ...prevState, name: input }));
  };

  const submitTodo = () => {
    dispatch({ type: "ADD_TODO", todo: { ...state, id: nextTodoId++ } });
    setState(initialState());
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={state.name}
        onChange={e => handleChange(e)}
      />

      <button onClick={() => submitTodo()}>Add Todo</button>
    </div>
  );
};

export default AddTodo;
```

There is a lot going on there, so we'll break it down a bit.

We start off by setting up the `nextTodoId` variable, which starts at 0 and we can increment in order to give each todo a unique id. Then we create the `initialState()` which returns a blank todo, which we will want later in order to reset the component's state after submitting the todo.

We need to make use of the `useState` hook here in order to keep track of the input, so we'll pass that initial state to it, which gives us the component state in `state` and a `setState` function to update the component state.

Then comes a basic `handleChange` function and then our `submitTodo` function, which takes the todo in the component's state and submits it to our reducer, and then resets the component's state.

Our reducer only gets passed our action, which tells our reducer to add a todo with the current state of the component. So, just as above, if our reducer's state is `[]` and we add add a todo named 'Create a Todo List" to this form, it will do the following:

`dispatch({ type: 'ADD_TODO', todo: { name: "Create a Todo List", completed: false, id: 1 } })`

and our reducer will process it and return our state to be `[{ name: "Create a Todo List", completed: false, id: 1 }]`.

The rest of the component is pretty self explanatory if you're familiar with React. Moving on to the TodoList component..

```jsx
import React from "react";

const TodoItem = ({ handleRemove, handleClick, completed, name }) => {
  return (
    <li
      onClick={handleClick}
      onDoubleClick={handleRemove}
      style={{
        textDecoration: completed ? "line-through" : "none",
      }}
    >
      {name}
    </li>
  );
};

const TodoList = ({ dispatch, todos }) => {
  const todoList = t =>
    t.map(todo => (
      <TodoItem
        key={todo.id}
        handleClick={() => dispatch({ type: "TOGGLE_TODO", id: todo.id })}
        handleRemove={() => dispatch({ type: "REMOVE_TODO", id: todo.id })}
        {...todo}
      />
    ));
  return (
    <div style={{ paddign: "20px" }}>
      {todos.length > 0 ? todoList(todos) : "No Todos"}
    </div>
  );
};
```

Normally these two components would be in different files, but I put them together in our example here. The TodoItem component is a pretty basic one, so I'm not going to go over that, but the TodoList has some interest. Again, we're dispatching actions when something happens. When a user clicks on the TodoItem, it dispatches the `TOGGLE_TODO` action, and a double click will dispatch the `REMOVE_TODO` action.

Again, our reducer will take in the `{type: 'TOGGLE_TODO', id: 1}` action, and return the new state of `[{ name: "Create a Todo List", completed: true, id: 1 }]`. Same idea with the `REMOVE_TODO` action.

When we refresh the browser, we should be presented with a page that we can add and remove todos!

But what if we want to be able to only see the active todos, or the completed todos? Let's set that up. We'll start with another reducer.

```jsx
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};

const useVisibilityFilter = () => {
  const [filter, changeFilter] = useReducer(reducer, "ALL");

  return [filter, changeFilter];
};

export default useVisibilityFilter;
```

This one will take only one action, the `'SET_VISIBILITY_FILTER'` type and the filter, with an initial state of `'ALL'`. So if we pass in an action `{type: 'SET_VISIBILITY_FILTER', filter: 'ACTIVE'}`, our state will be `'ACTIVE'`. Now, we could just import both the visibility reducer and the todo reducers into the `App.js`, but we're going to do something a little different.

Lets create `useStore.js`

```js
import useTodoList from "./useTodoList";
import useVisibilityFilter from "./useVisibilityFilter";

const useStore = () => {
  const [todos, changeTodos] = useTodoList();
  const [filter, changeFilter] = useVisibilityFilter();

  const state = { todos, filter };

  const reducers = { changeFilter, changeTodos };

  return [state, reducers];
};

export default useStore;
```

`useStore.js` takes in our hooks and outputs them together. In Redux, this would be equivalent to `combineReducers`. This brings us to another principle of Redux: single source of truth. The reason we didn't just import both hooks into the App component is because then we would have two separate states - filter state and todos state. Bringing them together, we can import them like this..

```jsx
import React from "react";
import useStore from "./useStore";

import Filter from "./Filter";
import AddTodo from "./AddTodo";
import TodosList from "./TodoList";

const App = () => {
  const [{ todos, filter }, { changeFilter, changeTodos }] = useStore();
  return (
    <div>
      <h1>Todo List</h1>
      <p>
        Add a todo to the list. Click it to complete. Double click to remove.
      </p>
      <Filter filter={filter} changeFilter={changeFilter} />
      <AddTodo dispatch={changeTodos} />
      <TodosList dispatch={changeTodos} todos={todos} filter={filter} />
    </div>
  );
};

export default App;
```

And then add the `Filter` component

```jsx
import React from "react";

const Filter = ({ filter, changeFilter }) => {
  return (
    <p>
      Current Filter:
      <span
        style={{ fontWeight: filter === "ALL" ? "bold" : "normal" }}
        onClick={() =>
          changeFilter({
            type: "SET_VISIBILITY_FILTER",
            filter: "ALL",
          })
        }
      >
        All
      </span>
      <span
        style={{ fontWeight: filter === "COMPLETED" ? "bold" : "normal" }}
        onClick={() =>
          changeFilter({
            type: "SET_VISIBILITY_FILTER",
            filter: "COMPLETED",
          })
        }
      >
        Completed
      </span>
      <span
        style={{ fontWeight: filter === "ACTIVE" ? "bold" : "normal" }}
        onClick={() =>
          changeFilter({
            type: "SET_VISIBILITY_FILTER",
            filter: "ACTIVE",
          })
        }
      >
        Active
      </span>
    </p>
  );
};

export default Filter;
```

And our new TodoList

```jsx
import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ dispatch, todos, filter }) => {
  const visibleTodos = (list, filter) => {
    switch (filter) {
      case "ALL":
        return list;
      case "COMPLETED":
        return list.filter(t => t.completed);
      case "ACTIVE":
        return list.filter(t => !t.completed);
      default:
        return list;
    }
  };

  const todoList = t =>
    t.map(todo => (
      <TodoItem
        key={todo.id}
        handleClick={() => dispatch({ type: "TOGGLE_TODO", id: todo.id })}
        handleRemove={() => dispatch({ type: "REMOVE_TODO", id: todo.id })}
        {...todo}
      />
    ));
  return (
    <div style={{ padding: "20px" }}>
      {todos.length > 0 ? todoList(visibleTodos(todos, filter)) : "No Todos"}
    </div>
  );
};

export default TodoList;
```

And now, we can add, complete, and remove todos and then filter those todos as well. We could make this better using a React Context so that we don't have to push the props down the tree, but this is just a very basic concept. I hope that you have a bit better understanding of where actions and reducers come into play in Redux and why it works the way it does.
