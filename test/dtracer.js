var tracer = require('../lib/dtracer.js')
    , should = require('should')
    , pkginfo = require('pkginfo')(module)

describe('tracer', function () {

   describe('add provider', function () {

        it('should exist', function () {
            tracer.create(module.exports.name)
            should.exist(tracer.dtraceProvider)
        })

    })

    describe('add probe', function () {

        it('should succeed', function () {
            tracer.addProbe("startChild", "int", "char*")
            tracer.enable()
        })

        it('should have registered a method to fire the probe', function () {
            tracer.probes.startChild(function () {
                return 1
            })
        })

    })

})
