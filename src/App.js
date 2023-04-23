
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Login from './Components/Login';
import SignUp from './Components/SignUp'
import AddBook from './Components/AddBook';
import EditBook from './Components/EditBook';
import BookList from './Components/BookList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
      
          <Route path='/' element={<SignUp/>}/>
          <Route path='/login' element={<Login/>}/>

          <Route path="/booklist" element={<BookList/>}/>

          <Route path='/addbook' element={<AddBook/>}/>
          <Route path='/editbook' element={<EditBook/>}/>


      </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
