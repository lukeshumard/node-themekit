const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const proxyquire = require('proxyquire');

const {expect} = chai;
chai.use(sinonChai);

let install;
let spy;

describe('Install', () => {

  describe('Local installation', () => {

    before(() => {
      spy = sinon.spy();
      install = proxyquire
        .noCallThru()
        .load('../lib/install/index', {
          './local': () => true,
          './remote': spy
        });
    });

    it('Should not install remote', () => {
      install();
      expect(spy).to.not.have.been.called;
    });

  });

  describe('Remote installation', () => {

    before(() => {
      spy = sinon.spy();
      install = proxyquire
        .noCallThru()
        .load('../lib/install/index', {
          './local': () => false,
          './remote': spy
        });
    });

    it('Should install remote if local fails', () => {
      install();
      expect(spy).to.have.been.calledOnce;
    });

  });

});
