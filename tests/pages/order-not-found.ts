import { Locator, Page } from '@playwright/test'
import { BasePage } from './base-page'

export class OrderNotFoundPage extends BasePage {
  readonly notFoundTitle: Locator
  readonly pictureNotFound: Locator
  readonly notFoundDescription: Locator
  readonly logoutButton: Locator

  constructor(page: Page) {
    super(page)
    this.notFoundTitle = this.page.getByRole('heading', { name: 'Order not found' })
    this.pictureNotFound = this.page.getByTestId('username-input')
    this.notFoundDescription = this.page.getByText('Check the tracking code')
    this.logoutButton = this.page.getByTestId('logout-button')
  }
}
