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
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { auth, db } from "./firebase/firebase-config";

function App() {
  const [searchList, setSearchList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("hi");
  const [fictionBooksArray, setFictionBooksArray] = useState([]);
  const [categoriesArray, setCategoriesArray] = useState([]);
  const [subject, setSubject] = useState("Autobiography");
  const [hydratedSubject, setHydratedSubject] = useState("");
  const [bookmarkedCards, setBookMarkedCards] = useState([]);
  const [hydratedBookmarkedCards, setHydratedBookmarkedCards] = useState([]);
  const [isAuth, setIsAuth] = useState(false);
  const [apiLoading, setApiLoading] = useState(true);
  const [maxResults, setMaxResults] = useState(12);
  const [visibleCategoryBooks, setVisibleCategoryBooks] = useState(4);
  const [bookList, setBookList] = useState();

  let currentUserId = auth.currentUser && auth.currentUser.uid;

  //Get Trending Books

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

  //Getting categories
  useEffect(() => {
    Axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=business+subject:${subject}
      &maxResults=35&key=AIzaSyDDwLWhfPGhaLnooQRSNrMSI5qVh3QUEzU`
    )
      .then((res) => {
        setCategoriesArray(res.data.items);
      })
      .catch((err) => console.log(err));
    // setHydratedSubject(subject);
  }, [subject]);

  //Get search cards
  useEffect(() => {
    Axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=${maxResults}&key=AIzaSyDDwLWhfPGhaLnooQRSNrMSI5qVh3QUEzU`
    )
      .then((res) => {
        setSearchList(res.data.items);
      })
      .catch((err) => console.log(err));
  }, [searchTerm, maxResults]);

  useEffect(() => {
    //Get Bookmarks
    const colRef = collection(db, "bookmarks");
    // queries

    if (auth.currentUser?.uid) {
      const q = query(colRef, where("user", "==", auth.currentUser?.uid));
      // realtime collection data
      onSnapshot(q, (snapshot) => {
        let books = [];
        snapshot.docs.forEach((doc) => {
          books.push({ ...doc.data(), id: doc.id });
        });
        setBookList(books);
      });
    }

    setTimeout(() => {
      const q = query(colRef, where("user", "==", auth.currentUser?.uid));
      // realtime collection data
      onSnapshot(q, (snapshot) => {
        let books = [];
        snapshot.docs.forEach((doc) => {
          books.push({ ...doc.data(), id: doc.id });
        });
        setBookList(books);
      });
    }, 3000);
  }, [apiLoading, auth?.currentUser?.uid]);

  //Loading Screen
  if (apiLoading) {
    return <LoadingPage />;
  }

  console.log(subject);

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
        bookList,
        setBookList,
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
