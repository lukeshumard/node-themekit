const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const proxyquire = require('proxyquire');
const {emptyFn} = require('../lib/_utils');

const {expect} = chai;
chai.use(sinonChai);

describe('API', () => {

  let Api;
  let spy;

  beforeEach(() => {
    spy = sinon.spy();
    Api = proxyquire('../lib/api', {
      // './command': (...args) => { console.log(args); }
      './command': spy
    });
  });

  afterEach(() => {
    spy.resetHistory();
  });

  it('Should only allow Array as command', () => {
    const argStr = () => { Api('install'); };
    const argObj = () => { Api({}); };
    expect(argStr).to.throw('API Commands is not an Array');
    expect(argObj).to.throw('API Commands is not an Array');
    // expect(spy).to.not.have.been.called;
  });

  it('Should replace non-object options to blank object', () => {
    const commands = ['test-command'];
    const argStrFn = () => { Api(commands, ''); };
    expect(argStrFn).to.not.throw;
    argStrFn();
    expect(spy).to.have.been.calledWith(commands, {});
    spy.resetHistory();
    const argBlankFn = () => { Api(commands); };
    expect(argBlankFn).to.not.throw;
    argBlankFn();
    expect(spy).to.have.been.calledOnce;
    expect(spy).to.have.been.calledWith(commands, {});
  });

  it('Should only allow Function as callback', () => {
    const argStr = () => { Api(['test-command'], {}, ''); };
    const argInt = () => { Api(['test-command'], {}, 3); };
    const argObj = () => { Api(['test-command'], {}, {}); };
    const argBlank = () => { Api(['test-command'], {}); };
    expect(argStr).to.throw('API Callback is not a Function');
    expect(argInt).to.throw('API Callback is not a Function');
    expect(argObj).to.throw('API Callback is not a Function');
    expect(argBlank).to.not.throw;
  });

  it('Should execute API command and callback', () => {
    Api(['test-command']);
    expect(spy).to.be.calledWith(['test-command'], {}, emptyFn);
  });

  it('Should be backwards compatible with command method', () => {
    Api.command({args: ['test-command-stub']});
    expect(spy).to.be.calledWith(['test-command-stub'], {}, emptyFn);
  });

});
