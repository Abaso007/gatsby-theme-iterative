const consts = {
  CLI_REGEXP: /(dvc|cml|mlem)\s+[a-z][a-z-.]*/,
  COMMAND_REGEXP: /^[a-z][a-z-]*$/,
  ARGS_REGEXP: new RegExp(/\-{1,2}[a-zA-Z-]*/, 'ig'),

  COMMAND_ROOT: '/doc/command-reference/',
  CML_COMMAND_ROOT: '/doc/ref/',

  CLI_API_REGEXP: /(dvc|mlem).api([a-z-._]*\(\)$)?/,
  METHOD_REGEXP: /^[a-z-._]*\(\)$/,

  API_ROOT: '/doc/api-reference/'
}

module.exports = consts
