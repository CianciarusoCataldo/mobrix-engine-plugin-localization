/**
 * @file {@link https://github.com/CianciarusoCataldo/mobrix-engine-plugin-localization MoBrix-engine-plugin-localization} init file
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

/** utils */
import { computeValue, fillObject } from "mobrix-utils";

/** internal  */
import i18nDefaultSettings from "./i18n/default-settings";
import { initi18n, setI18nLanguage } from "./i18n/utils";
import i18nInstance from "./i18n/instance";

import { LocalizationPlugin } from "./types";
import { updateTitle } from "./helper";
import * as actions from "./actions";
import localizationReducer from "./reducer";
import { createMoBrixEnginePlugin } from "mobrix-engine-tools";

/**
 * Improve {@link https://github.com/CianciarusoCataldo/mobrix-engine-plugin-localization MoBrix-engine-plugin-localization} system with a fully working localization system, with multi-language support, based on [118next](https://www.i18next.com/)
 *
 * @returns `localization` plugin
 *
 * @example <caption> Basic scenario - custom localization settings inside MoBrix-engine config</caption>
 *
 * const localizationPlugin = require("mobrix-engine-plugin-localization");
 *
 * const config = {
 *   appName: "custom-app",
 *   plugins: [localizationPlugin],
 *   localization: {
 *     namespaces: ["custom", "common"],
 *     debug: false,
 *     fallbackLanguage: "en",
 *     supportedLanguages: ["en"],
 *     defaultNamespace: "",
 *     loadPath: "/custom-locales/{{lng}}/{{ns}}.json",
 *     titlesNamespace: "titles",
 *  },
 * };
 *
 * module.exports = { config };
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
const localizationPlugin: LocalizationPlugin = createMoBrixEnginePlugin(
  "mobrix-engine-localization",
  () => {
    const language =
      computeValue(() => navigator.language.split("-")[0], "") || "";

    let pending: string | null = null;

    return {
      reducer: (config) => ({
        slice: "localization",
        effects: localizationReducer,
        initialState: {
          ...config.localization,
          language,
        },
      }),
      field: (config) => {
        const i18n = fillObject({
          toFill: config.localization,
          defaultObj: i18nDefaultSettings,
        });
        initi18n({ ...i18n, language }, (t) => {
          if (pending) {
            updateTitle({
              tFunction: t,
              key: pending,
              ns: i18n.titlesNamespace,
              appName: config.appName,
            });

            pending = null;
          }
        });

        return {
          name: "localization",
          content: fillObject({
            toFill: config.localization,
            defaultObj: i18nDefaultSettings,
          }),
        };
      },
      interactions: [
        {
          plugin: "mobrix-engine-url-checker",
          effect: (field, config) => {
            field.queryParameters["lang"] = ({ store, urlParam, config }) => {
              store.dispatch(actions.changeLanguage(urlParam));

              return config;
            };

            field.after.push("lang");

            return field;
          },
        },
        {
          plugin: "mobrix-engine-router",
          effect: (field, config) => {
            let i18n = config.localization || i18nDefaultSettings;

            const ns = i18n.titlesNamespace || "";

            if (i18nInstance.isInitialized) {
              pending = null;

              updateTitle({
                tFunction: i18nInstance.t,
                key: field.initialRouteKey,
                ns,
                appName: config.appName,
              });
            } else {
              pending = field.initialRouteKey;
            }

            field.onLocationChange.push((path, routeKey) => {
              i18nInstance.isInitialized &&
                updateTitle({
                  key: routeKey,
                  ns,
                  appName: config.appName,
                  tFunction: i18nInstance.t,
                });
            });

            return field;
          },
        },
      ],
      middlewares: (config) => ({
        middlewares: [
          (action, store) => {
            const state = store.getState();

            switch (action.type) {
              case actions.changeLanguage.type:
                {
                  state.localization.supportedLanguages.includes(
                    action.payload.language
                  ) &&
                    i18nInstance.isInitialized &&
                    setI18nLanguage({
                      language: action.payload.language,
                      callback: (t) => {
                        state.router &&
                          state.router.routeKey &&
                          updateTitle({
                            key: state.router.routeKey,
                            tFunction: t,
                            appName: config.appName,
                            ns: config.localization.titlesNamespace,
                          });
                      },
                    });
                }
                break;
            }
          },
        ],
      }),
    };
  }
);

export default localizationPlugin;
