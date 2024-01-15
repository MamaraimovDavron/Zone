import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 10%;
  padding: 20px;
  border: 1px solid #eef0f2;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

const Img = ({ ...props }) => {
  return (
    <Div>
      <img src={props.imgUrl} alt="" />
    </Div>
  );
};

export default Img;
