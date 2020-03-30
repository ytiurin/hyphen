import { addParameters } from "@storybook/html";

addParameters({
  options: {
    storySort: (a, b) =>
      a[1].name.localeCompare(b[1].name, undefined, { numeric: true })
  }
});
