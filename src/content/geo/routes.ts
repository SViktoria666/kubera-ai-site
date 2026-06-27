const legacyGeoRouteRedirects: Record<string, string> = {
  "/ai-automation-germany": "/en/germany-automation",
  "/ai-automation-netherlands": "/en/netherlands-automation",
  "/ai-automation-portugal": "/en/portugal-automation",
  "/ai-automation-estonia": "/en/estonia-automation",
  "/ai-automation-france": "/en/france-automation",
  "/ai-automation-italy": "/en/italy-automation",
  "/ai-automation-belgium": "/en/belgium-automation",
  "/ai-automation-austria": "/en/austria-automation",
  "/ai-automation-switzerland": "/en/switzerland-automation",
  "/ai-automation-ireland": "/en/ireland-automation",
  "/ai-automation-cyprus": "/en/cyprus-automation",
  "/ai-automation-finland": "/en/finland-automation",
  "/ai-automation-sweden": "/en/sweden-automation",
  "/ai-automation-denmark": "/en/denmark-automation",
  "/ai-automation-poland": "/en/poland-automation",
  "/ai-automation-lithuania": "/en/lithuania-automation",
  "/ai-automation-latvia": "/en/latvia-automation",
};

export const legacyGeoRoutes = Object.keys(legacyGeoRouteRedirects);

export function normalizeGeoRoute(route: string) {
  return legacyGeoRouteRedirects[route] ?? route;
}

