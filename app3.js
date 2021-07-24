var express = require('express');
var app = express();

var client = require('exceptionless').ExceptionlessClient.default;
client.config.apiKey = 'TTZ0SuRLYRXuDf9CDRLMGTo2J2KhZI4nWib0XfqI';
client.config.serverUrl = 'http://192.168.199.133:5000';
client.config.submissionBatchSize = 100;
client.config.updateSettingsWhenIdleInterval = 1000;
client.config.queue.process(true);
client.config.useDebugLogger();

app.get('/hello.txt', function(req, res) {
    client.submitLog("hello.txt",
        `api被访问, ${new Date()}`, "Info");
    res.send('Hello World');
});

var server = app.listen(3000, "0.0.0.0", function() {
    console.log(server.address());
    console.log('Listening on port %d', server.address().port);
});