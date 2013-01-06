# dtracer

Simple library for event tracing using a number of other libraries which can be enabled or disabled as required.

The aim of this library is to provide a simple way of integrating dtrace or alternatively log based tracing within a node.js javascript library.

[![Build Status](https://secure.travis-ci.org/wolfeidau/dtracer.png)](http://travis-ci.org/wolfeidau/dtracer)

## Getting Started
Install the module with: `npm install dtracer`

## Documentation

This library will optionally load the dtrace provider and provides a number of utility methods for adding and firing probes.


The default tracer is accessible through the tracer module directly.
```
var dtracer = require('dtracer')

// configures an application with DTrace used as the default provider
dtracer
    .addProbe("startChild", "int", "char*")
    .addProbe("stopChild", "int", "char*")
    .addProbe("onExit", "int", "char*")

tracer.enable()

tracer.probes.startChild(123, "cool new child") // fire a probe with the previously specified parameters

```

Note: As per limitations with the node-dtrace-provider you only get 6 arguments per probe to play with, so choose wisely.

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/gruntjs/grunt).

## License
Copyright (c) 2013 Mark Wolfe  
Licensed under the MIT license.
