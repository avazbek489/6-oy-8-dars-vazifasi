import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout.jsx";
import UserList from "./components/UserList.jsx";
import AddBook from "./components/AddBook.jsx";
import Weather from "./components/Weather.jsx";
import JobSearch from "./components/JobSearch.jsx";
import MovieSearch from "./components/MovieSearch.jsx";
import Home from "./components/Home.jsx";
import "./App.css";

function App() {
  return (
    <div className="">
      <Routes>
        <Route
          index
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        ></Route>
        <Route
          path="/users"
          element={
            <MainLayout>
              <UserList />
            </MainLayout>
          }
        />
        <Route
          path="/books"
          element={
            <MainLayout>
              <AddBook />
            </MainLayout>
          }
        />
        <Route
          path="/weather"
          element={
            <MainLayout>
              <Weather />
            </MainLayout>
          }
        />
        <Route
          path="/jobs"
          element={
            <MainLayout>
              <JobSearch />
            </MainLayout>
          }
        />
        <Route
          path="/movies"
          element={
            <MainLayout>
              <MovieSearch />
            </MainLayout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
