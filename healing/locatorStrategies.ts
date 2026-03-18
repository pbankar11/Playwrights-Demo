//👉 Defines different fallback locator strategies like text, role, and test-id.
export function getFallbackLocators(text: string) {
  return [
    `text=${text}`,
    `button:has-text("${text}")`,
    `[data-testid*="${text.toLowerCase()}"]`
  ];
}