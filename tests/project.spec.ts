import { test, expect } from "@playwright/test";

test.describe("Project page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/projects/portfolio");
  });

  test("has correct title", async ({ page }) => {
    await expect(page).toHaveTitle("Portfolio - Riku Rauhala");
  });

  test("has correct project name", async ({ page }) => {
    const projectName = page.getByRole("heading", { name: "Portfolio" });
    await expect(projectName).toBeVisible();
  });
});
