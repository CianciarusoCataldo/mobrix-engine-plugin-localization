import { LocalizationPluginI18nSettings } from "../types";

/**
 * {@link https://github.com/CianciarusoCataldo/mobrix-engine-plugin-localization MoBrix-engine-plugin-localization} slice initial i18next configuration (default)
 *
 * @see https://github.com/CianciarusoCataldo/mobrix-engine/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
const i18nDefaultSettings: LocalizationPluginI18nSettings = {
  debug: false,
  fallbackLanguage: "en",
  supportedLanguages: ["en"],
  defaultNamespace: "",
  loadPath: "/locales/{{lng}}/{{ns}}.json",
  namespaces: [],
  titlesNamespace: null,
};

export default i18nDefaultSettings;
