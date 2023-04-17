function ProgressBar(prop) {
    return (
        <div className="progress" style={{"--progress": Math.floor(prop.percentage * 360) + "deg"}}>
            <div className="percentage">
                <div>{Math.floor(prop.percentage * 10000) / 100}%</div>
                <div>to {prop.age + 1}</div>
            </div>
        </div>
    );
}

export default ProgressBar;