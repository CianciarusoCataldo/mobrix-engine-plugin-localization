/**
 * @file {@link https://github.com/CianciarusoCataldo/mobrix-engine-plugin-localization MoBrix-engine-plugin-localization} types definitions
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */

import {
  MoBrixEngineCustomState,
  MoBrixEnginePlugin,
} from "mobrix-engine-types";

/**
 * {@link https://github.com/CianciarusoCataldo/mobrix-engine-plugin-localization MoBrix-engine-plugin-localization} state slice
 *
 * @see https://github.com/CianciarusoCataldo/mobrix-engine-plugin-localization
 *
 * @see https://github.com/CianciarusoCataldo/mobrix-engine
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 *
 */
export type LocalizationPluginState = MoBrixEngineCustomState<
  {
    language: string;
  } & LocalizationPluginI18nSettings
>;

export type LocalizationPluginSettings = {
  localization?: LocalizationPluginI18nSettings & {
    onLanguageChange?: ((lang: string) => void)[];
  };
};

/**
 * {@link https://github.com/CianciarusoCataldo/mobrix-engine-plugin-localization MoBrix-engine-plugin-localization} settings type definitions
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
export type LocalizationPluginI18nSettings = MoBrixEngineCustomState<{
  fallbackLanguage: string;
  supportedLanguages: string[];
  namespaces: string[];
  loadPath: string;
  defaultNamespace: string;
  titlesNamespace: string | null;
}>;

/**
 * {@link https://github.com/CianciarusoCataldo/mobrix-engine-plugin-localization MoBrix-engine-plugin-localization} type definitions
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
export type LocalizationPlugin = MoBrixEnginePlugin<LocalizationPluginSettings>;
