describe("Test Case ID 8: Valid Checkout", function () {

  it ("Checkout Objective", async function () {
 
      browser.url("https://www.saucedemo.com/")

      const username = await $("input[id='user-name']")
      await username.setValue("standard_user")
      const password = await $("input[id='password']")
      await password.setValue("secret_sauce")
    
      const loginButton = await $("input[value='Login']")
      await loginButton.click()
    
  
      const addToCartButton = await $("button[id='add-to-cart-sauce-labs-backpack']")
      await addToCartButton.click()

  
      const cartCounter = await $("div[id='shopping_cart_container']")
      await expect(cartCounter).toHaveText("1")

      const cartButton = await $("div[id='shopping_cart_container']")
      await cartButton.click()

      await expect(browser).toHaveUrlContaining('cart')

      const cartItems = await $$("div[class='cart_item']")
      await expect(cartItems).toBeElementsArrayOfSize({ eq: 1 })
  
      const checkoutButton = await $("button[id='checkout']")
      await checkoutButton.click()
  
      await expect(browser).toHaveUrlContaining("checkout-step-one")
  
      const firstNameField = await $("input[data-test='firstName']")
      await firstNameField.setValue("John")
      const lastNameField = await $("input[data-test='lastName']")
      await lastNameField.setValue("Doe")
      const postalCodeField = await $("input[data-test='postalCode']")
      await postalCodeField.setValue("12345")


  
      await expect(firstNameField).toHaveValue("John")
      await expect(lastNameField).toHaveValue("Doe")
      await expect(postalCodeField).toHaveValue("12345")

      const continueButton = await $("input[id='continue']")
      await continueButton.click();

      await browser.pause(2000)
  
      await expect(browser).toHaveUrlContaining("checkout-step-two")
      const overviewItems = await $$("div[class='cart_item']")
      await expect(overviewItems).toBeElementsArrayOfSize({ eq: 1 })
  
      await browser.pause(2000)

      const itemPrice = await $("div[class='inventory_item_price']")
      const totalPrice = await $("div[class='summary_info_label_summary_total_label']")
  
      const itemPriceText = await itemPrice.getText()
      const totalPriceText = await totalPrice.getText()
  
      await expect(itemPriceText).toContain(totalPriceText) 
      // Test isn't success because item price can't be equel total price=(price + tax ) 
    
    })
  })