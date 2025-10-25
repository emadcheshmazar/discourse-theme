import DiscourseRoute from "discourse/routes/discourse";

export default class LandingRoute extends DiscourseRoute {
  model() {
    return {
      iframeUrl: "https://emadcheshmazar.github.io/discourse-landing-build/",
    };
  }
}
