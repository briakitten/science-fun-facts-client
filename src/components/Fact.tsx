import React from 'react';

const Fact: React.FC<FactProps> = ({factData}) => {
    const subject = factData?.fact_subject;
    const fact = factData?.fact_line;
    const fact_description = factData?.fact_description;
    const video = factData?.video_ref;
    const learn_more = factData?.learn_ref;
    console.log("FactData as " + JSON.stringify(factData));

    return (
      <div>
        <hr />
        <h4>{subject} FACT</h4>
        <p>Fact: {fact}<br/></p>
        <p>{fact_description}</p>
        <a href={String(video)}>{String(video)}</a><br/>
        <a href={String(learn_more)}>{String(learn_more)}</a><br/><br/>
      </div>
    )
}

export default Fact;