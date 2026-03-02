import { expect, test } from "@playwright/test";

test.describe("Home page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("has correct title", async ({ page }) => {
    await expect(page).toHaveTitle("Riku Rauhala");
  });

  test.describe("Info section", () => {
    test("content", async ({ page }) => {
      const profilePicture = page.getByAltText(/Profile picture/);
      await expect(profilePicture).toBeVisible();

      const name = page.getByRole("heading", { name: "Riku Rauhala" });
      await expect(name).toBeVisible();

      const profession = page.getByText("Software Developer").first();
      await expect(profession).toBeVisible();

      const education = page.getByText("B.Sc. in Computer Science");
      await expect(education).toBeVisible();

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
          "https://github.com/rikurauhala",
        );
        await expect(gitHubButton).toHaveAttribute("target", "_blank");
        await expect(gitHubButton).toHaveAttribute(
          "rel",
          "noopener noreferrer",
        );

        gitHubButton.click();
        const newPage = await pagePromise;
        await expect(newPage).toHaveURL("https://github.com/rikurauhala");
        await newPage.close();
      });

      test("LinkedIn button", async ({ page, context }) => {
        const pagePromise = context.waitForEvent("page");
        const linkedInButton = page
          .getByRole("link", { name: "LinkedIn" })
          .first();
        await expect(linkedInButton).toBeVisible();
        await expect(linkedInButton).toHaveAttribute(
          "href",
          "https://linkedin.com/in/rikurauhala",
        );
        await expect(linkedInButton).toHaveAttribute("target", "_blank");
        await expect(linkedInButton).toHaveAttribute(
          "rel",
          "noopener noreferrer",
        );

        linkedInButton.click();
        const newPage = await pagePromise;
        await expect(newPage).toHaveURL(/linkedin.com/);
        await newPage.close();
      });

      test("Email button", async ({ page }) => {
        const emailButton = page.getByRole("link", { name: "Email" }).first();
        await expect(emailButton).toBeVisible();
        await expect(emailButton).toHaveAttribute("href", /mailto:/);
      });
    });
  });

  test("About section", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "About" })).toBeVisible();
    await expect(page.getByText("Hello there!")).toBeVisible();
  });

  test("Career section", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "Career" })).toBeVisible();

    await expect(page.getByText(/Taito United/)).toBeVisible();
    await expect(page.getByText(/June 2025/)).toBeVisible();
  });

  test("Education section", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Education" }),
    ).toBeVisible();

    await expect(
      page.getByText("Master of Science in Computer Science"),
    ).toBeVisible();
    await expect(
      page.getByText("University of Helsinki • January 2024 – Present"),
    ).toBeVisible();
    await expect(
      page.getByText("Currently pursuing my master's degree"),
    ).toBeVisible();

    await expect(
      page.getByText("Bachelor of Science in Computer Science"),
    ).toBeVisible();
    await expect(
      page.getByText("University of Helsinki • September 2020 – January 2024"),
    ).toBeVisible();
    await expect(
      page.getByText("Completed my bachelor's degree in computer science"),
    ).toBeVisible();
  });

  test("Contact section", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "Contact" })).toBeVisible();
    await expect(page.getByText("Let's get in touch!")).toBeVisible();
    const emailLink = page.getByRole("link", { name: "reach me via email" });
    await expect(emailLink).toHaveAttribute("href", /mailto:/);
    const linkedInLink = page.getByRole("link", {
      name: "send me a message on LinkedIn",
    });
    await expect(linkedInLink).toHaveAttribute(
      "href",
      "https://linkedin.com/in/rikurauhala",
    );
  });

  test("Footer", async ({ page }) => {
    const sourceCodeLink = page.getByRole("link", { name: "Source code" });
    await expect(sourceCodeLink).toHaveAttribute(
      "href",
      "https://github.com/rikurauhala/rauhala.io",
    );

    const licenseLink = page.getByRole("link", { name: "License" });
    await expect(licenseLink).toHaveAttribute(
      "href",
      "https://github.com/rikurauhala/rauhala.io/blob/main/LICENSE.md",
    );

    const creditsLink = page.getByRole("link", { name: "Credits" });
    await expect(creditsLink).toHaveAttribute(
      "href",
      "https://github.com/rikurauhala/rauhala.io/blob/main/docs/credits.md",
    );

    const changelogLink = page.getByRole("link", { name: "Changelog" });
    await expect(changelogLink).toHaveAttribute(
      "href",
      "https://github.com/rikurauhala/rauhala.io/releases",
    );

    const copyright = page.getByText(/© 2026 Riku Rauhala/);
    await expect(copyright).toBeVisible();

    const version = page.getByText(/Version \d+\.\d+\.\d+/);
    await expect(version).toBeVisible();
  });
});
