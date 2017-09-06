
describe('networkIntercept', function (expect, done) {

    networkIntercept.addMocks([
        {
            request: 'greetings.com',
            response: 'hello',
        },
    ]);

    let testUrl = 'http://greetings.com/say/hello-fetch?a=2&b=3';
    fetch(testUrl)
        .then((response) => {
            if (response && response.ok) {
                response.text().then(function (text) {
                    expect(response.status).toBe(200, 'status');
                    expect(text).toBe('hello');
                    done();
                });
            } else {
                expect('response from ' + testUrl).toBe('ok');
                done();
            }
        });

});
