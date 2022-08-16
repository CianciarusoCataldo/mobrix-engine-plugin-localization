/**
 * @file {@link https://github.com/CianciarusoCataldo/mobrix-engine-plugin-localization MoBrix-engine-plugin-localization} initial state file
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

import i18nDefaultSettings from "./i18n/default-settings";
import { LocalizationPluginState } from "./types";

/**
 * {@link https://github.com/CianciarusoCataldo/mobrix-engine-plugin-localization MoBrix-engine-plugin-localization} initial state
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
const initialState: LocalizationPluginState = {
  language: "",
  ...i18nDefaultSettings,
};

export default initialState;
