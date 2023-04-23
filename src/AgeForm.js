function AgeForm() {
    return (
        <div className="content">
                <div className="title">Age Calculator</div>
                <form onSubmit={e => setSearchParameters(e)}> 
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

function setSearchParameters(e) {
    e.preventDefault();

    let here = new URL(document.location.href);
    if (e.target.elements.name.value) {
        here.searchParams.set("name", e.target.elements.name.value);
    }
    here.searchParams.set("birthday", e.target.elements.birthday.value + (e.target.elements.time.value.length > 0 ? "-" + e.target.elements.time.value : ""));

    document.location.assign(here);
    /*window.location.href = "?" 
    + (e.target.elements.name.value ? ("name=" + e.target.elements.name.value.trim()) : "")
    + (e.target.elements.birthday.value ? "&birthday=" : "birthday=") + e.target.elements.birthday.value 
    + (e.target.elements.time.value ? "-" : "") + e.target.elements.time.value;*/
}

export default AgeForm;