import React from "react";
import PageContainer from "../../components/pageContainer/pageContainer";

import "./notFound.scss";
import { Grow } from "@material-ui/core";

const NotFound = () => {
  return (
    <Grow in={true}>
      <div className="ui-bpt-page_background">
        <div className="ui-bpt-not_found">
          <div className="person-image"></div>
          <div className="error">
            <div className="code">404</div>
            <div className="message">Page not found</div>
          </div>
        </div>
      </div>
    </Grow>
  );
};

export default NotFound;
