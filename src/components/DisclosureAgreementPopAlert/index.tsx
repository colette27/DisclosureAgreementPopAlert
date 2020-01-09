import React from "react";
import { Alert } from "react-bootstrap";

class DisclosureAgreementPopAlert extends React.Component {
  createCookie() {}

  render() {
    const { body, title, controls } = this.props;
    return (
      <div>
        <Alert key="oiu" variant="primary">
          <Alert.Heading>{title}</Alert.Heading>

          {body}
        </Alert>
      </div>
    );
  }
}

export default DisclosureAgreementPopAlert;
//add in controls and handling and tests
