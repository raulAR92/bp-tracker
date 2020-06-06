import React from "react";
import { Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

import "./titleAndSeeMore.scss";

const TitleAndSeeMore = ({ title, extraData, link, button }) => {
  return (
    <Row className="ui-bpt-title">
      <Col xs={8} className="ui-bpt-title_text">
        <div className="title">{title}</div>
        {extraData && <div className="extra">{extraData}</div>}
      </Col>
      {link && (
        <Col xs={4} className="ui-bpt-title_link">
          <div className={`link text-right` + (extraData ? " extra" : "")}>
            <a href={link.href}>{link.text}</a>
          </div>
        </Col>
      )}
      {button && (
        <Col xs={4} className="ui-bpt-title_link">
          <div className={`link text-right` + (extraData ? " extra" : "")}>
            <Button color="primary" onClick={button.handleClick}>
              {button.text}
            </Button>
          </div>
        </Col>
      )}
    </Row>
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
