import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Dashboard from "./pages/dashboard/Dashboard";
import SignIn from "./pages/signIn/SignIn";
import Axios from "axios";
import { AppContext } from "./helper/Context";
import Notifications from "./pages/notifications/Notifications";
import Bookmarks from "./pages/bookmarks/Bookmarks";
import Explore from "./pages/explore/Explore";
import LoadingPage from "./pages/loading-page/LoadingPage";
import Timeline from "./pages/timeline/Timeline";

function App() {
  const [searchList, setSearchList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [fictionBooksArray, setFictionBooksArray] = useState([]);
  const [categoriesArray, setCategoriesArray] = useState([]);
  const [subject, setSubject] = useState("Adult");
  const [hydratedSubject, setHydratedSubject] = useState("");
  const [bookmarkedCards, setBookMarkedCards] = useState([]);
  const [hydratedBookmarkedCards, setHydratedBookmarkedCards] = useState([]);
  const [isAuth, setIsAuth] = useState(false);
  const [apiLoading, setApiLoading] = useState(true);
  const [maxResults, setMaxResults] = useState(12);
  const [visibleCategoryBooks, setVisibleCategoryBooks] = useState(4);

  useEffect(() => {
    Axios.get(
      `https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=HlIlRG6w4zrCyRRzPVrreAQPyH3hxMHq`
    )
      .then((res) => {
        setFictionBooksArray(res.data.results.lists[2].books);
        setApiLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    Axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=business+subject:${subject}
      &maxResults=35&key=AIzaSyDDwLWhfPGhaLnooQRSNrMSI5qVh3QUEzU`
    )
      .then((res) => {
        setCategoriesArray(res.data.items);
      })
      .catch();
    setHydratedSubject(subject);
  }, [subject]);

  useEffect(() => {
    Axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=${maxResults}&key=AIzaSyDDwLWhfPGhaLnooQRSNrMSI5qVh3QUEzU`
    )
      .then((res) => {
        setSearchList(res.data.items);
      })
      .catch();
  }, [searchTerm, maxResults]);

  if (apiLoading) {
    return <LoadingPage />;
  }

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{
        fictionBooksArray,
        categoriesArray,
        setSubject,
        subject,
        hydratedSubject,
        bookmarkedCards,
        setBookMarkedCards,
        hydratedBookmarkedCards,
        setHydratedBookmarkedCards,
        isAuth,
        setIsAuth,
        searchList,
        setSearchList,
        searchTerm,
        setSearchTerm,
        maxResults,
        setMaxResults,
        visibleCategoryBooks,
        setVisibleCategoryBooks,
      }}
    >
      <div className="App">
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/timeline" element={<Timeline />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
