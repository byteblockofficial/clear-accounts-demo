import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("h1 is visible and contains 'Manchester'", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Manchester");
});

test("ICAEW badge is visible", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("ICAEW Chartered").first()).toBeVisible();
});

test("free consultation CTA is visible", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("link", { name: "Book a free consultation" }).first()).toBeVisible();
});

test("3 testimonial blockquotes are visible", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("blockquote")).toHaveCount(3);
});

test("home page has no critical a11y violations", async ({ page }) => {
  await page.goto("/");
  const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa"]).analyze();
  expect(results.violations.filter((v) => v.impact === "critical" || v.impact === "serious")).toHaveLength(0);
});
