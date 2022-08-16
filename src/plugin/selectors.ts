/**
 * @file {@link https://github.com/CianciarusoCataldo/mobrix-engine-plugin-localization MoBrix-engine-plugin-localization} selectors file
 *
 * @see https://github.com/CianciarusoCataldo/mobrix-engine-plugin-localization
 *
 * @see https://github.com/CianciarusoCataldo/mobrix-engine
 *
 * @see https://www.i18next.com/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 *
 */

import { MoBrixEngineGlobalState } from "mobrix-engine-types";

import { createMoBrixEngineSelector } from "mobrix-engine-tools";

import { LocalizationPluginState } from "./types";
import i18nDefaultSettings from "./i18n/default-settings";
import localizationInitialState from "./initial-state";

/**
 * Returns {@link https://github.com/CianciarusoCataldo/mobrix-engine-plugin-localization MoBrix-engine-plugin-localization} slice,
 * or the default slice state if the plugin is not enabled
 *
 * @see https://github.com/CianciarusoCataldo/mobrix-engine-plugin-localization
 *
 * @see https://github.com/CianciarusoCataldo/mobrix-engine
 *
 * @see https://www.i18next.com/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 *
 */
export const getLocalizationConfig = (
  state: MoBrixEngineGlobalState<{ localization?: LocalizationPluginState }>
): LocalizationPluginState =>
  state.localization || { ...localizationInitialState, ...i18nDefaultSettings };

/**
 * Returns actual {@link https://github.com/CianciarusoCataldo/mobrix-engine-plugin-localization MoBrix-engine-plugin-localization} language
 *
 * @see https://github.com/CianciarusoCataldo/mobrix-engine-plugin-localization
 *
 * @see https://github.com/CianciarusoCataldo/mobrix-engine
 *
 * @see https://www.i18next.com/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export const getLanguage = createMoBrixEngineSelector(
  getLocalizationConfig,
  (localization) => localization.language
);

/**
 * Returns {@link https://github.com/CianciarusoCataldo/mobrix-engine-plugin-localization MoBrix-engine-plugin-localization} supported languages
 *
 * @see https://github.com/CianciarusoCataldo/mobrix-engine-plugin-localization
 *
 * @see https://github.com/CianciarusoCataldo/mobrix-engine
 *
 * @see https://www.i18next.com/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export const getLanguages = createMoBrixEngineSelector(
  getLocalizationConfig,
  ({ supportedLanguages }) => supportedLanguages
);
