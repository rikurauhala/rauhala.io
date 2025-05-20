import { test, expect } from "@playwright/test";

test.describe("Home page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("has correct title", async ({ page }) => {
    await expect(page).toHaveTitle("Riku Rauhala");
  });

  test("Top bar navigation", async ({ page }) => {
    await page.getByRole("link", { name: "Blog" }).click();
    await expect(page).toHaveURL(/.*blog/);
    await page.getByRole("link", { name: "Home" }).click();
    await expect(page).toHaveURL("/");
  });

  test.describe("Info section", () => {
    test("content", async ({ page }) => {
      const profilePicture = page.getByAltText(/Profile picture/);
      await expect(profilePicture).toBeVisible();

      const name = page.getByRole("heading", { name: "Riku Rauhala" });
      await expect(name).toBeVisible();

      const profession = page.getByText("Software Developer").first();
      await expect(profession).toBeVisible();

      const location = page.getByText("Helsinki, Finland");
      await expect(location).toBeVisible();
    });

    test.describe("Contact buttons", () => {
      test("GitHub button", async ({ page, context }) => {
        const pagePromise = context.waitForEvent("page");
        const gitHubButton = await page.getByRole("link", { name: "GitHub" });
        await expect(gitHubButton).toBeVisible();
        await expect(gitHubButton).toHaveAttribute(
          "href",
          "https://github.com/rikurauhala"
        );
        await expect(gitHubButton).toHaveAttribute("target", "_blank");
        await expect(gitHubButton).toHaveAttribute(
          "rel",
          "noopener noreferrer"
        );

        gitHubButton.click();
        const newPage = await pagePromise;
        await expect(newPage).toHaveURL("https://github.com/rikurauhala");
        await newPage.close();
      });

      test("LinkedIn button", async ({ page, context }) => {
        const pagePromise = context.waitForEvent("page");
        const linkedInButton = await page.getByRole("link", {
          name: "LinkedIn",
        });
        await expect(linkedInButton).toBeVisible();
        await expect(linkedInButton).toHaveAttribute(
          "href",
          "https://linkedin.com/in/rikurauhala"
        );
        await expect(linkedInButton).toHaveAttribute("target", "_blank");
        await expect(linkedInButton).toHaveAttribute(
          "rel",
          "noopener noreferrer"
        );

        linkedInButton.click();
        const newPage = await pagePromise;
        await expect(newPage).toHaveURL(/linkedin.com/);
        await newPage.close();
      });
    });
  });
});
