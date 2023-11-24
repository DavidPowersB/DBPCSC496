import { graphql, GatsbyImage, getImage } from "gatsby";
import React from "react";
import Img from 'gatsby-image'

const pageTemplate = props => {
  const data = {
    nodeFood: props.pageContext.data,
  };

  console.log(data);
  console.log("Hello world, this page was made");


  return (
    <>
        <h1>{data.nodeFood?.title}</h1>
        <p>Difficulty: {data.nodeFood?.difficulty}</p>
        <p>Preparation Time: {data.nodeFood?.preparationTime}</p>
        <p>seving size: {data.nodeFood?.numberOfServings}</p>
        <p>Ingredients {data.nodeFood?.ingredients}</p>
        <img src={data.nodeFood?.mediaImage.mediaImage.url}/>
        
        <p>hello</p>
    </>
  );
};

export default pageTemplate;
