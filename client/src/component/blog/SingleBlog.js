import React, { useContext, useEffect } from 'react'
import { DataContext } from '../../context/DataProvider';
import { useParams, useSearchParams, Link } from 'react-router-dom';

function SingleBlog() {


  const context = useContext(DataContext);
  const { blogs2, getBlogs2, url } = context;

  const blogId = useParams();
  // const [blogSearch] = useSearchParams();

  // const blogQuery = `?category=${blogSearch.get('category')}`;


  useEffect(() => {


    getBlogs2(blogId.id);

  }, [])

  const imageUrl = url;



  return (
    <section className="singlepost">
      {
        blogs2.length > 0 ?
          <div className="container singlepost_container">
            <h2>{blogs2[0].post_title}</h2>
            <div className="post_author">
              <div className="post_author-avatar">
                <img src={`${imageUrl}/uploads/${blogs2[0].avatar}`} alt='' />
              </div>
              <div className="post_author-info">
                <h5>By: {blogs2[0].email}r</h5>
                <small>{blogs2[0].date.slice(0, 10)}</small>
              </div>
            </div>
            <div className="singlepost_thumbnail">
              <img src={`${imageUrl}/uploads/${blogs2[0].post_image}`} alt='' />
            </div>

            <Link className="category_button">{blogs2[0].title}</Link>

            <p>{blogs2[0].post_contant}</p>
          </div>
          : <p style={{ fontSize: '40px' }}>blog does not exist</p>
      }
    </section>
  )
}

export default SingleBlog