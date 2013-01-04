# enterprise-application-insight-suite

Simple library for event tracing using a number of other libraries which can be enabled or disabled as required.

The aim of this library is to provide a simple way of integrating dtrace or alternatively log based tracing within a node.js javascript library.

The name of this library is a tribute to all the enterprise software companies, and creative people behind the product names they dream up.

## Getting Started
Install the module with: `npm install enterprise-application-insight-suite`

```javascript
var enterprise_application_insight_suite = require('enterprise-application-insight-suite');
enterprise_application_insight_suite.awesome(); // "awesome"
```

## Documentation

This library will optionally load the dtrace provider and provides a number of utility methods for adding and firing probes.


```
var eais = require('enterprise-application-insight-suite');

eais.configure(
    "node-worker-farm", // the name which will be used to register the provider
    "probes" : [
        "startChild": ["int", "char*"],
        "stopChild": ["int", "char*"],
        "onExit": ["int", "char*"]
    ]
);

eais.startChild(123, "cool new child"); // fire a probe with the previously specified parameters

```

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/gruntjs/grunt).

## License
Copyright (c) 2013 Mark Wolfe  
Licensed under the MIT license.
