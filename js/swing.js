
let plusOrMinus = false;
let getSwing = () => {
    plusOrMinus ? plusOrMinus = false : plusOrMinus = true;
    const swingSize = Math.floor(Math.random() * (8 - 2) + 2);
    return `${plusOrMinus ? "": "-"}${swingSize}px`;
};
const getOpacityVal = () => {
    const opacitySize = Math.floor(Math.random() * (10 - 7) + 7);
    return `.${opacitySize}`;
}

export const fallKeyframes = [
    { opacity: 0, left: 0, top: 0, },
    { opacity: getOpacityVal(), left: getSwing(), },
    { opacity: getOpacityVal(), left: getSwing(), },
    { opacity: getOpacityVal(), left: getSwing(), },
    { opacity: getOpacityVal(), left: getSwing(), },
    { opacity: getOpacityVal(), left: getSwing(), },
    { opacity: getOpacityVal(), left: getSwing(), },
    { opacity: getOpacityVal(), left: getSwing(), },
    { opacity: getOpacityVal(), left: getSwing(), },
    { opacity: getOpacityVal(), left: getSwing(), },
    { opacity: 0, left: 0,top: "100%" },
]
export const option = {
    duration: 10000,
    easing: 'linear',
}