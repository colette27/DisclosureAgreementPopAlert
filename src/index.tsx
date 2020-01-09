import * as React from "react";
import { render } from "react-dom";
import { Card } from "react-bootstrap";
import DisclosureAgreementPopAlert from "./components/DisclosureAgreementPopAlert";

import "./styles.css";

function App() {
  return (
    <Card>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <DisclosureAgreementPopAlert
          body="You need to agree to this blah blah"
          title="Agreement"
          controls={controlPanel}
        />
        <body>
          <li>
            requirements pop up from the bottom 0 full width 100% based on
            bootstrap react alert component,
          </li>
          <li>
            Create new component under the stackgen namespace
            io.starter.stackgen.components when putting it to namespace Will go
            under source/components/disclosureAgreementPopAlert/index.tsx and
            index css file testing
          </li>
          using Jest checkbox agree disagree buttons and an I understand button,
          pass in to the component the buttons that you want. container,
          dismissable pop up --x in corner, pass in as props the title, body and
          buttons or controls implement this thing affter build make one and use
          it and put GDPR, in there, put cookies pass them into the component to
          display React components take props is the way that pass parameters to
          them, looks like HTML 1. Make folder structure 2. Create files
        </body>
      </div>
    </Card>
  );
}

const controlPanel = {};

const rootElement = document.getElementById("root");
render(<App />, rootElement);
