import React from "react";
import Header from "../../components/Header/Header";
// import ExampleFetchRender from '../../components/ExampleFetchRender'

import heroBg from '../../assets/imgs/hero.png'
const Home = () => {
  const title = `read and add your insight
`;
  const subtitle='find your favorite book and read it here for free'


  return (
    <div>
      <Header title={title} bg={heroBg} subtitle={subtitle}/>
    </div>
  );
};

export default Home;
