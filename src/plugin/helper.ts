/**
 * @file {@link https://github.com/CianciarusoCataldo/mobrix-engine-plugin-localization MoBrix-engine-plugin-localization} helpers file
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

import { TFunction } from "react-i18next";

/**
 * Update app page title (currently displayed on browser tab) depending on actual route
 *
 * @param {Config} CONFIG config object
 * @param {TFunction} translation function
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
export const updateTitle = ({
  key,
  appName,
  ns,
  tFunction,
}: {
  key?: string;
  ns?: string;
  appName?: string;
  tFunction: TFunction;
}) => {
  let name = appName ? appName.trim() : null;

  let title = key && ns ? tFunction(key, { ns, defaultValue: " " }).trim() : "";

  const pageTitle = `${name || ""} ${name && title ? "-" : ""} ${title || ""}`;

  window.document.title = pageTitle;
};
