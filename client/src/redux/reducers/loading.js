const toCamel = (s) => s.replace(/([-_][a-z])/ig, ($1) => $1.toUpperCase()
  .replace('-', '')
  .replace('_', ''));

const loadingReducer = (state = {}, action) => {
  const { type } = action;
  const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type);

  if (!matches) return state;

  const [, requestName, requestState] = matches;
  const variableLoading = toCamel(`loading_${requestName.toLocaleLowerCase()}`);
  return {
    ...state,
    [variableLoading]: requestState === 'REQUEST',
  };
};

export default loadingReducer;
