const convertStringToHTML = (string: string) => {
  return string.replace(/(<([^>]+)>)/gi, '');
};

export { convertStringToHTML };
