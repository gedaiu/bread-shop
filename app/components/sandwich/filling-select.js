import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class SandwichFillingSelectComponent extends Component {
  extras = ['salad', 'tomatoes', 'avocado', 'ketchup', 'mustard'];

  get availableExtras() {
    return this.extras.map((name) => ({ name, checked: false }));
  }

  @action
  changeMainFilling(event) {
    this.args.onChangeMainFilling(event.target.value);
  }
}
