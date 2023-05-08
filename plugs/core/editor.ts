import { clientStore, editor } from "$sb/silverbullet-syscall/mod.ts";

// Run on "editor:init"
export async function setEditorMode() {
  if (await clientStore.get("vimMode")) {
    await editor.setUiOption("vimMode", true);
  }
  if (await clientStore.get("darkMode")) {
    await editor.setUiOption("darkMode", true);
  }
}

export async function toggleSpellcheck() {
  let spellCheck = await clientStore.get("spellcheckEnabled");
  spellCheck = !spellCheck

  await editor.setUiOption("spellcheckEnabled", spellCheck);
  await clientStore.set("spellcheckEnabled", spellCheck);
}

export async function toggleDarkMode() {
  let darkMode = await clientStore.get("darkMode");
  darkMode = !darkMode;
  await editor.setUiOption("darkMode", darkMode);
  await clientStore.set("darkMode", darkMode);
}
