import React from "react";
import { css } from "@emotion/core";
import GridLoader from "react-spinners/GridLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  margin-bottom: 10px;
`;
function LoadingComponent() {
  return (
    <div className="sweet-loading">
      <GridLoader
        css={override}
        sizeUnit={"px"}
        size={15}
        color={"#0088CE"}
        loading={true}
      />
    </div>
  );
}
export default LoadingComponent;
