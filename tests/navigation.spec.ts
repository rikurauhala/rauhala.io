import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("Navigation bar", async ({ page }) => {
    const homeLink = page.getByRole("link", { name: "Home" });
    await expect(homeLink).toHaveAttribute("data-active", "");
    await expect(homeLink).toHaveAttribute("aria-current", "page");

    const blogLink = page.getByRole("link", { name: "Blog" });
    await expect(blogLink).not.toHaveAttribute("data-active", "");
    await expect(blogLink).not.toHaveAttribute("aria-current", "page");

    await page.getByRole("link", { name: "Blog" }).click();
    await expect(page).toHaveURL(/.*blog/);
    await expect(page).toHaveTitle("Blog - Riku Rauhala");

    await expect(blogLink).toHaveAttribute("data-active", "");
    await expect(blogLink).toHaveAttribute("aria-current", "page");

    await expect(homeLink).not.toHaveAttribute("data-active", "");
    await expect(homeLink).not.toHaveAttribute("aria-current", "page");

    await page.getByRole("link", { name: "Home" }).click();
    await expect(page).toHaveURL("/");
    await expect(page).toHaveTitle("Riku Rauhala");

    await expect(homeLink).toHaveAttribute("data-active", "");
    await expect(homeLink).toHaveAttribute("aria-current", "page");

    await expect(blogLink).not.toHaveAttribute("data-active", "");
    await expect(blogLink).not.toHaveAttribute("aria-current", "page");
  });

  test("Projects page redirects to front page", async ({ page }) => {
    await page.goto("/projects");
    await expect(page).toHaveURL("/");
  });

  test("Project page", async ({ page }) => {
    await page.getByRole("link", { name: "Oodikone" }).click();
    await expect(page).toHaveURL("/projects/oodikone");

    const homeLink = page.getByRole("link", { name: "Home" });
    await expect(homeLink).not.toHaveAttribute("data-active", "");
    await expect(homeLink).not.toHaveAttribute("aria-current", "page");

    const blogLink = page.getByRole("link", { name: "Blog" });
    await expect(blogLink).not.toHaveAttribute("data-active", "");
    await expect(blogLink).not.toHaveAttribute("aria-current", "page");
  });

  test("Not found page", async ({ page }) => {
    await page.goto("/this-page-does-not-exist");
    await expect(page).toHaveTitle("Not found - Riku Rauhala");

    const notFoundText = page.getByText("Not found");
    await expect(notFoundText).toBeVisible();
    const notFoundDescription = page.getByText("This page does not exist");
    await expect(notFoundDescription).toBeVisible();
    const notFoundLink = page.getByRole("link", {
      name: "Go back to the home page",
    });
    await expect(notFoundLink).toBeVisible();
    await notFoundLink.click();

    await expect(page).toHaveURL("/");
    await expect(page).toHaveTitle("Riku Rauhala");

    const homeLink = page.getByRole("link", { name: "Home" });
    await expect(homeLink).toHaveAttribute("data-active", "");
    await expect(homeLink).toHaveAttribute("aria-current", "page");

    const blogLink = page.getByRole("link", { name: "Blog" });
    await expect(blogLink).not.toHaveAttribute("data-active", "");
    await expect(blogLink).not.toHaveAttribute("aria-current", "page");
  });
});
