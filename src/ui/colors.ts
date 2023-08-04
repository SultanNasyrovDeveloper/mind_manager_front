import {
  geekblue,
  orange as antdOrange
} from '@ant-design/colors';

export type Color = string;
export type ColorArray = Color[];
export type Shade = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

class UIColor {

  name: Color;
  shades: ColorArray;

  constructor(name: Color, shades: ColorArray) {
    this.name = name;
    this.shades = shades;
  }

  get(number: Shade): Color {
    return this.shades[number];
  }

  get primary(): Color {
    return this.shades[5];
  }

  get lightest(): Color {
    return this.shades[0];
  }

  get light(): Color {
    return this.shades[3];
  }

  get medium(): Color {
    return this.shades[5]
  }

  get dark(): Color {
    return this.shades[7];
  }

  get darkest(): Color {
    return this.shades[9];
  }
}

export const grey = new UIColor(
  'grey',
  [
    '#ffffff', '#fafafa', '#f5f5f5', '#f0f0f0', '#d9d9d9',
    '#bfbfbf', '#8c8c8c', '#595959', '#434343', '#262626',
  ]
);

export const blue = new UIColor('blue', geekblue);
export const orange = new UIColor('orange', antdOrange);
