import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import Reviews from "./reviews";
import { restaurants } from "../../fixtures";

const reviews = restaurants[0].reviews;

Enzyme.configure({ adapter: new Adapter() });

describe("Reviews", () => {
  it("should render", () => {
    const component = mount(<Reviews reviews={reviews} />);

    expect(component.find('[data-id="reviews"]').length).toBe(1);
  });
  it("should render", () => {
    const component = mount(<Reviews reviews={reviews} />);

    expect(component.find('[data-id="reviews"]').children()).toHaveLength(
      reviews.length
    );
  });
});
