import {Route, Routes} from "react-router-dom";
import BooksPage from "./pages/books-page";
import ProfilePage from "./pages/profile-page";

const Router = () => {
  return (
    <div id='app'>
      <main>
        <Routes>
          <Route path='/books' element={<BooksPage/>}/>
          <Route path='/profile' element={<ProfilePage/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default Router;