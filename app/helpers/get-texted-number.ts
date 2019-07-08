import {getMainPart, getRemainder} from "./division";
import {getMessage} from "./get-message";

export const getTextedNumber = (num: number, divider: number): string => {
    const mainNum = getMainPart(num, divider);
    const restNum = getRemainder(num, divider);
    const text = getMessage({main: mainNum, remainder: restNum, divider: divider})

    return text;
}