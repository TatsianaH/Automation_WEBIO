import { assert } from 'chai';

describe('Client', function () { //define suite title by passing a string

    it('Get title', function () { //define test title by passing a string
      browser.url('/'); //open baseUrl + string passed in .url() function
      let title = browser.getTitle(); //get page title and assign it to the "title" variable
     // browser.pause(2000); //just pause to visually see that something is happening on the page
      assert.equal(title, 'Progress Monitor'); //compare {title} (actual) and "Bug Tracker" (expected)
    })

});

/*describe('Elements exist', function () {

    it('Header', function () {
      let header = $('#main-bar').isDisplayed();
      assert.equal(header, true, 'Header test is not visible');
    })

    it('Home text', function () {
      let text = $('h1').isDisplayed();
      assert.equal(text, true, 'Home test is not visible');
    })

});

describe('Elements value', function () {

    it('Home text', function () {
        let text = $('h1').getText();
        assert.equal(text, 'Home');
      })

});*/
