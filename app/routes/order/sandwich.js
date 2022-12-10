import Route from '@ember/routing/route';
import { tracked } from '@glimmer/tracking';

export class Sandwich {
  @tracked breadType;
  @tracked mainFilling;
  @tracked otherFilling;
}

export default class BuySandwichRoute extends Route {
  model() {
    return { sandwich: new Sandwich() };
  }
}
