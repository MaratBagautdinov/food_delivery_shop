
// 1. CREATING NEW INSTANCE
import robokassa from 'node-robokassa';

export const robokassaApi = new robokassa.RobokassaHelper({

    // REQUIRED OPTIONS:
    merchantLogin: process.env.ROBOKASSA_NAME,
    hashingAlgorithm: process.env.ROBOKASSA_HASH,
    password1: process.env.ROBOKASSA_PASS1,
    password2: process.env.ROBOKASSA_PASS2,

    // OPTIONAL CONFIGURATION
    testMode: process.env.ROBOKASSA_TEST, // Whether to use test mode globally
    resultUrlRequestMethod: 'POST' // HTTP request method selected for "ResultURL" requests

});



