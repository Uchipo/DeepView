import Home from 'pages/Home';
import Error from 'components/common/Error';
import React from 'react';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Learning from 'pages/Leangin';
import Layout from 'components/common/Layout';
import NoteDetail from 'pages/NoteDetail';
import Quiz from 'pages/Quizzes';

const routeList = [
  {
    path: "/",
    element: <Home/>,
    errorElement: <Error/>
  },{
    path: "/learn",
    element: <Learning/>,
    errorElement: <Error/>
  },{
    path: "/notes/:note_id",
    element: <NoteDetail/>,
    errorElement: <Error/>
  },{
    path: "/quizzes/:quiz_id",
    element: <Quiz/>,
    errorElement: <Error/>
  }
]
const newRouteList = routeList.map((item)=>{
  return {
    ...item,
    element: <Layout>{item.element}</Layout>,
    errorElement: <Error/>
  }
})
const router = createBrowserRouter(newRouteList)


export default function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}
