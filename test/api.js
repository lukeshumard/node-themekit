const chai = require('chai');

const {expect} = chai;
const API = require('../lib/api');

describe('ThemeKit API', () => {

  it('Should call method', () => {
    const apiCall = API('install');
    expect(apiCall).to.equal('install');
  });

});
