const PROXY_CONFIG = [
    {
        context: ['/contatos'],
        target: 'http://localhost:8081/',
        secure: false,
        logLevel: 'debug'
    }
];

module.exports = PROXY_CONFIG;