const { setDefaultTimeout, AfterAll, BeforeAll, Before } = require('cucumber');
const { createSession, closeSession, startWebDriver, stopWebDriver, client } = require('nightwatch-api');
const os = require('os');
const packageJson = require('./package');
const report = require('multiple-cucumber-html-reporter');

const startTimeStr = new Date().toLocaleString('es-ES');

// Test report will be generated if any scenario is executed
let generateReport = false;

setDefaultTimeout(10000);

BeforeAll(async () => {
    // The configuration is open to add other browsers/drivers
    await startWebDriver({ env: process.env.NIGHTWATCH_ENV || 'default' });
    await createSession();
});

Before((scenario) => {
    generateReport = true;
});

AfterAll(async () => {
    const opts = client.options;
    const capabilities = opts.desiredCapabilities;
    const endTimeStr = new Date().toLocaleString('es-ES');

    await closeSession();
    await stopWebDriver();

    if (!generateReport) {
        return Promise.resolve('No scenarios to run');
    }

    return setTimeout(() => {
        // Collect metadata to generate the report
        report.generate({
            jsonDir: './reports/',
            reportPath: './reports/cucumber_report',
            openReportInBrowser: true,
            displayDuration: true,
            pageFooter: '</br>',
            metadata: {
                app: {
                    name: 'Nightwatch Cucumber Example',
                    version: '1.0.0',
                },
                browser: {
                    name: capabilities.browserName,
                    version: capabilities.version,
                },
                device: 'Desktop',
                platform: {
                    name: os.platform(),
                    version: null,
                },
            },
            customData: {
                title: 'Run info',
                data: [
                    { label: 'Project', value: packageJson.name },
                    { label: 'Release', value: packageJson.version },
                    { label: 'Start time', value: startTimeStr },
                    { label: 'End time', value: endTimeStr },
                ],
            },
        });
    }, 300);
});
