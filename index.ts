import { nspell } from './nspell-es';

export function Dino() {
    const spell = nspell('', '');
    const isCorrect = spell.correct('colour');
    console.log(isCorrect);
}
