import React, { useEffect } from 'react';
import getUnicodeFlagIcon from 'country-flag-icons/unicode';
import useUniversity from 'hooks/university';
import CardUniversity from 'components/CardUniversity';

interface Props {
  country: string;
}

export default function CountryUniversities({ country }: Props): JSX.Element {
  const { isLoading, getUniversities, universities } = useUniversity();

  useEffect(() => {
    getUniversities({
      limit: 3,
      alpha_two_code: country,
    });
  }, []);

  return (
    <div className="message">
      <div className="message-header">
        <p className="is-size-4">
          {getUnicodeFlagIcon(country)} {universities[0]?.country}
        </p>
      </div>
      <div className="message-body">
        {universities.map((university) => (
          <CardUniversity key={university.name} university={university} />
        ))}
      </div>
    </div>
  );
}
