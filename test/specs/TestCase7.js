describe("Test Case ID 7: Footer Links", function () {
    
  it("Footer Objective", async function () {
      browser.url("https://www.saucedemo.com/")
    
      const username = await $("input[id='user-name']")
      await username.setValue("standard_user")
      const password = await $("input[id='password']")
      await password.setValue("secret_sauce")
  
      const loginButton = await $("input[value='Login']")
      await loginButton.click()

     
      await expect(browser).toHaveUrlContaining("inventory")

      const twitterLink = await $("a[href='https://twitter.com/saucelabs']")
      await twitterLink.click()

      await browser.switchWindow("twitter.com/saucelabs")
      await browser.pause(2000)

      await browser.url("https://www.saucedemo.com/")
      await username.setValue("standard_user")
      await password.setValue("secret_sauce")
      await loginButton.click()
    
      
      const facebookLink = await $("a[href ='https://www.facebook.com/saucelabs']")
      await facebookLink.click()
  
      await browser.switchWindow("facebook.com/saucelabs")
     
      await browser.url("https://www.saucedemo.com/")
      await username.setValue("standard_user")
      await password.setValue("secret_sauce")
      await loginButton.click()
      
      const linkedinLink = await $("a[href ='https://www.linkedin.com/company/sauce-labs/']")
      await linkedinLink.click()
  
      await browser.switchWindow("linkedin.com")
    

      await browser.closeWindow()
    })
  })