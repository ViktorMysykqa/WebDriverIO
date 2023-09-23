describe("Test Case ID 5: Saving the cart after logout", function () {
  it("Cart Objective", async function () {
    browser.url("https://www.saucedemo.com/")
  
    const username = await $("input[id='user-name']")
    await username.setValue("standard_user")
    const password = await $("input[id='password']")
    await password.setValue("secret_sauce")

    const loginButton = await $("input[value='Login']")
    await loginButton.click()

    await expect(browser).toHaveUrlContaining("inventory")
    
    expect(await $('a[id="item_4_title_link"]').getText()).toContain("Sauce Labs Backpack") 
    const addToCartButton = await $("button[id='add-to-cart-sauce-labs-backpack']")
    await addToCartButton.click()

    const cartCounter = await $("div[id='shopping_cart_container']")
    await expect(cartCounter).toHaveText("1")

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

    await usernameField.setValue("standard_user")
    await passwordField.setValue("secret_sauce")
    await loginButton.click()

    await expect(browser).toHaveUrlContaining("inventory")
    
    const cartButton = await $("div[id='shopping_cart_container']")
    await cartButton.click()

    await expect(browser).toHaveUrlContaining('cart')
    expect(await $('a[id="item_4_title_link"]').getText()).toContain("Sauce Labs Backpack")
    

  })
})