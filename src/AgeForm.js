function AgeForm() {
    return (
        <div className="content">
            <div className="square">
                <form>
                    <div>
                        <label htmlFor="birthday">Birthday</label>
                        <input name="birthday" type="date" required/>
                    </div>

                    <button type="submit">View Age</button>
                </form>
            </div>            
        </div>
    );
}

export default AgeForm;