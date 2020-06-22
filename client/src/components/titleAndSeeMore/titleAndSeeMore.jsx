import React from "react";
import { Row, Col } from "react-bootstrap";
import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

import "./titleAndSeeMore.scss";
import { useHistory } from "react-router-dom";

const TitleAndSeeMore = ({ title, extraData, link, button }) => {
  let history = useHistory();
  return (
    <Grid container className="ui-bpt-title">
      <Grid xs={8} className="ui-bpt-title_text">
        <div className="title">{title}</div>
        {extraData && <div className="extra">{extraData}</div>}
      </Grid>

      {link && (
        <Grid xs={4} className="ui-bpt-title_link">
          <div className={`link text-right` + (extraData ? " extra" : "")}>
            <Button onClick={() => history.push(link.href)}>{link.text}</Button>
          </div>
        </Grid>
      )}
      {button && (
        <Grid xs={4} className="ui-bpt-title_link">
          <div className={`link text-right` + (extraData ? " extra" : "")}>
            <Button color="primary" onClick={button.handleClick}>
              {button.text}
            </Button>
          </div>
        </Grid>
      )}
    </Grid>
  );
};

TitleAndSeeMore.propTypes = {
  title: PropTypes.string.isRequired,
  extraData: PropTypes.string,
  link: PropTypes.shape({
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
  button: PropTypes.shape({
    handleClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
  }),
};

export default TitleAndSeeMore;
