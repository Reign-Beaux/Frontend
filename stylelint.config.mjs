/** @type {import("stylelint").Config} */
export default {
    extends: ["stylelint-config-standard"],
    plugins: ["stylelint-order"],
    rules: {
        "selector-class-pattern": [
            "^(?:[a-z][a-zA-Z0-9]+|[a-z][a-z0-9-]+)$",
            {
                message: "Expected class selector to be camelCase or kebab-case",
            },
        ],
        "order/properties-order": [
            [
                {
                    groupName: "Posicionamiento",
                    properties: ["position", "top", "right", "bottom", "left", "z-index"],
                },
                {
                    groupName: "Display & Layout",
                    properties: [
                        "display",
                        "flex",
                        "flex-grow",
                        "flex-shrink",
                        "flex-basis",
                        "flex-direction",
                        "flex-wrap",
                        "justify-content",
                        "align-items",
                        "align-content",
                        "grid",
                        "grid-template",
                        "grid-gap",
                        "gap",
                    ],
                },
                {
                    groupName: "Box model",
                    properties: [
                        "width",
                        "min-width",
                        "max-width",
                        "height",
                        "min-height",
                        "max-height",
                        "margin",
                        "padding",
                        "border",
                        "border-radius",
                    ],
                },
                {
                    groupName: "Tipografía",
                    properties: [
                        "font",
                        "font-family",
                        "font-size",
                        "font-weight",
                        "line-height",
                        "text-align",
                        "text-transform",
                        "color",
                    ],
                },
                {
                    groupName: "Visual",
                    properties: [
                        "background",
                        "background-color",
                        "background-image",
                        "background-size",
                        "background-repeat",
                        "box-shadow",
                        "opacity",
                    ],
                },
                {
                    groupName: "Interacción",
                    properties: ["cursor", "pointer-events", "user-select", "transition", "animation"],
                },
            ],
            { unspecified: "bottomAlphabetical" },
        ],
    },
};
