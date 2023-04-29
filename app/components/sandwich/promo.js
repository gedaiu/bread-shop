import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { later } from '@ember/runloop';

export default class SandwichPromoComponent extends Component {
  @tracked _promo;
  @tracked isLoading;
  @tracked isError;

  get promo() {
    if (typeof this._promo == 'string') {
      return this._promo;
    }

    return this.args.value.promoCode;
  }

  set promo(value) {
    this._promo = value;
  }

  get isValid() {
    return this._promo && this._promo === this.args.value.promoCode;
  }

  @action
  redeem() {
    const time = 500 + Math.random() * 500;
    this.isLoading = true;
    this.isError = false;

    later(() => {
      this.isLoading = false;

      if (this.promo == 'SPRING20') {
        this.args.value.promoCode = this.promo;
      } else {
        this.args.value.promoCode = '';
        this.isError = true;
      }
    }, time);
  }
}
