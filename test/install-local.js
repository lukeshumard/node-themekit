/* eslint camelcase: "off" */
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const proxyquire = require('proxyquire');

const {expect} = chai;
chai.use(sinonChai);

describe('Install - Local', () => {

  describe('#exists', () => {

    let checkLocal;

    beforeEach(() => {
      const execSyncStub = sinon.stub();
      execSyncStub.withArgs('which ').returns('');
      execSyncStub.withArgs('which nf').returns('nf not found');
      execSyncStub.withArgs('which theme').returns('/usr/local/bin/theme');
      checkLocal = proxyquire('../lib/install/check-local', {
        child_process: {
          execSync: execSyncStub
        }
      });
    });

    it('Should not pass if blank command', () => {
      const exists = checkLocal('');
      expect(exists).to.be.false;
    });

    it('Should not pass if no command found', () => {
      const exists = checkLocal('nf');
      expect(exists).to.be.false;
    });

    it('Should pass if local version found', () => {
      const exists = checkLocal('theme');
      expect(exists).to.be.true;
    });

  });

});
