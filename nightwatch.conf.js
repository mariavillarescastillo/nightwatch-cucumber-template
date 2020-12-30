const chromedriver = require('chromedriver');

module.exports = {
    page_objects_path: './page_objects',
    globals_path: './globals/globals.js',
    test_settings: {
        default: {
            launch_url: 'https://www.google.es/',
            webdriver: {
                start_process: true,
                server_path: chromedriver.path,
                port: 4444,
                cli_args: ['--port=4444'],
                log_path: './'
            },
            desiredCapabilities: {
                browserName : 'chrome',
                version: '87.0.4',
            },
        },
        chrome: {
            webdriver: {
                start_process: true,
                server_path: chromedriver.path,
                port: 4444,
                cli_args: ['--port=4444', '--log-level=DEBUG'],
                log_path: './'
            },
            desiredCapabilities: {
                browserName : 'chrome',
                version: '87.0.4',
            },
        },
  }
};
