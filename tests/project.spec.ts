import { expect, test } from "@playwright/test";

test.describe("Project page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/projects/portfolio");
  });

  test("has correct title", async ({ page }) => {
    await expect(page).toHaveTitle("Portfolio - Riku Rauhala");
  });

  test("has last modified date", async ({ page }) => {
    const lastModifiedText = page.getByText("Last modified on");
    const lastModifiedYear = "2025";
    await expect(lastModifiedText).toBeVisible();
    await expect(lastModifiedText).toContainText(lastModifiedYear);
  });

  test("has correct project name", async ({ page }) => {
    const projectName = page.getByRole("heading", { name: "Portfolio" });
    await expect(projectName).toBeVisible();
  });

  test("has contribution notice", async ({ page }) => {
    const contributionNoticeText = page.getByText("Did you notice a typo?");
    await expect(contributionNoticeText).toBeVisible();
    const contributionNoticeLink = page.getByRole("link", {
      name: "Edit this file on GitHub",
    });
    await expect(contributionNoticeLink).toBeVisible();
    await expect(contributionNoticeLink).toHaveAttribute(
      "href",
      expect.stringContaining("src/content/projects/portfolio.md")
    );
  });
});
