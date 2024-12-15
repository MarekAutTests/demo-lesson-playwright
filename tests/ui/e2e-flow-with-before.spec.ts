import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/login-page'
import { faker } from '@faker-js/faker/locale/ar'
import { PASSWORD, USERNAME } from '../../config/env-data'

let authPage: LoginPage

test.beforeEach(async ({ page }) => {
  authPage = new LoginPage(page)
  await authPage.open()
})

test('signIn button disabled when incorrect data inserted', async ({}) => {
  await authPage.usernameField.fill(faker.lorem.word(2))
  await authPage.passwordField.fill(faker.lorem.word(7))
  await expect.soft(authPage.signInButton).toBeDisabled()
})

//npx playwright test --ui
test('error message displayed when incorrect credentials used', async ({}) => {
  // implement test
  const orderCreationPage = await authPage.signIn('test', 'test1234')
  await expect.soft(authPage.incorrectCredentialsPopup).toBeVisible()
  await expect.soft(authPage.incorrectCredentialsPopup).toContainText('Incorrect credentials')
})

//npx playwright test --project=chromium --debug
test('login with correct credentials and verify order creation page', async ({}) => {
  //const orderCreationPage = await authPage.signIn(USERNAME, PASSWORD)
  const orderCreationPage = await authPage.signIn('marek_vorp_', 'M3n4O5p6')
  await expect.soft(orderCreationPage.statusButton).toBeVisible()
  await expect.soft(orderCreationPage.orderCreatorName).toBeVisible()
  await expect.soft(orderCreationPage.orderCreatorPhone).toBeVisible()
  await expect.soft(orderCreationPage.orderComment).toBeVisible()
  await expect.soft(orderCreationPage.createOrderButton).toBeVisible()
})

test('login and create order', async ({}) => {
  const orderCreationPage = await authPage.signIn('marek_vorp_', 'M3n4O5p6')
  await orderCreationPage.orderCreatorName.fill(faker.lorem.word(4))
  await orderCreationPage.orderCreatorPhone.fill(faker.lorem.lines(6))
  await orderCreationPage.orderComment.fill(faker.lorem.words(6))
  await orderCreationPage.createOrderButton.click()
  await orderCreationPage.orderCreatorPopup.isVisible()
})
