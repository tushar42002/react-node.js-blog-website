import React, { useState } from 'react'
import ManageBlogs from './ManageBlogs'
import ManageUser from './ManageUser'
import ManageCategories from './ManageCategories'
import { Link } from 'react-router-dom'

const Dashboard = () => {

    const [manage, setManage] = useState('blog')

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
                            <Link to="/dashboard" className={`${manage === 'blog'? 'active' : ''}`} onClick={() => setManage('blog')}  ><i className="fa fa-pager"></i>
                                <h5>Manage Blog</h5>
                            </Link>
                        </li>
                        <li>
                            <Link to="/signup"><i className="fas fa-user-plus"></i>
                                <h5>Add User</h5>
                            </Link>
                        </li>
                        <li>
                            <a onClick={() => setManage('user')} className={`${manage === 'user'? 'active' : ''}`}><i className="fas fa-user-group"></i>
                                <h5>manage users</h5>
                            </a>
                        </li>
                        <li>
                            <Link to="/addCategory"><i className="fas fa-edit"></i>
                                <h5>Add Category</h5>
                            </Link>
                        </li>
                        <li>
                            <a onClick={() => setManage('category')} className={`${manage === 'category'? 'active' : ''}`}><i className="fas fa-list-ul"></i>
                                <h5>Manage Categories</h5>
                            </a>
                        </li>


                    </ul>
                </aside>



                {
                    manage === 'user' ? <ManageUser /> : manage === 'category' ? <ManageCategories />  : <ManageBlogs />
                }


            </div>
        </section>
    )
}

export default Dashboard