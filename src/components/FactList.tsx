import React from 'react';
import Fact from './Fact';

const FactList: React.FC<FactListProps> = ({facts}) => {
    const factComponents = facts?.map((fact, index, facts) => (
      <Fact key={index} factData={fact} />
    ));
    return (
      <div>
        {factComponents}
      </div>
    )
}

export default FactList;