import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

/*
 * eslint-config-next v16 flat-konfigni to'g'ridan-to'g'ri beradi.
 * Ilgari bu yerda `FlatCompat` ishlatilgan edi va u ESLint 9.39 da
 * "circular structure" xatosi bilan yiqilardi - ya'ni lint umuman
 * ishga tushmasdi.
 */
const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  { ignores: [".next/**", "node_modules/**", "next-env.d.ts"] },
];

export default eslintConfig;
