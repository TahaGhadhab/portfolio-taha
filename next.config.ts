import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Sortie autonome : Railway demarre `node server.js` sans reinstaller
   * les dependances, image de deploiement nettement plus legere.
   */
  output: "standalone",

  experimental: {
    /**
     * Le root layout vit sous `app/[lang]`, donc aucun layout commun ne peut
     * composer un 404 pour une URL qui ne correspond a aucune route.
     */
    globalNotFound: true,
  },

  poweredByHeader: false,
};

export default nextConfig;
