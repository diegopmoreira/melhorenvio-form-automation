const HtmlReporter = require('protractor-beautiful-reporter');
const path = require('path');
const baseDirectory = path.resolve(__dirname, '../assets/test_results');
const Config = require('./config');
const env = new Config('APP');

const config = {
  framework: 'jasmine',
  directconnect: true,
  capabilities: {
    browserName: 'chrome',
    acceptInsecureCerts: true
  },
  //seleniumAddress: env.get('url.selenium'),
  jasmineNodeOpts: {
    defaultTimeoutInterval: 2500000
  },
  params: {
    environmentUrl: env.get('url.environment'),
    emailAddress: env.get('params.user'),
    password: env.get('params.password'),
    address: env.get('params.address')
  },
  suites: {
    CadastrarUsuario: ['../test_spec/CadastrarUsuario.js']
  },
  onPrepare () {
    jasmine.getEnv().addReporter(
      new HtmlReporter({
        baseDirectory,
        takeScreenShotsOnlyForFailedSpecs: true,
        docName: 'buildReport.html',
        docTitle: 'Build Report',
        jsonsSubfolder: 'jsons',
        screenshotsSubfolder: 'screenshots'
      }).getJasmine2Reporter()
    );
    
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
  }
};

exports.config = config;
