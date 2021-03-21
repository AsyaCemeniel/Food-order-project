import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import Product from "./product";
import { restaurants } from "../../fixtures";

const product = restaurants[0].menu[0];

Enzyme.configure({ adapter: new Adapter() });

describe("Product", () => {
  it("should render", () => {
    const component = mount(<Product product={product} />);

    expect(component.find('[data-id="product"]').length).toBe(1);
  });
});
