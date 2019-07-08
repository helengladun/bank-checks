import {converter} from './helpers/converter';

declare global {
    interface Window { converter: any; }
}

console.log(converter(23459));

window.converter = converter;