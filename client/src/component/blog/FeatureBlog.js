import React, { useContext, useEffect } from 'react'
import { DataContext } from '../../context/DataProvider';
import { Link } from 'react-router-dom';

const FeatureBlog = () => {

    const context = useContext(DataContext);

    const { blogs, getBlogs, url } = context;


    useEffect(() => {
        getBlogs();
    }, [])

    const imageUrl = url;


    
        const randomNumber =  Math.floor(Math.random() * blogs.length);


    return (
        <section className="featured">

            {
                        blogs.length > 0 ?
                        <div key={blogs[0].id} className="container featured_container post">

                            <div className="post_thumbnail">
                                <img src={`${imageUrl}/uploads/${blogs[randomNumber].post_image}`} alt='' />
                            </div>
                            <div className="post_info">
                                <a href="category-posts.php" className="category_button">{blogs[randomNumber].title}</a>
                                <h2 className="post_title"><Link to={`/singleblog/${blogs[randomNumber].id}`}>{blogs[randomNumber].post_title}</Link>
                                </h2>
                                <p className="post_body">{blogs[randomNumber].post_contant.slice(0, 400)}</p>
                                <div className="post_author">
                                    <div className="post_author-avatar">
                                        <img src={`${imageUrl}/uploads/${blogs[randomNumber].avatar}`} alt='' />
                                    </div>
                                    <div className="post_author-info">

                                        <small>{blogs[randomNumber].date.slice(0,10)}</small>
                                    </div>
                                </div>
                            </div>
                        </div>: null


            }

        </section>
    )
}

export default FeatureBlog