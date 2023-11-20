import { test, expect } from "@playwright/test";
import { FRONTEND_URL } from "~utils/envs";
import { setFile } from "../utils";

test("Main page loads", async ({ page }) => {
  await page.goto(FRONTEND_URL);

  await expect(
    page.getByRole("heading", {
      name: "Jumpstart Your Lean Startup with Developer-Friendly Boilerplate",
    }),
  ).toBeVisible();
});

test("Form request works", async ({ page }) => {
  await page.goto(FRONTEND_URL);

  await page.getByLabel("Name").fill("Tester");
  await page.getByLabel("Email").fill("tester@example.com");
  page.getByText("I agree with Terms and Conditions").click();

  await page.getByRole("button", { name: "Send Request" }).click();

  await expect(page.getByText("Form was successfully submitted")).toBeVisible({
    timeout: 50000,
  });
});

test("Form validation works", async ({ page }) => {
  await page.goto(FRONTEND_URL);

  page.getByText("Send Request").click();

  await expect(page.getByText("Required field").count()).toBe(3);
});

test("Fill all form inputs works", async ({ page }) => {
  await page.goto(FRONTEND_URL);

  await page.getByLabel("Name").fill("Tester");
  await page.getByLabel("Email").fill("tester@example.com");
  await page.locator("#inputs_2__options").click();
  await page.locator("#inputs_2__options").locator(".options").first().click();
  await page.getByRole("option", { name: "No" }).click();

  await page.getByLabel("Question").fill("Big question description");

  await page.getByPlaceholder("Select release date").click();
  await page
    .locator(".react-calendar__tile.react-calendar__month-view__days__day")
    .first()
    .click();

  page.getByText("I agree with Terms and Conditions").click();

  await setFile({
    page: page,
    htmlNodeId: "#inputs_7__files",
    files: ["./sps-lite/project1.jpg"],
  });

  page.getByRole("button", { name: "Send Request" }).click();

  await expect(page.getByText("Form was successfully submitted")).toBeVisible({
    timeout: 50000,
  });
});
