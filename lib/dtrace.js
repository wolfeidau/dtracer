/*
 * dtracer
 * https://github.com/wolfeidau/dtracer
 * 
 * This code was carefully crafted by @rvagg I just borrowed it.
 *
 * Copyright (c) 2013 Mark Wolfe
 * Licensed under the MIT license.
 */

try {
    module.exports = require('dtrace-provider')
    console.log('Worker Farm: DTrace support loaded')
} catch (e) {
    var noop      = function () {}
        , probeNoop = { fire: noop }
    module.exports = {
        createDTraceProvider: function () {
            return {
                addProbe: function () { return probeNoop }
                , enable: noop
            }
        }
    }
}
