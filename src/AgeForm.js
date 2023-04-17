function AgeForm() {
    return (
        <div className="content">
            <div className="square">
                <form onSubmit={e => parseInput(e)}> 
                    <div>
                        <label htmlFor="birthday">Birthday</label>
                        <input name="birthday" type="date" required/>
                    </div>
                    <div>
                        <label htmlFor="birthday">Time of Birth (Optional)</label>
                        <input name="time" type="time"/>
                    </div>
                    <button type="submit">View Age</button>
                </form>
            </div>            
        </div>
    );
}

function parseInput(e) {
    e.preventDefault();
    window.location.href = "?birthday=" + e.target.elements.birthday.value 
    + (e.target.elements.time.value !== "" ? "-" : "") + e.target.elements.time.value;
}

export default AgeForm;