import { editor } from "$sb/silverbullet-syscall/mod.ts";
import { store } from "$sb/plugos-syscall/mod.ts";

// Run on "editor:init"
export async function setEditorMode() {
  if (await store.get("vimMode")) {
    await editor.setUiOption("vimMode", true);
  }
  if (await store.get("darkMode")) {
    await editor.setUiOption("darkMode", true);
  }
  if (await store.get("spellcheckEnabled")) {
    await editor.setUiOption("spellcheckEnabled", true);
  }
}

async function toggleUIMode(setting: string) {
  let mode = await store.get(setting);
  mode = !mode;

  await editor.setUiOption(setting, mode);
  await store.set(setting, mode);
}

export async function toggleDarkMode() {
  await toggleUIMode("darkMode");
}

export async function toggleSpellcheck() {
  await toggleUIMode("spellcheckEnabled");
}