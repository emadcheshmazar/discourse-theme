import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "add-landing-nav-link",

  initialize() {
    withPluginApi((api) => {
      // Add a navigation link to the landing page
      api.decorateWidget("home-logo:after", (helper) => {
        return helper.attach("link", {
          href: "/landing",
          contents: () => "Landing",
          className: "landing-nav-link",
        });
      });
    });
  },
};
