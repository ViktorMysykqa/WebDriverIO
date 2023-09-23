describe("Test Case ID 4: Logout", function () {
  it("Login Objective", async function () {
   
    browser.url("https://www.saucedemo.com/")

    const username = await $("input[id='user-name']")
    await username.setValue("standard_user")
    const password = await $("input[id='password']")
    await password.setValue("secret_sauce")

    const loginButton = await $("input[value='Login']")
    await loginButton.click()

    await expect(browser).toHaveUrlContaining("inventory")

    const burgerButton =  await $("button[id='react-burger-menu-btn']")
    await burgerButton.click()

    const menuItems =  await $("div[class='bm-menu']")
    expect(menuItems).toBeElementsArrayOfSize({ eq: 4 })

    const logoutButton = await $("a[id='logout_sidebar_link']")
    await logoutButton.click()
    
    await expect(browser).toHaveUrlContaining("https://www.saucedemo.com/")
    const usernameField = await $("input[id='user-name']")
    const passwordField = await $("input[id='password']")
    await expect(usernameField).toHaveValue("")
    await expect(passwordField).toHaveValue("")
  })
})