/*
 * enterprise-application-insight-suite
 * https://github.com/markw/enterprise-application-insight-suite
 *
 * Copyright (c) 2013 Mark Wolfe
 * Licensed under the MIT license.
 */

var tracer = exports
    , dtrace = require('./dtrace')

//
// Expose version using `pkginfo`
//
require('pkginfo')(module, 'version')
require('pkginfo')(module, 'name')

tracer.dtraceProvider = dtrace.createDTraceProvider(tracer.name)

tracer.probes = {};

tracer.addProbe = function(){
    tracer.dtraceProvider.addProbe.apply(tracer.dtraceProvider, arguments)
    var method = arguments[0]
    tracer.probes[method] = function(){
        var args = [].slice.call(arguments)
        args.unshift(method)
        tracer.dtraceProvider.fire.apply(tracer.dtraceProvider, args)
    }
    return tracer
}




