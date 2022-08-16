export { default as localizationPlugin } from "./plugin";

export { changeLanguage } from "./plugin/actions";

export {
  getLocalizationConfig,
  getLanguage,
  getLanguages,
} from "./plugin/selectors";

export {
  LocalizationPluginI18nSettings,
  LocalizationPlugin,
  LocalizationPluginSettings,
  LocalizationPluginState,
} from "./plugin/types";
