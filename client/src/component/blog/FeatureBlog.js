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


    return (
        <section className="featured">

            {
                        blogs.length > 0 ?
                        <div key={blogs[0].id} className="container featured_container post">

                            <div className="post_thumbnail">
                                <img src={`${imageUrl}/uploads/${blogs[0].post_image}`} alt='' />
                            </div>
                            <div className="post_info">
                                <a href="category-posts.php" className="category_button">{blogs[0].category}</a>
                                <h2 className="post_title"><Link href={`/singleblog/${blogs[0].id}`}>{blogs[0].post_title}</Link>
                                </h2>
                                <p className="post_body">{blogs[0].post_contant.slice(0, 400)}</p>
                                <div className="post_author">
                                    <div className="post_author-avatar">
                                        <img src={`${imageUrl}/uploads/${blogs[0].post_image}`} alt='' />
                                    </div>
                                    <div className="post_author-info">

                                        <small>{blogs[0].date.slice(0,10)}</small>
                                    </div>
                                </div>
                            </div>
                        </div>: null


            }

        </section>
    )
}

export default FeatureBlog