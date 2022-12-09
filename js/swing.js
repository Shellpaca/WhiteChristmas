
let plusOrMinus = false;
let getSwing = () => {
    plusOrMinus ? plusOrMinus = false : plusOrMinus = true;
    const swingSize = Math.floor(Math.random() * (8 - 2) + 2);
    return `${plusOrMinus ? "": "-"}${swingSize}px`;
};
const getOpacityVal = () => {
    let opacitySize = Math.floor(Math.random() * (10 - 5) + 5);
    if (opacitySize === 10) opacitySize = 1;
    return `.${opacitySize}`;
}

const getZIndex = () => {
    const zIndexSize = Math.floor(Math.random() * (7 - 3) + 3);
    return `.${zIndexSize}`;
}

export const fallKeyframes = [
    { opacity: 0, top: 0, },
    { opacity: getOpacityVal(), "z-index": getZIndex(), transform: `translate(${getSwing()})`, },
    { opacity: getOpacityVal(), "z-index": getZIndex(), transform: `translate(${getSwing()})`, },
    { opacity: getOpacityVal(), "z-index": getZIndex(), transform: `translate(${getSwing()})`, },
    { opacity: getOpacityVal(), "z-index": getZIndex(), transform: `translate(${getSwing()})`, },
    { opacity: getOpacityVal(), "z-index": getZIndex(), transform: `translate(${getSwing()})`, },
    { opacity: getOpacityVal(), "z-index": getZIndex(), transform: `translate(${getSwing()})`, },
    { opacity: getOpacityVal(), "z-index": getZIndex(), transform: `translate(${getSwing()})`, },
    { opacity: getOpacityVal(), "z-index": getZIndex(), transform: `translate(${getSwing()})`, },
    { opacity: getOpacityVal(), "z-index": getZIndex(), transform: `translate(${getSwing()})`, },
    { opacity: 0,top: "100vh" },
]
export const option = {
    duration: 10000,
    easing: 'linear',
}