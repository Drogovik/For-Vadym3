    describe("User Registration Page Tests", () => {
     it("user registration success", () => { 
    beforeEach(function() {
    isAngularSite(false);
     });
	  browser.waitForAngularEnabled(false);
      browser.get('https://github.com/'); 
		   
	  element(by.css('#user\[login\]')).sendKeys('sPetrov');
      element(by.css('#user\[email\]')).sendKeys('spetrov@gmail.com');
      element(by.css('#user\[password\]')).sendKeys('192Az000q');
      element(by.id('submitBtn')).click("body > div.application-main > main > div.py-6.py-sm-8.jumbotron-codelines > div > div > div.mx-auto.col-sm-8.col-md-6.hide-sm > div > form > button");
		
		browser.waitForAngularEnabled(true);
		browser.get('http://localhost:8000');
 	    browser.getCurrentUrl().then((url) => {
              expect(url).toBe('http://localhost:8000');
	});
	});
  });
  
  