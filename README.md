# enterprise-application-insight-suite

Simple library for event tracing using a number of other libraries which can be enabled or disabled as required.

The aim of this library is to provide a simple way of integrating dtrace or alternatively log based tracing within a node.js javascript library.

The name of this library is a tribute to all the enterprise software companies, and creative people behind the product names they dream up.

[![Build Status](https://secure.travis-ci.org/wolfeidau/enterprise-application-insight-suite.png)](http://travis-ci.org/wolfeidau/enterprise-application-insight-suite)

## Getting Started
Install the module with: `npm install enterprise-application-insight-suite`

## Documentation

This library will optionally load the dtrace provider and provides a number of utility methods for adding and firing probes.


The default tracer is accessible through the tracer module directly.
```
var tracer = require('enterprise-application-insight-suite')

// configures an application with DTrace used as the default provider
tracer
    .addProbe("startChild", "int", "char*")
    .addProbe("stopChild", "int", "char*")
    .addProbe("onExit", "int", "char*")

// configures an application with DTrace used as the default provider
tracer.configureApp("node-worker-farm")
    .addProvider(tracer.provider.Console)
    .addProvider(tracer.provider.DTrace)
    .addProbe("startChild", "int", "char*")
    .addProbe("stopChild", "int", "char*")
    .addProbe("onExit", "int", "char*")


tracer.probes.startChild(123, "cool new child") // fire a probe with the previously specified parameters

```

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/gruntjs/grunt).

## License
Copyright (c) 2013 Mark Wolfe  
Licensed under the MIT license.
