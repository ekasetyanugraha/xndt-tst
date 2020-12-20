import React from 'react';
import getUnicodeFlagIcon from 'country-flag-icons/unicode';
import University from 'interfaces/university';

interface Props {
  university: University;
}

export default function CardUniversity({ university }: Props): JSX.Element {
  return (
    <a className="card box" href={university.web_pages[0]} target="_blank" rel="noreferrer" data-testid="card">
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4" data-testid="name">
              {university.name}
            </p>
            <p className="subtitle is-6" data-testid="country">
              {getUnicodeFlagIcon(university.alpha_two_code)} {university.country}
            </p>
            <span className="has-text-link" data-testid="link">
              {university.web_pages[0]}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}
