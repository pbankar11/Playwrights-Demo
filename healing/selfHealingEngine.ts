//Handles locator failure and finds alternative selectors dynamically.

import fs from 'fs';
import { getFallbackLocators } from './locatorStrategies.js';

export async function healLocator(page, originalLocator, text) {

  console.log(`🔍 Healing for: ${originalLocator}`);

  const fallbacks = getFallbackLocators(text);

  for (const locator of fallbacks) {
    const element = page.locator(locator);

    if (await element.count() > 0) {
      console.log(`✅ Healed using: ${locator}`);

      updateLocatorDB(originalLocator, locator);
      return locator;
    }
  }

  throw new Error('❌ Unable to heal locator');
}

function updateLocatorDB(original, healed) {
  const dbPath = './framework/healing/locatorDB.json';
  const db = JSON.parse(fs.readFileSync(dbPath));

  if (!db[original]) {
    db[original] = [];
  }

  if (!db[original].includes(healed)) {
    db[original].push(healed);
  }

  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
}