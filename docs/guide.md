# MoBrix-engine-plugin-localization

![NPM](https://img.shields.io/npm/l/mobrix-engine-plugin-localization?label=License&style=for-the-badge)
![npm](https://img.shields.io/npm/v/mobrix-engine-plugin-localization?color=orange%20&label=Latest%20version&style=for-the-badge&logo=npm)
![npm bundle size](https://img.shields.io/bundlephobia/min/mobrix-engine-plugin-localization?label=Package%20size&style=for-the-badge)
![Maintenance](https://img.shields.io/maintenance/yes/2025?label=Maintained&style=for-the-badge)

---

<br>

Improve [MoBrix-engine](https://github.com/CianciarusoCataldo/mobrix-engine) system with a fully working localization system

<br>

---

## Getting started

<br>

### Installation

Check [MoBrix-engine](https://github.com/CianciarusoCataldo/mobrix-engine) guide to init the system

If you want to use this plugin with [MoBrix-engine](https://github.com/CianciarusoCataldo/mobrix-engine), install it:

```sh
npm i mobrix-engine-plugin-localization
```

<br>

### Usage

Include this plugin inside your MoBrix-engine config file, and optionally set the `localization` field as an object, with the plugin settings:

```tsx
const localizationPlugin = require("mobrix-engine-plugin-localization");

const config = {
  appName: "custom-app",
  plugins: [localizationPlugin],
  localization: {
    namespaces: ["custom", "common"],
    debug: false,
    fallbackLanguage: "en",
    supportedLanguages: ["en"],
    defaultNamespace: "",
    loadPath: "/custom-locales/{{lng}}/{{ns}}.json",
    titlesNamespace: null,
  },
};

module.exports = { config };
```

<br>

Create a json file, following the same path structure specified with `loadPath` parameter. For example, using this `loadPath`:

```
/locales/{{lng}}/{{ns}}
```

the localization instance will search for copies, starting from the `public` folder, inside `locales` folder, using actual `language` (`{{lng}}`) and used `namespace` (`{{ns}}`) to determine where to find the correct json file. So, you need a json file for each namespace, for each language. Check https://github.com/i18next/i18next-http-backend#backend-options for details. For completeness, this is a valid json, that need to be located inside `<public_folder>/locales/en/custom.json`:

```json
{
  "custom_key": "Hey, this is a localized copy !"
}
```

Then you can retrieve it, with localization hooks, inside your components:

```tsx
import { useTranslation } from "react-i18next";

export const CustomComponent = () => {
  const { t } = useTranslation("custom");

  return (
    <div>
      <span>{t("custom_key")}</span>
    </div>
  );
};
```

## API

With the plugin itself, some other useful selectors and actions are exported by this lib, to easily work with any component

### Config

This plugin adds a custom field inside the mobrix-engine config, localization. This new field contains some configuration options, used by [i18-next](https://www.i18next.com/):

- `onLanguageChange` : callbacks called everytime the language is changed
- `namespaces` : i18next preloaded namespaces
- `supportedLanguages` : i18next preloaded namespaces
- `fallbackLanguage`: default language, used when a copy is not available in a specific language
- `loadPath`: copies JSON files path
- `defaultNamespace`: default i18next namespace
- `titlesNamespace`: namespaces specifically used to determine page titles (to be used with [router plugin](https://github.com/cianciarusocataldo/mobrix-engine-plugin-router))

Check the [usage](#usage) section for a real example

### Actions

| Action creator   | Arguments                 | Effect                 |
| ---------------- | ------------------------- | ---------------------- |
| `changeLanguage` | - `lang`: language to set | Change actual language |

<br>

Import them from this lib:

```tsx
import { changeLanguage } from "mobrix-engine-plugin-localization";
```

Then dispatch them from any part of your app:

```tsx
import { changeLanguage } from "mobrix-engine-plugin-localization";

import { useDispatch, useSelector } from "react-redux";

import { Button } from "mobrix-ui";

export const LanguageButton = () => {
  const dispatch = useDispatch();

  return (
    <div>
      {["es", "it", "en", "de"].forEach((lang) => (
        <Button
          onClick={() => {
            dispatch(changeLanguage(lang));
          }}
        >
          {lang}
        </Button>
      ))}
    </div>
  );
};
```

<br>

### Selectors

| Selectors               | Returns                                             |
| ----------------------- | --------------------------------------------------- |
| `getLocalizationConfig` | Localization state, or default state if not enabled |
| `getLanguage`           | Actual language                                     |
| `getLanguages`          | Supported languages                                 |

<br>

Import them from this lib:

```tsx
import {
  getLocalizationConfig,
  getLanguage,
  getLanguages,
} from "mobrix-engine-plugin-localization";
```

Then use them from any part of your app:

```tsx
import { getLanguage, getLanguages } from "mobrix-engine-plugin-localization";
import { useSelector } from "react-redux";

import { Button } from "mobrix-ui";

export const LocalizationDebugComponent = () => {
  const language = useSelector(getLanguage);
  const languages = useSelector(getLanguages);

  return (
    <div>
      <p>{`Actual language is ${language}`}</p>
      <p>{`Supported languages are ${languages}`}</p>
    </div>
  );
};
```

<br>

---

## Integration with other plugins

- This plugin expose some fields to work with any other plugin. If you want to interact with it, using your custom plugin, you can add an `interaction` with `localization` plugin inside your custom plugin:

```tsx
//Just a skeleton of a custom plugin that interacts with router plugin
const customPlugin = () => ({
  // Custom plugin stuffs

  interactions: [
    {
      plugin: "localization",
      effect: (localizationConfig) => {
        // Custom plugin stuffs

        //Add the custom callback
        localizationConfig.onLanguageChange.push(() => {
          alert("language changed");
        });
      },
    },
  ],
});
```

<br>

- Additionally, if you use [mobrix-engine-plugin-url-checker](https://github.com/CianciarusoCataldo/mobrix-engine-plugin-url-checker) too, you can change the language directly from URL, with query parameters, by passing the `lang` parameter with the language you want to set. Try it with [MoBrix-engine](https://github.com/CianciarusoCataldo/mobrix-engine) playground - https://cianciarusocataldo.github.io/mobrix-engine?lang=en

<br>

---

## Included libraries

- [118next](https://www.i18next.com/) - the localization system used under the hood
- [MoBrix-engine-types](https://github.com/CianciarusoCataldo/mobrix-engine-types) - to use MoBrix-engine type definitions inside the plugin
- [MoBrix-engine-tools](https://github.com/CianciarusoCataldo/mobrix-engine-tools) - to use MoBrix-engine utils functions, to easily work with it
- [MoBrix-utils](https://github.com/CianciarusoCataldo/mobrix-utils) - to use shared util functions during init process
- This library is written entirely with [Typescript](https://www.typescriptlang.org/)

<br>

---

## Authors

- [**Cataldo Cianciaruso**](https://github.com/CianciarusoCataldo)

<br>

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
