var tracer = require('../lib/enterprise-application-insight-suite.js')
    , should = require('should')

describe('tracer', function(){

    describe('version', function(){
        it('should exist', function(){
                should.exist(tracer.version)
            })
        })

    describe('add provider', function(){
        it('should exist', function(){
            should.exist(tracer.dtraceProvider)
        })
    })

    describe('add probe', function(){
        it('should succeed', function(){
            tracer.addProbe("startChild", "int", "char*")
            tracer.dtraceProvider.enable()
        })
    })


})
