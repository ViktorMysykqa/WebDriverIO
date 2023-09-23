describe("Test Case ID 6: Sorting", function () {
    it("Products Objective", async function () {

        browser.url("https://www.saucedemo.com/")

        const username = await $("input[id='user-name']")
        await username.setValue("standard_user")
        const password = await $("input[id='password']")
        await password.setValue("secret_sauce")
    
        const loginButton = await $("input[value='Login']")
        await loginButton.click()
  
        await expect(browser).toHaveUrlContaining("inventory")

      const sortingOptions = [
        "Price (low to high)",
        "Price (high to low)",
        "Name (A to Z)",
        "Name (Z to A)",
      ]
  
      for (const option of sortingOptions) {
       
        const sortDropdown = await $("select[data-test='product_sort_container']")
        await sortDropdown.selectByVisibleText(option)
  
        const productPrices = await $$("div[class='inventory_item_price']") 
        const productNames = await $$("div[class='inventory_item_name']") 
       
        if (option.includes("low to high")) {

          const sortedPrices = await Promise.all(
            productPrices.map(async (el) =>
              parseFloat((await el.getText()).replace('$', ''))
            )
          )
          const sortedPricesCopy = [...sortedPrices].sort((a, b) => a - b)

          expect(sortedPrices).toEqual(sortedPricesCopy)
        } else if (option.includes("high to low")) {
          const sortedPrices = await Promise.all(
            productPrices.map(async (el) =>
              parseFloat((await el.getText()).replace('$', ''))
            )
          )

          const sortedPricesCopy = [...sortedPrices].sort((a, b) => b - a);
          expect(sortedPrices).toEqual(sortedPricesCopy)
        } else if (option.includes("A to Z")) {
          const sortedNames = await Promise.all(
            productNames.map(async (el) =>
              (await el.getText()).toLowerCase()
            )
          )
          const sortedNamesCopy = [...sortedNames].sort()
          expect(sortedNames).toEqual(sortedNamesCopy)
        } else if (option.includes("Z to A")) {
          const sortedNames = await Promise.all(
            productNames.map(async (el) =>
              (await el.getText()).toLowerCase()
            )
          )
          const sortedNamesCopy = [...sortedNames].sort().reverse()
          expect(sortedNames).toEqual(sortedNamesCopy)
        }
      }
    })
  })