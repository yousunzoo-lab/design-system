const StyleDictionaryModule = require("style-dictionary");
const { makeSdTailwindConfig } = require("sd-tailwindcss-transformer");

const StyleDictionary = StyleDictionaryModule.extend(
  makeSdTailwindConfig({
    type: "all",
    source: ["./tokens/global.json"],
    buildPath: "",
  })
);

StyleDictionary.buildAllPlatforms();