import DiscourseRoute from "discourse/routes/discourse";

export default class HubRoute extends DiscourseRoute {
  titleToken() {
    return "Hub";
  }
}
