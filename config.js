System.config({
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "chai": "npm:chai@3.5.0",
    "miruken-callback": "npm:miruken-callback@0.0.5-alpha.22",
    "miruken-context": "npm:miruken-context@0.0.5-alpha.3",
    "miruken-core": "npm:miruken-core@0.0.5-alpha.2",
    "miruken-validate": "npm:miruken-validate@0.0.5-alpha.3",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.5.0"
    },
    "github:jspm/nodelibs-buffer@0.1.1": {
      "buffer": "npm:buffer@5.4.3"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.10"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:assert@1.5.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "object-assign": "npm:object-assign@4.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:buffer@5.4.3": {
      "base64-js": "npm:base64-js@1.3.1",
      "ieee754": "npm:ieee754@1.1.13"
    },
    "npm:chai@3.5.0": {
      "assertion-error": "npm:assertion-error@1.0.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "deep-eql": "npm:deep-eql@0.1.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "type-detect": "npm:type-detect@1.0.0"
    },
    "npm:deep-eql@0.1.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "type-detect": "npm:type-detect@0.1.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:miruken-callback@0.0.5-alpha.22": {
      "miruken-core": "npm:miruken-core@0.0.5-alpha.2"
    },
    "npm:miruken-context@0.0.5-alpha.3": {
      "miruken-callback": "npm:miruken-callback@0.0.5-alpha.22",
      "miruken-core": "npm:miruken-core@0.0.5-alpha.2"
    },
    "npm:miruken-core@0.0.5-alpha.2": {
      "reflect-metadata": "npm:reflect-metadata@0.1.13"
    },
    "npm:miruken-validate@0.0.5-alpha.3": {
      "miruken-callback": "npm:miruken-callback@0.0.5-alpha.22",
      "miruken-context": "npm:miruken-context@0.0.5-alpha.3",
      "miruken-core": "npm:miruken-core@0.0.5-alpha.2",
      "validate.js": "npm:validate.js@0.10.0"
    },
    "npm:process@0.11.10": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:validate.js@0.10.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});
