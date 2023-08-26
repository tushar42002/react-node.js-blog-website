import React, { useContext, useEffect, useState } from 'react'
import ManageBlogs from './ManageBlogs'
import ManageUser from './ManageUser'
import ManageCategories from './ManageCategories'
import { Link } from 'react-router-dom'
import { DataContext } from '../../context/DataProvider'

const Dashboard = () => {

    const context = useContext(DataContext);

    const { isLogin, navigate } = context;

    const [isAdmin, setIsadmin] =  useState(null);

    const [userLogin, setUserLogin] = useState();

    useEffect(() => {
        
        let user  = JSON.parse(sessionStorage.getItem('user'));

        setIsadmin(user === null ? null :user.is_admin)

        setUserLogin(!JSON.parse(sessionStorage.getItem('login')) ? false:JSON.parse(sessionStorage.getItem('login')));

    }, [isLogin])


    const [manage, setManage] = useState('blog');

    return (
        <section className="dashboard">
            <div className="container dashboard_container">
                <button id="show_sidebar-btn" className="sidebar_toggle"><i className="fas fa-angle-right"></i></button>
                <button id="hide_sidebar-btn" className="sidebar_toggle"><i className="fas fa-angle-left"></i></button>
                <aside>
                    <ul>
                        <li>
                            <Link to="/addBlog"><i className="fas fa-pen"></i>
                                <h5>Add Blog</h5>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard" className={`${manage === 'blog' ? 'active' : ''}`} onClick={() => setManage('blog')}  ><i className="fa fa-pager"></i>
                                <h5>Manage Blog</h5>
                            </Link>
                        </li>
                        {

                            isAdmin === 1 ?
                              <>  <li>
                                    <Link to="/signup"><i className="fas fa-user-plus"></i>
                                        <h5>Add User</h5>
                                    </Link>
                                </li>
                                <li>
                                    <a onClick={() => setManage('user')} className={`${manage === 'user' ? 'active' : ''}`}><i className="fas fa-user-group"></i>
                                        <h5>manage users</h5>
                                    </a>
                                </li>
                                <li>
                                    <Link to="/addCategory"><i className="fas fa-edit"></i>
                                        <h5>Add Category</h5>
                                    </Link>
                                </li>
                                <li>
                                    <a onClick={() => setManage('category')} className={`${manage === 'category' ? 'active' : ''}`}><i className="fas fa-list-ul"></i>
                                        <h5>Manage Categories</h5>
                                    </a>
                                </li>
                                </> : null}



                    </ul>
                </aside>



                {
                    manage === 'user' ? <ManageUser /> : manage === 'category' ? <ManageCategories /> : <ManageBlogs />
                }


            </div>
        </section>
    )
}

export default Dashboard