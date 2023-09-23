describe("Test Case ID 2: Login with invalid password", function () {
  it("Login Objective", async function () {

    
    browser.url("https://www.saucedemo.com/")
    
    const loginField = await $("input[id='user-name']")
    await loginField.setValue("standard_user")

    const passwordField = await $("input[id='password']")
    await passwordField.setValue("any_random_value")

    const loginButton = await $("input[value='Login']")
    await loginButton.click()

    await expect($("svg[aria-hidden='true']")).toBeExisting()

    expect(await loginField.getCSSProperty('border-bottom-color')).toHaveProperty('value', 'rgba(226,35,26,1)')
    expect(await passwordField.getCSSProperty('border-bottom-color')).toHaveProperty('value', 'rgba(226,35,26,1)')

    
    await expect($("[data-test='error']")).toBeExisting()
    await expect($("[data-test='error']")).toHaveText("Epic sadface: Username and password do not match any user in this service")
  
    
   
  })
})