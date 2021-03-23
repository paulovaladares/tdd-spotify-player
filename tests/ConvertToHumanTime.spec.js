import { expect } from 'chai';
import convertToHumanTime from '../src/ConvertToHumanTime';

describe('ConvertToHumaTime', () => {
  // 0ms === 00:00
  it('should receive 0ms and return 00:00', () => {
    expect(convertToHumanTime(0)).to.be.equal('00:00');
  });
  // 1000ms === 00:01
  it('should receive 1000ms and return 00:01', () => {
    expect(convertToHumanTime(1000)).to.be.equal('00:01');
  });
  // 60000ms === 01:00
  it('should receive 60000ms and return 01:00', () => {
    expect(convertToHumanTime(60000)).to.be.equal('01:00');
  });
});
