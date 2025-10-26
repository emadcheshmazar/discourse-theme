import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "hub-route",

  initialize() {
    withPluginApi((api) => {
      // Register custom route
      api.registerCustomRoutePlugin({
        path: "/hub",
        route: "hub",
      });
    });
  },
};
