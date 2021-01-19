// 计算dom的left和top值，使其中心坐标位于视窗的x轴y轴对应比例处
function getPosition(dom, [xPercent, yPercent]) {
    const viewWidth = document.documentElement.clientWidth;
    const viewHeight = document.documentElement.clientHeight;

    const elemWidth = dom.offsetWidth;
    const elemHeight = dom.offsetHeight;

    const left = (viewWidth - elemwidth) * xPercent;
    const top = (viewHeight - elemHeight) * yPercent;

    return [left, top];
}