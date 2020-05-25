import React from "react";
import { Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

import "./titleAndSeeMore.scss";

const TitleAndSeeMore = ({ title, extraData, link }) => {
  return (
    <Row className="ui-bpt-title">
      <Col className="ui-bpt-title_text">
        <div className="title">{title}</div>
        {extraData && <div className="extra">{extraData}</div>}
      </Col>
      {link && (
        <Col className="ui-bpt-title_link">
          <div className={`link text-right` + (extraData ? " extra" : "")}>
            <a href={link.href}>{link.text}</a>
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
};

export default TitleAndSeeMore;
