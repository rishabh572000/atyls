import React from 'react';
import './styles/App.scss';
import Login from './pages/Login';
import Comment from './pages/Comment';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignUp from './pages/SignUp';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/comment",
    element: <Comment />,
  },
]);


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />

      {/* <Comment /> */}
    </div>
  );
}

export default App;
