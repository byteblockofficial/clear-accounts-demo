import { test, expect } from "@playwright/test";

test("empty submit shows validation errors", async ({ page }) => {
  await page.goto("/contact");
  await page.getByRole("button", { name: "Book free consultation" }).click();
  await expect(page.getByRole("alert").first()).toBeVisible();
});

test("aria-invalid set on errored fields", async ({ page }) => {
  await page.goto("/contact");
  await page.getByRole("button", { name: "Book free consultation" }).click();
  await expect(page.locator("#name")).toHaveAttribute("aria-invalid", "true");
  await expect(page.locator("#email")).toHaveAttribute("aria-invalid", "true");
});

test("shows success on mocked 200", async ({ page }) => {
  await page.route("/api/contact", (route) => route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ ok: true }) }));
  await page.goto("/contact");
  await page.fill("#name", "Test User");
  await page.fill("#email", "test@example.com");
  await page.fill("#message", "I'm a sole trader needing self-assessment help.");
  await page.getByRole("button", { name: "Book free consultation" }).click();
  await expect(page.getByRole("alert")).toContainText("Enquiry sent");
});

test("shows error on mocked 500", async ({ page }) => {
  await page.route("/api/contact", (route) => route.fulfill({ status: 500, contentType: "application/json", body: JSON.stringify({ error: "fail" }) }));
  await page.goto("/contact");
  await page.fill("#name", "Test User");
  await page.fill("#email", "test@example.com");
  await page.getByRole("button", { name: "Book free consultation" }).click();
  await expect(page.getByRole("alert")).toContainText("Something went wrong");
});
