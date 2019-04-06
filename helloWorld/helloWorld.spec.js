const helloWorld = require('./helloWorld'); //imports code from "helloWolrd.js"

describe('Hello World', function() { //runs code to make sur eit is correct
  it('says hello world', function() { //descries what should happen in plain english
    expect(helloWorld()).toEqual('Hello, World!'); //expectation
  });
});