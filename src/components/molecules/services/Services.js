import React from 'react';
import { ServicesWrapper } from './Services.styles';
import { ReactComponent as Steps } from '../../../assets/images/icon/steps.svg';
import { ReactComponent as Arrow } from '../../../assets/images/icon/arrow.svg';

export const Services = () => {
  return (
    <ServicesWrapper>
      <Steps />
      <div>
        <p>Przejdź na wyższy poziom i skorzystaj z pomocy dedykowanego Consierga.</p>
        <button>
          Sprawdź usługi <Arrow />
        </button>
      </div>
    </ServicesWrapper>
  );
};
