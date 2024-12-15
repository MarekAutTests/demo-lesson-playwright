import { Locator, Page } from '@playwright/test'
import { BasePage } from './base-page'

export class OrderPage extends BasePage {
  //private page: Page
  readonly statusButton: Locator
  readonly orderCreatorName: Locator
  readonly orderCreatorPhone: Locator
  readonly orderComment: Locator
  readonly createOrderButton: Locator
  readonly logoutButton: Locator
  readonly orderCreatorPopup: Locator
  readonly orderSearchPopupFiled: Locator
  //readonly orderPopupTrackingButton : Locator
  //readonly orderPopupCloseButton : Locator
  // add more locators here

  constructor(page: Page) {
    super(page)
    //this.page = page
    this.statusButton = this.page.getByTestId('openStatusPopup-button')
    this.orderCreatorName = this.page.getByTestId('openStatusPopup-button')
    this.orderCreatorPhone = this.page.getByTestId('phone-input')
    this.orderComment = this.page.getByTestId('comment-input')
    this.createOrderButton = this.page.getByTestId('createOrder-button')
    this.logoutButton = this.page.getByTestId('logout-button')
    this.orderCreatorPopup = this.page.getByTestId('orderSuccessfullyCreated-popup')
    this.orderSearchPopupFiled = this.page.getByTestId('searchOrder-input')
    //this.page
  }
}
