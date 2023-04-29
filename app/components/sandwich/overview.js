import Component from '@glimmer/component';

const breadPrices = {
  'white bread': 4,
  'brown bread': 4.5,
  'rye bread': 6,
  'focaccia bread': 7,
};

const fillingPrices = {
  halloumi: 3,
  tofu: 3,
  salmon: 5,
  turkey: 4,
};

export default class SandwichOverviewComponent extends Component {
  get breadPrice() {
    return breadPrices[this.args.value.breadType] ?? 0;
  }

  get fillingPrice() {
    return fillingPrices[this.args.value.mainFilling] ?? 0;
  }

  get extrasPrices() {
    const rawPrice = this.args.value.extras.length * 0.7;
    const price = Math.round(rawPrice * 10) / 10;
    return price;
  }

  get total() {
    return this.breadPrice + this.fillingPrice + this.extrasPrices;
  }
}
