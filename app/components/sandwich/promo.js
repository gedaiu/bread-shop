import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import fetch from 'fetch';

export default class SandwichPromoComponent extends Component
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
  async redeem() {
    this.isLoading = true;
    this.isError = false;

    try {
      await fetch(`/promo/${this.promo}.json`);

      this.args.value.promoCode = this.promo;
    } catch(err) {
      this.args.value.promoCode = '';
      this.isError = true;
    }

    this.isLoading = false;
  }
}
