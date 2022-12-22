import React from 'react';
import ReactPaginate from 'react-paginate';
import Review from './Review';

const Reviews = ({ reviews, edit, handleReviewDelete, setPage, loading }) => {

  return (
    <>
      <div>
        {
          reviews?.data.map(review => <Review
            key={review._id}
            review={review}
            edit={edit}
            handleReviewDelete={handleReviewDelete}
          ></Review>)
        }
      </div>
      <div>
        <ReactPaginate
          previousLabel="Previous"
          nextLabel="Next"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          pageCount={reviews?.pagination?.total}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          onPageChange={(e) => setPage(e.selected + 1)}
          containerClassName="pagination"
          activeClassName="active"
          forcePage={reviews?.pagination?.current - 1}
        />
      </div>
    </>
  );
};

export default Reviews;

