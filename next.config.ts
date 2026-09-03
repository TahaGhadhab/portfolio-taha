import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Sortie autonome : Railway demarre `node server.js` sans reinstaller
   * les dependances, image de deploiement nettement plus legere.
   *
   * Vercel construit et sert le meme projet par sa propre couche : la sortie
   * autonome n'y sert a rien et brouille la detection du framework. On la
   * neutralise donc quand le build tourne chez eux, sans rien changer pour
   * Railway.
   */
  output: process.env.VERCEL ? undefined : "standalone",

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
