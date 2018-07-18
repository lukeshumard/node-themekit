const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const {expect} = chai;
chai.use(sinonChai);
const API = require('../lib/api');

describe('API', () => {

  it('Should only allow Array as command', () => {
    const argStr = () => { API('install'); };
    const argObj = () => { API({}); };
    expect(argStr).to.throw('API Commands is not an Array');
    expect(argObj).to.throw('API Commands is not an Array');
  });

  it('Should only allow Function as callback', () => {
    const argStr = () => { API(['test-command'], ''); };
    const argObj = () => { API(['test-command'], {}); };
    const argBlank = () => { API(['test-command']); };
    expect(argStr).to.throw('API Callback is not a Function');
    expect(argObj).to.throw('API Callback is not a Function');
    expect(argBlank).to.not.throw;
  });

  it('Should execute callback', (done) => {
    const apiCallback = sinon.spy();
    const apiCall = API(['test-command'], apiCallback);
    expect(apiCall).to.not.throw;
    setTimeout(() => {
      expect(apiCallback).to.have.been.calledOnce;
      expect(apiCallback).to.have.been.calledWith();
      done();
    }, 50);
  });

});
