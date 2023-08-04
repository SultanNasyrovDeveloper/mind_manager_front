import { grey, Shade } from '../colors';
import { TextLevel } from './types';


export const getDefaultTextColor = (level: TextLevel): string => {
    const shade = [10, 9, 8, 7, 6][level - 1];
    return grey.get(shade as Shade || grey.medium);
}