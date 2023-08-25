
import './App.css';

import DataProvider, { DataContext } from './context/DataProvider';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//components
import Login from './component/account/Login';
import Home from './component/home/Home';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import About from './component/home/About';
import Service from './component/home/Service';
import Contact from './component/home/Contact';
import Dashboard from './component/dashboard/Dashboard';
import AddBlog from './component/dashboard/AddBlog';
import AddCategory from './component/dashboard/AddCategory';
import Blogs from './component/blog/Blogs';
import Signup from './component/account/Signup';
import SingleBlog from './component/blog/SingleBlog';
import EditBlog from './component/blog/EditBlog';


function App() {
  return (
    <>
      <Router>
        <DataProvider>
          <Navbar />
          <div>
            <Routes>
              <Route path='/' element={<Home />} />

              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />

              <Route path='/blog' element={<Blogs />} />
              <Route path='/singleblog/:id' element={<SingleBlog />} />

              <Route path='/about' element={<About />} />
              <Route path='/service' element={<Service />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/dashboard' element={<Dashboard />} />

              <Route path='/addBlog' element={<AddBlog />} />
              <Route path='/updatepost/:id' element={<EditBlog />} />

              <Route path='/addCategory' element={<AddCategory />} />
              <Route path='/updateCategory' element={<AddCategory />} />
            </Routes>
          </div>
          <Footer />
        </DataProvider>
      </Router>
    </>
  );
}

export default App;
