const setParams = (perPage, currentPage, filter) => {
  let params = '';
  if (filter && filter.make) {
    params = params.concat(`&make=${filter.make}`);
  }
  params = params.concat(`&limit=${perPage}&page=${currentPage}`);
  return { params, filter };
};

export default setParams;
