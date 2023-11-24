import { graphql } from "gatsby";
import React from "react";

const pageTemplate = props => {
  const data = {
    nodeFood: props.pageContext.data, // Corrected from props.pageContext.date
  };

  console.log(data);
  console.log("Hello world, this page was made");

  return (
    <>
      <h4>{data.nodeFood?.title}</h4>
      <p>{data.nodeFood?.preparationTime}</p>
      <p>hello</p>
    </>
  );
};

export default pageTemplate;
