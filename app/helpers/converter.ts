import {numbersDictionary} from "../libraries/numbers-dictionary";
import {getTextedNumber} from "./get-texted-number";
import {Limits} from '../enums/limits';

export const converter = (num: number): string => {
    if (num >= Limits.zero && num <= Limits.twenty) {
        return numbersDictionary[num];
    }

    if (num > Limits.twenty && num < Limits.hundred) {
        return getTextedNumber(num, Limits.ten);
    }

    if (num >= Limits.hundred && num < Limits.thousand) {
        return getTextedNumber(num, Limits.hundred);
    }

    if (num >= Limits.thousand && num <= Limits.million) {
        return getTextedNumber(num, Limits.thousand);
    }

    return '';
}