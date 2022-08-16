/**
 * @file {@link https://github.com/CianciarusoCataldo/mobrix-engine-plugin-localization MoBrix-engine-plugin-localization} actions
 *
 * @see https://github.com/CianciarusoCataldo/mobrix-engine-plugin-localization/#/guide?id=actions
 *
 * @see https://github.com/CianciarusoCataldo/mobrix-engine
 *
 * @see https://www.i18next.com/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */

import { createMoBrixEngineAction } from "mobrix-engine-tools";

/**
 * Change {@link https://github.com/CianciarusoCataldo/mobrix-engine-plugin-localization MoBrix-engine-plugin-localization} language
 *
 * @see https://github.com/CianciarusoCataldo/mobrix-engine-plugin-localization/#/guide?id=actions
 *
 * @see https://github.com/CianciarusoCataldo/mobrix-engine
 *
 * @see https://www.i18next.com/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export const changeLanguage = createMoBrixEngineAction<{ language: string }>(
  "@@localization/LANGUAGE_CHANGE",
  (language) => ({
    language,
  })
);
