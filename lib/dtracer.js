/*
 * dtracer
 * https://github.com/wolfeidau/dtracer
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

/**
 * The aim of this method is to register a probe with the configured provider, and
 * add a method to tracer.probes with the same name as the probe to enable firing
 * of this probe.
 *
 * Input of
 *
 * tracer.addProbe('someProbe', "int")
 *
 * should result in a method
 *
 * tracer.probes.someProbe()
 *
 * being defined.
 *
 * @return {Object}
 */
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

tracer.enable = function(){
    tracer.dtraceProvider.enable()
}


