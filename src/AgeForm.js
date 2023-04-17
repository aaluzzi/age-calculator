function AgeForm() {
    return (
        <div className="content">
                <form onSubmit={e => parseInput(e)}> 
                    <div>
                        <label htmlFor="birthday">Birthday</label>
                        <input name="birthday" type="date" required/>
                    </div>
                    <div>
                        <label htmlFor="birthday">Time of Birth (Optional)</label>
                        <input name="time" type="time"/>
                    </div>
                    <div>
                        <label htmlFor="name">Your Name (Optional)</label>
                        <input name="name" type="text" maxLength="22"/>
                    </div>
                    <button type="submit">View Age</button>
                </form>              
        </div>
    );
}

function parseInput(e) {
    e.preventDefault();
    window.location.href = "?" 
    + (e.target.elements.name.value ? ("name=" + e.target.elements.name.value.trim()) : "")
    + (e.target.elements.name.value ? "&birthday=" : "birthday=") + e.target.elements.birthday.value 
    + (e.target.elements.time.value ? "-" : "") + e.target.elements.time.value;
}

export default AgeForm;