describe ("Test Case ID 1: Valid Login", function () {
  
  it ("Login Objective", async function () {

    browser.url("https://www.saucedemo.com/")
    
    const username = await $("input[id='user-name']")
    await username.setValue("standard_user")
    const password = await $("input[id='password']")
    await password.setValue("secret_sauce")

    const loginButton = await $("input[value='Login']")
    await loginButton.click()

    await expect(browser).toHaveUrlContaining("inventory")

  
    const element1 = await $("div[id='inventory_container']")
    const isDisplayed1 = await element1.isDisplayed()

    const element2 = await $("div[id='shopping_cart_container']")
    const isDisplayed2 = await element2.isDisplayed()
    })
})