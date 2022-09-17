const removeHtmlFrontString = (string: string) => {
  return string.replace(/(<([^>]+)>)/gi, '');
};

export { removeHtmlFrontString };
