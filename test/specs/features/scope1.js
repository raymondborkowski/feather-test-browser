window.foo = 0;

const one = require('../fixture/one.js');

describe('global state behaves properly', function () {

        var ext1 = __dirname + '/../fixture/_ext1.js';
        var ext2 = __dirname + '/../fixture/_ext2.js';

        networkIntercept.addMocks([
            {
                request: 'fixture/_ext1.js',
                response: {
                    file: ext1,
                },
            },
            {
                request: 'fixture/_ext2.js',
                response: {
                    file: ext2,
                },
            },
        ]);

        describe('globals are shared with required src files', function (expect) {
            expect(window.foo).toBe(2);
        });

        describe('globals are shared with external files that are loaded asynchronously', function (expect, done) {
            window.TestHook = function () {
                expect(window.foo).toBe(4);
                done();
            };

            external.loadScript(ext1);
        });

});
