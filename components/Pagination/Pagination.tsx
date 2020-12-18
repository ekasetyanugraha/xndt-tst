const DEFAULT_PAGES = 5;

interface Props {
  pages?: number;
  onClickPageNum?: (page: number) => void;
  onClickPrev?: () => void;
  onClickNext?: () => void;
}

export default function Pagination({
  pages = DEFAULT_PAGES,
  onClickPageNum = () => {},
  onClickPrev = () => {},
  onClickNext = () => {},
}: Props) {
  return (
    <nav className="pagination is-centered" role="navigation" aria-label="pagination">
      <a className="pagination-previous" title="This is the first page" onClick={onClickPrev}>Previous</a>
      <a className="pagination-next" onClick={onClickNext}>Next page</a>
      <ul className="pagination-list">
        {
          [...Array(pages)].map((page, i) =>
            <li key={i}>
              <a onClick={() => onClickPageNum(i+1)} className="pagination-link">{i+1}</a>
            </li>
          )
        }
      </ul>
    </nav>
  )
}
