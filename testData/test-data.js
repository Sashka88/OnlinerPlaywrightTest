import {filterType} from "../static/filterTypes.js";
import {labels} from "../static/labelNames.js";

const tv = {
  maker: {
    type: filterType.checkbox,
    value: "Samsung"
  },
  priceTo: {
    type: filterType.input,
    placeholder: labels.to,
    value: "1500"
  },
  priceFrom: {
    type: filterType.input,
    placeholder: labels.from,
    value: "100"
  },
  minDiagonal: {
    type: filterType.checkbox,
    value: '40"'
  },
  maxDiagonal: {
    type: filterType.checkbox,
    value: '50'
  },
  resolution: {
    type: filterType.checkbox,
    value: "1920x1080 (Full HD)"
  }
};
export default tv;