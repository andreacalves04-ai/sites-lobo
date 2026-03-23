/**
 * Preset Tailwind alinhado ao Aura / Digital Architect.
 * No projeto Lovable (ou Vite), em tailwind.config:
 *
 *   presets: [require("./tailwind-preset-aura.cjs")],
 *
 * Ou mescle só o `theme.extend` que precisares.
 *
 * @type {import('tailwindcss').Config}
 */
module.exports = {
    theme: {
        extend: {
            colors: {
                canvas: "#eaeae5",
            },
            fontFamily: {
                sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
                mono: [
                    "ui-monospace",
                    "SFMono-Regular",
                    "Menlo",
                    "Monaco",
                    "Consolas",
                    "monospace",
                ],
            },
            transitionTimingFunction: {
                "aura-out": "cubic-bezier(0.16, 1, 0.3, 1)",
            },
            transitionDuration: {
                reveal: "1000ms",
                "text-reveal": "1200ms",
            },
        },
    },
};
