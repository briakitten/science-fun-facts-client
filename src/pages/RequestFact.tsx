import React, { useEffect, useState } from 'react';

function RequestFact() {
    function submit_fact() {

    }

    return (
        <div>
        <p>
            This is where you can request a new fact into the database.
        </p>
        <hr />
        <div className="request-form">
            <form>
                Subject:
                <select>
                    <option value="SPACE">SPACE</option>
                    <option value="ANIMALS">ANIMALS</option>
                    <option selected value="MATH">MATH</option>
                    <option value="TEST">TEST</option>
                </select>
                <label>
                    Fact:
                    <input type="text" name="fact_line" />
                </label>
                <label>
                    Description:
                    <input className="fact-description" type="text" name="fact_description" />
                </label>
                <label>
                    Video Ref:
                    <input type="text" name="video_ref" />
                </label>
                <label>
                    Learn Ref:
                    <input type="text" name="learn_ref" />
                </label>
                <br /><br /><button className="button1" onClick={submit_fact}>Submit Fact</button>
            </form>
        </div>
        </div>
    )
}

export default RequestFact;