import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

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
