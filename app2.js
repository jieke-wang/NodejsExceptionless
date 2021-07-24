var client = require('exceptionless').ExceptionlessClient.default;
client.config.apiKey = 'TTZ0SuRLYRXuDf9CDRLMGTo2J2KhZI4nWib0XfqI';
client.config.serverUrl = 'http://192.168.199.133:5000';
client.config.submissionBatchSize = 100;
client.config.queue.process(true);
client.config.useDebugLogger();

try {
    client.submitLog("Info_souce",
        `这是一个普通日志记录code${12345678999}, ${new Date()}`, "Info");
    client.createLog(`Error_souce`, `出错了, ${new Date()}`, "Error").submit();
    // let i = 0;
    // let j = 1 / i;
    // console.log(j);
    throw new Error(`异常了, ${new Date()}`);
} catch (error) {
    client.submitException(error);
}
console.log(client);