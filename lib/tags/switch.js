/**
 * @alias switch
 *
 * @example
 * {% set varname = 'varname1' %}
 * {% switch varname %}
 *   default statement
 * {% case 'varname1' %}
 *   statement1
 * {% case varname2 %}
 *   statement2
 * {% endswitch %}
 * // => statement1
 * 
 * {% set varname = 'varname2' %}
 * {% set varname2 = 'varname2' %}
 * {% switch varname %}
 *   default statement
 * {% case 'varname1' %}
 *   statement1
 * {% case varname2 %}
 *   statement2
 * {% endswitch %}
 * // => statement2
 * 
 * {% set varname = 'varname2' %}
 * {% switch varname %}
 *   default statement
 * {% case 'varname1' %}
 *   statement1
 * {% case varname3 %}
 *   statement3
 * {% endswitch %}
 * // => default statement
 *
 * {% set varname = ''||null||undefined %}
 * {# varname3 here is not set, so varname3 is undefined and will be set as '' #}
 * {% switch varname %}
 *   default statement
 * {% case 'varname1' %}
 *   statement1
 * {% case varname3 %}
 *   statement3
 * {% endswitch %}
 * // => statement3
 *
 * 
 * @param {string|var}  varname      The variable name to match the value to.
 */
exports.parse = function (str, line, parser, types, stack, options) {
  parser.on('*', function (token) {
    if (this.out.length) {
      throw new Error('Switch statements may only take one argument.');
    }
    return true;
  });
  return true;
};

exports.compile = function (compiler, args, content, parents, options, blockName) {
  return 'switch (' + args[0] + ') {\n' +
    'default:\n' +
    compiler(content, parents, options, blockName) + '\n' +
    'break;\n' +
    '}\n';
};

exports.ends = true;