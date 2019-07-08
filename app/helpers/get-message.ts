import { numbersDictionary } from "../libraries/numbers-dictionary";
import { IMessageParams } from "../models/IMessageParams";
import {converter} from "./converter";
import {Limits} from "../enums/limits";

export const getMessage = (params: IMessageParams): string => {
    let additionalText = '';
    let preText = '';
    let restText = '';

    if (params.main > Limits.twenty) {
        preText = converter(params.main);
    }

    if (params.divider === Limits.ten) {
        params.main *= 10;
    }

    if (params.divider && params.divider >= Limits.hundred) {
        additionalText = numbersDictionary[params.divider];
    }

    if (params.remainder) {
        restText = converter(params.remainder);
    }

    return [preText, numbersDictionary[params.main], additionalText, restText].filter(Boolean).join(' ');
}