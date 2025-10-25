import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "add-landing-route",

  initialize(container) {
    const router = container.lookup("service:router");

    withPluginApi((api) => {
      api.modifyClass("route:application", {
        pluginId: "discourse-air-landing",

        actions: {
          didTransition() {
            this._super(...arguments);
            return true;
          },
        },
      });
    });

    // Register the route
    try {
      router._router.map(function () {
        this.route("landing");
      });
    } catch {
      // Route might already exist - silent fail
    }
  },
};
