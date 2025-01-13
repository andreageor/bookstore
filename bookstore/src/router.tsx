import {Route, Routes} from "react-router-dom";
import BooksPage from "./pages/books-page";
import ProfilePage from "./pages/profile-page";
import PageLayout from "./components/page-layout";

const Router = () => {
  return (
    <PageLayout>
      <div id='app'>
        <main>
          <Routes>
            <Route path='/books' element={<BooksPage/>}/>
            <Route path='/profile' element={<ProfilePage/>}/>
          </Routes>
        </main>
      </div>
    </PageLayout>
  )
}

export default Router;