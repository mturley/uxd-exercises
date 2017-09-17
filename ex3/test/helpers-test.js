import assert from 'assert';

import { compareByLastNameDesc, formatAddress } from '../src/helpers';

describe('Helper functions', () => {
  describe('compareByLastNameDesc', () => {
    it('orders by last name and then first name', () => {
      const userA = { name: 'Robert Aaronson' };
      const userB = { name: 'Aaron Robertson' };
      const userC = { name: 'Aaron Aaronson' };
      const userD = { name: 'Prince' };
      assert.equal(compareByLastNameDesc(userA, userB), 1);
      assert.equal(compareByLastNameDesc(userB, userA), -1);
      assert.equal(compareByLastNameDesc(userA, userC), -1);
      assert.equal(compareByLastNameDesc(userC, userA), 1);
      assert.equal(compareByLastNameDesc(userA, userA), 0);
      assert.equal(compareByLastNameDesc(userA, userD), 1);
      assert.equal(compareByLastNameDesc(userD, userA), -1);
    });
  });

  describe('formatAddress', () => {
    it('renders an address string properly', () => {
      const address = {
        street: 'Main St',
        suite: '# 123',
        city: 'Springfield',
        zipcode: '12345',
      };
      assert.equal(formatAddress(address), 'Main St # 123, Springfield, 12345');
    });
  });
});
