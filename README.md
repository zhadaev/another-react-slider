# Another React Slider

`another-react-slider` is a customizable React Component that renders mixed content slider/carousel.

## Installation

```
npm install --save another-react-slider
```

or

```
yarn add another-react-slider
```

## Main Props

| Attribute | Type | Required | Description |
| :------------------ | :--------: | :--------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| data | `array` | `yes` | Array of objects with slides data |
| slideEl | `node` | `yes` | React component to render slide item | |
| navPrevEl | `node` | `no` | React component to render custom previous button |
| navNextEl | `node` | `no` | React component to render custom next button |
| navDotEl | `node` | `no` | React component to render custom dot navigation item |
| autoPlay | `number` | `no` | Enable autoplay and set delay to change slides automatically |
| hideNavigation | `boolean` | `no` | Hide arrows slider navigation |
| hideDots | `boolean` | `no` | Hide arrows slider navigation |

