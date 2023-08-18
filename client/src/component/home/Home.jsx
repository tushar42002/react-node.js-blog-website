import React, { useContext, useEffect } from 'react'
import { DataContext } from '../../context/DataProvider';

import Blog from "../blog/Blog"
import FeatureBlog from "../blog/FeatureBlog"


const Home = () => {

  return (
    <>
      <FeatureBlog />
      <Blog  />
    </>
  )
}

export default Home