import { expect, test } from '@playwright/test'

test.describe('arrow keybinds', async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/keybinds')
  })

  test('arrow up/down changes selected item', async ({ page }) => {
    await expect(page.locator(`[cmdk-item][aria-selected="true"]`)).toHaveAttribute('data-value', 'first')
    await page.locator(`[cmdk-input]`).press('ArrowDown')
    await expect(page.locator(`[cmdk-item][aria-selected="true"]`)).toHaveAttribute('data-value', 'a')
    await page.locator(`[cmdk-input]`).press('ArrowUp')
    await expect(page.locator(`[cmdk-item][aria-selected="true"]`)).toHaveAttribute('data-value', 'first')
  })

  test('meta arrow up/down goes to first and last item', async ({ page }) => {
    await expect(page.locator(`[cmdk-item][aria-selected="true"]`)).toHaveAttribute('data-value', 'first')
    await page.locator(`[cmdk-input]`).press('Meta+ArrowDown')
    await expect(page.locator(`[cmdk-item][aria-selected="true"]`)).toHaveAttribute('data-value', 'last')
    await page.locator(`[cmdk-input]`).press('Meta+ArrowUp')
    await expect(page.locator(`[cmdk-item][aria-selected="true"]`)).toHaveAttribute('data-value', 'first')
  })

  test('alt arrow up/down goes to next and prev item', async ({ page }) => {
    await expect(page.locator(`[cmdk-item][aria-selected="true"]`)).toHaveAttribute('data-value', 'first')
    await page.locator(`[cmdk-input]`).press('Alt+ArrowDown')
    await expect(page.locator(`[cmdk-item][aria-selected="true"]`)).toHaveAttribute('data-value', 'a')
    await page.locator(`[cmdk-input]`).press('Alt+ArrowDown')
    await expect(page.locator(`[cmdk-item][aria-selected="true"]`)).toHaveAttribute('data-value', 'apple')
    await page.locator(`[cmdk-input]`).press('Alt+ArrowUp')
    await expect(page.locator(`[cmdk-item][aria-selected="true"]`)).toHaveAttribute('data-value', 'a')
    await page.locator(`[cmdk-input]`).press('Alt+ArrowUp')
    await expect(page.locator(`[cmdk-item][aria-selected="true"]`)).toHaveAttribute('data-value', 'first')
  })
})

test.describe('vim jk keybinds', async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/keybinds')
  })

  test('ctrl j/k changes selected item', async ({ page }) => {
    await expect(page.locator(`[cmdk-item][aria-selected="true"]`)).toHaveAttribute('data-value', 'first')
    await page.locator(`[cmdk-input]`).press('Control+j')
    await expect(page.locator(`[cmdk-item][aria-selected="true"]`)).toHaveAttribute('data-value', 'a')
    await page.locator(`[cmdk-input]`).press('Control+k')
    await expect(page.locator(`[cmdk-item][aria-selected="true"]`)).toHaveAttribute('data-value', 'first')
  })

  test('meta ctrl j/k goes to first and last item', async ({ page }) => {
    await expect(page.locator(`[cmdk-item][aria-selected="true"]`)).toHaveAttribute('data-value', 'first')
    await page.locator(`[cmdk-input]`).press('Meta+Control+j')
    await expect(page.locator(`[cmdk-item][aria-selected="true"]`)).toHaveAttribute('data-value', 'last')
    await page.locator(`[cmdk-input]`).press('Meta+Control+k')
    await expect(page.locator(`[cmdk-item][aria-selected="true"]`)).toHaveAttribute('data-value', 'first')
  })

  test('alt ctrl j/k goes to next and prev item', async ({ page }) => {
    await expect(page.locator(`[cmdk-item][aria-selected="true"]`)).toHaveAttribute('data-value', 'first')
    await page.locator(`[cmdk-input]`).press('Alt+Control+j')
    await expect(page.locator(`[cmdk-item][aria-selected="true"]`)).toHaveAttribute('data-value', 'a')
    await page.locator(`[cmdk-input]`).press('Alt+Control+j')
    await expect(page.locator(`[cmdk-item][aria-selected="true"]`)).toHaveAttribute('data-value', 'apple')
    await page.locator(`[cmdk-input]`).press('Alt+Control+k')
    await expect(page.locator(`[cmdk-item][aria-selected="true"]`)).toHaveAttribute('data-value', 'a')
    await page.locator(`[cmdk-input]`).press('Alt+Control+k')
    await expect(page.locator(`[cmdk-item][aria-selected="true"]`)).toHaveAttribute('data-value', 'first')
  })
})