import React, { useContext, useEffect } from 'react'
import { DataContext } from '../../context/DataProvider';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Blog = () => {

  const location = useLocation();

  const context = useContext(DataContext);
  const { blogs, getBlogs, url } = context;

  useEffect(() => {
    getBlogs();
  }, [])

  const imageUrl = url;


  return (

    <>

      {location.pathname === '/blog' ?
        <section className="search_bar">
          <form className="container search_bar-container" action="search-result.php" method="POST">
            <div>
              <i className="fas fa-search"></i>
              <input type="search" name="search" placeholder="Search" />
            </div>
            <button type="submit" className="btn">Go</button>
          </form>
        </section>
        : null}


      <section className="posts">
        <div className="container posts_container">

          {blogs.map((item) => {
            let contant = item.post_contant;
            return (
              <article key={item.id} className="post">
                <div className="post_thumbnail">
                  <img src={`${imageUrl}/uploads/${item.post_image}`} alt="" />
                </div>
                <div className="post_info">
                  <Link className="category_button">{item.category}</Link>
                  <h3 className="post_title"><Link to={`/singleblog/${item.id}`}>{item.post_title}</Link></h3>
                  <p className="post_body"> {contant.slice(0, 400)} </p>
                  <div className="post_author">
                    <div className="post_author-avatar">
                      <img src={`${imageUrl}/uploads/${item.post_image}`} alt='' />
                    </div>
                    <div className="post_author-info">
                      {/* <h5>By: Tushar</h5> */}
                      <small>{item.date.slice(0, 10)}</small>
                    </div>
                  </div>
                </div>
              </article>
            )
          })
          }

        </div>
      </section>

    </>
  )
}

export default Blog