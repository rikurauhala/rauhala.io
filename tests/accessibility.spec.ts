import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("Accessibility", () => {
  const pagesToTest = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "Project", path: "/projects/portfolio" },
    { name: "Not found", path: "/not-found" },
  ];

  pagesToTest.forEach((pageToTest) => {
    test.describe(pageToTest.name, () => {
      test("page does not have accessibility issues", async ({ page }) => {
        await page.goto(pageToTest.path);

        const scanResults = await new AxeBuilder({ page }).analyze();

        expect(scanResults.violations).toEqual([]);
      });
    });
  });

  const expectedActiveElements = [
    "Home",
    "Blog",
    "GitHub icon GitHub",
    "LinkedIn icon LinkedIn",
    "Email icon Email",
    "Berry Picker Tracker",
    "Oodikone",
    "Portfolio",
    "Teaching assistant",
    "reach me via email",
    "send me a message on LinkedIn",
    "Source code opens in new tab",
    "License opens in new tab",
    "Credits opens in new tab",
    "Changelog opens in new tab",
  ] as const;

  test("Home page tabbing order is correct", async ({ page }) => {
    await page.goto("/");

    await page.keyboard.press("Tab");

    for (const expectedText of expectedActiveElements) {
      const activeElement = await page.evaluateHandle(
        () => document.activeElement as HTMLElement
      );
      const activeElementText = await activeElement.evaluate((element) =>
        element.innerText.trim().replace(/\s+/g, " ")
      );

      expect(activeElementText).toBe(expectedText);

      await page.keyboard.press("Tab");
    }
  });
});
