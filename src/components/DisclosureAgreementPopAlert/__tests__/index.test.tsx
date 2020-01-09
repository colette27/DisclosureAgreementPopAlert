import * as React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import DisclosureAgreementPopAlert from "../";

describe("<DisclosureAgreementPopAlert/>", () => {
  it("smoke test renders", () => {
    const renderer = ShallowRenderer.createRenderer();
    renderer.render(<DisclosureAgreementPopAlert />);

    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
