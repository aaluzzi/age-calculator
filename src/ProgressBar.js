function ProgressBar(prop) {
    if (prop.percentage <= .001) {
        return (
            <div>
                <div className="message">Happy Birthday 🥳</div>
                <br></br>
                <div className="result">🎂🐌🎉</div>
            </div>
        );
    }
    return (
        <div className="progress">
            <div className="start">
                <div>{prop.age}</div>
            </div>
            <div className="bar">
                <div style={{paddingLeft: getIndicatorLeftPadding(prop.percentage) + "px"}} className="indicator">🐌</div>
            </div>
            <div className="end">
                <div>{prop.age + 1}</div>
            </div>
        </div>
    );
}

function getIndicatorLeftPadding(percentage) {
    const bar = document.querySelector(".bar");
    const indicator = document.querySelector(".indicator");
    if (indicator) {
        return Math.floor(bar.getBoundingClientRect().width * percentage) - (indicator.clientWidth - parseFloat(window.getComputedStyle(indicator).paddingLeft));
    }
}

export default ProgressBar;