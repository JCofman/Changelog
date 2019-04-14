//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
import * as assert from 'assert';

import * as vscode from 'vscode';
import * as changelogExtension from '../extension';

// Defines a Mocha test suite to group tests of similar kind together
suite('Extension Tests', function() {
  // Defines a Mocha unit test
  test('dummy test', function() {
    assert.equal(-1, [1, 2, 3].indexOf(5));
    assert.equal(-1, [1, 2, 3].indexOf(0));
  });

  test('should return repository name and owner path', function() {
    const gitRepositoryLink = 'https://github.com/JCofman/Changelog';
    const expectedRepoNameAndOwnerPath = '/JCofman/Changelog';
    const actualRepoNameAndOwnerPath = changelogExtension.getRepositoryNameAndOwnerPath(
      gitRepositoryLink
    );
    assert.equal(actualRepoNameAndOwnerPath, expectedRepoNameAndOwnerPath);
  });

  test('should match hovered document with score of 5', function() {
    vscode.Hover;
    const gitRepositoryLink = 'https://github.com/JCofman/Changelog';
    const expectedRepoNameAndOwnerPath = '/JCofman/Changelog';
    const actualRepoNameAndOwnerPath = changelogExtension.getRepositoryNameAndOwnerPath(
      gitRepositoryLink
    );
    assert.equal(actualRepoNameAndOwnerPath, expectedRepoNameAndOwnerPath);
  });
});
