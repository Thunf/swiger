Swig [![Build Status](http://img.shields.io/travis/thunf/swiger/master.svg?style=flat)](http://travis-ci.org/thunf/swiger) [![Dependency Status](http://img.shields.io/gemnasium/thunf/swiger.svg?style=flat)](https://gemnasium.com/thunf/swiger) [![NPM version](http://img.shields.io/npm/v/swig.svg?style=flat)](https://www.npmjs.org/package/swig) [![NPM Downloads](http://img.shields.io/npm/dm/swig.svg?style=flat)](https://www.npmjs.org/package/swig)
====

[Swig](http://thunf.github.io/swiger/) is an awesome, Django/Jinja-like template engine for node.js.


Thanks
------

Thank Paul and previous swig collabs for their hard and excellent work!

[Paul Armstrong has stepped down as the primary swig maintainer. ](https://github.com/paularmstrong/swig)

Documentation
-------------

All documentation can be viewed online on the [Swig Website](http://thunf.github.io/swiger/).


Features
--------

* Available for node.js **and** major web browsers!
* [Express](http://expressjs.com/) compatible.
* Object-Oriented template inheritance.
* Apply filters and transformations to output in your templates.
* Automatically escapes all output for safe HTML rendering.
* Lots of iteration and conditionals supported.
* Robust without the bloat.
* Extendable and customizable. See [Swig-Extras](https://github.com/paularmstrong/swig-extras) for some examples.
* Great [code coverage](http://thunf.github.io/swiger/coverage.html).


Installation
------------

    npm install swig

Basic Example
-------------

### Template code

```html
<h1>{{ pagename|title }}</h1>
<ul>
{% for author in authors %}
    <li{% if loop.first %} class="first"{% endif %}>{{ author }}</li>
{% endfor %}
</ul>
```

### node.js code

```js
var swig  = require('swig');
var template = swig.compileFile('/absolute/path/to/template.html');
var output = template({
    pagename: 'awesome people',
    authors: ['Paul', 'Jim', 'Jane']
});
```

### Output

```html
<h1>Awesome People</h1>
<ul>
    <li class="first">Paul</li>
    <li>Jim</li>
    <li>Jane</li>
</ul>
```

For working example see [examples/basic](https://github.com/thunf/swiger/tree/master/examples/basic)


Need Help? Have Questions? Comments?
------------------------------------

* [Mailing List/Google Group](http://groups.google.com/forum/#!forum/swig-templates)
* [StackOverflow](http://stackoverflow.com/questions/tagged/swig-template)
* [Migration Guide](https://github.com/thunf/swiger/wiki/Migrating-from-v0.x.x-to-v1.0.0)


How it works
------------

Swig reads template files and translates them into cached javascript functions. When we later render a template we call the evaluated function, passing a context object as an argument.


License
-------

MIT
