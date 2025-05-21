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
        const gitHubButton = page.getByRole("link", { name: "GitHub" });
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
        const linkedInButton = page.getByRole("link", { name: "LinkedIn" });
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

      test("Email button", async ({ page }) => {
        const emailButton = page.getByRole("link", { name: "Email" });
        await expect(emailButton).toBeVisible();
        await expect(emailButton).toHaveAttribute("href", /^mailto:.*@.*\.io$/);
      });
    });
  });

  test("About section", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "About" })).toBeVisible();
    await expect(page.getByText("Hi there!")).toBeVisible();
  });

  test.describe("Project section", () => {
    test("content", async ({ page }) => {
      await expect(
        page.getByRole("heading", { name: "Projects" })
      ).toBeVisible();
      await expect(page.getByText("Over the years")).toBeVisible();
    });

    test("Project cards", async ({ page }) => {
      const projects = [
        "Oodikone",
        "Berry Picker Tracker",
        "Portfolio",
        "Teaching assistant",
      ];

      for (const project of projects) {
        const projectCard = page.getByRole("heading", { name: project });
        await expect(projectCard).toBeVisible();
      }
    });
  });

  test.skip("Contact section", async () => {
    // To be implemented
  });

  test("Footer", async ({ page }) => {
    const sourceCodeLink = page.getByRole("link", { name: "Source code" });
    await expect(sourceCodeLink).toHaveAttribute(
      "href",
      "https://github.com/rikurauhala/rauhala-io"
    );

    const licenseLink = page.getByRole("link", { name: "License" });
    await expect(licenseLink).toHaveAttribute(
      "href",
      "https://github.com/rikurauhala/rauhala-io/blob/main/LICENSE.md"
    );

    const creditsLink = page.getByRole("link", { name: "Credits" });
    await expect(creditsLink).toHaveAttribute(
      "href",
      "https://github.com/rikurauhala/rauhala-io/blob/main/CREDITS.md"
    );

    const changelogLink = page.getByRole("link", { name: "Changelog" });
    await expect(changelogLink).toHaveAttribute(
      "href",
      "https://github.com/rikurauhala/rauhala-io/releases"
    );

    const copyright = page.getByText(/© 2025 Riku Rauhala/);
    await expect(copyright).toBeVisible();

    const version = page.getByText(/Version \d+\.\d+\.\d+/);
    await expect(version).toBeVisible();
  });
});
