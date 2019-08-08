import { assert } from 'chai';
import exp from '../expected/homepage.exp';
import sel from '../selectors/homepage.sel';
import help from '../helpers/helpers';
import regSel from '../selectors/register.sel';

describe('Client', function () { //define suite title by passing a string

    it('Page title', function () { //define test title by passing a string
      browser.url('/'); //open baseUrl + string passed in .url() function
      let title = browser.getTitle(); //get page title and assign it to the "title" variable
     // browser.pause(2000); //just pause to visually see that something is happening on the page
      assert.equal(title, exp.pageTitle); //compare {title} (actual) and "Bug Tracker" (expected)
    })
    it('Title and version', function () { //define test title by passing a string
        let title = $(sel.siteName).getText(); //get page title and assign it to the "title" variable
       // browser.pause(2000); //just pause to visually see that something is happening on the page
        assert.equal(title, exp.titleVersion); //compare {title} (actual) and "Bug Tracker" (expected)
      })

  

});



describe('Elements visible', function () {

   help.elementsVisible(Object.values(sel));
});

describe('Functional', function () {
    it(sel.createAccBtn, function () { //define test title by passing a string
        $(sel.createAccBtn).click();
        let visible = $(regSel.h1).waitForDisplayed();
    
        assert.isTrue(visible);
        })
    
 });
 