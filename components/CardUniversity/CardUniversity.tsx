import getUnicodeFlagIcon from 'country-flag-icons/unicode'
import University from 'interfaces/university';

interface Props {
  university: University;
}

export default function CardUniversity({
  university,
}: Props) {
  return (
    <a className="card box" href={university.web_pages[0]} target="_blank">
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{university.name}</p>
            <p className="subtitle is-6">{getUnicodeFlagIcon(university.alpha_two_code)} {university.country}</p>
            <a>{university.web_pages[0]}</a>
          </div>
        </div>
      </div>
    </a>
  )
}
