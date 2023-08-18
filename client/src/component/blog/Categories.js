import React, { useContext, useEffect } from 'react'
import { DataContext } from '../../context/DataProvider';
import { Link } from 'react-router-dom'

const Categories = () => {

    const context = useContext(DataContext);

    const { category, getCategory } = context;

    useEffect(() => {
        getCategory();
    }, [])


    return (
        <section className="category_buttons">
            <div className="container category_buttons-container">

                {category.length === 0 || category === null
                    ? <tr><td style={{ color: 'green', fontWeight: '600' }}>add category to show</td></tr>
                    : category.map((item) => {
                        return (
                            <Link to="#" key={item.id} className="category_button">{item.title}</Link>
                        )

                    })

                }
            </div>
        </section>
    )
}

export default Categories