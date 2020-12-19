import UrlParamsUniversity from "interfaces/url-params-university";

const DEFAULT_PAGES = 5;

interface Props {
  limit?: number;
  offset?: number;
  total?: number;
  onChangePage?: (page: UrlParamsUniversity) => void;
}

export default function Pagination({
  limit = 0,
  offset = 0,
  total = 0,
  onChangePage = () => {},
}: Props) {
  const currentPage = (offset / limit) + 1;
  const totalPage = total && limit ? Math.ceil(total / limit) : 0;
  const totalPageLimited = totalPage < DEFAULT_PAGES ? totalPage : DEFAULT_PAGES;

  const disablePrev = currentPage === 1;
  const disableNext = currentPage === totalPage;

  const changePage = (page: number) => onChangePage({
    limit,
    offset: (page - 1) * limit,
  });

  const onClickPrev = () => {
    changePage(currentPage - 1);
  };

  const onClickNext = () => {
    changePage(currentPage + 1);
  };

  return (
    <nav className="pagination is-centered" role="navigation" aria-label="pagination">
      <button
        type="button"
        className="button pagination-previous"
        title="This is the first page"
        disabled={disablePrev}
        onClick={onClickPrev}
      >
        Previous
      </button>

      <ul className="pagination-list">
        {
          [...Array(totalPageLimited)].map((page, i) =>
            <li key={i}>
              <button
                type="button"
                className={`button pagination-link ${currentPage === i + 1 && 'is-current'}`}
                onClick={() => changePage(i + 1)}
              >
                {i + 1}
              </button>
            </li>
          )
        }
      </ul>

      <button
        type="button"
        className="button pagination-next"
        disabled={disableNext}
        onClick={onClickNext}
      >
        Next page
      </button>
    </nav>
  )
}
