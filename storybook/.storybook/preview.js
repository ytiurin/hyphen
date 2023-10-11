export const parameters = {
  options: {
    storySort: (a, b) =>
      a.name.localeCompare(b.name, undefined, { numeric: true })
  }
};
