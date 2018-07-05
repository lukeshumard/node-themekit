const chai = require('chai');

const {expect} = chai;
const API = require('../lib/api');

describe('API', () => {

  it('Should not allow non-Array', () => {
    const argStr = () => { API('install'); };
    const argObj = () => { API({}); };
    expect(argStr).to.throw('API Commands is not an Array');
    expect(argObj).to.throw('API Commands is not an Array');
  });

  it('Should be able to run', () => {
    const apiCall = API(['test-command']);
    expect(apiCall).to.not.throw;
  });

});
