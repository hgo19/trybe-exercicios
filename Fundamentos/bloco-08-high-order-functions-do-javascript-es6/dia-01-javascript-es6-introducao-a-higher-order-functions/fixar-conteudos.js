const wakeUp = () => 'Acordando!!';
const breakFast = () => 'Bora tomar café!!';
const letSleep = () => 'Partiu dormir!!';

const doingThings = (callback) => console.log(callback());

doingThings(wakeUp);
doingThings(breakFast);
doingThings(letSleep);