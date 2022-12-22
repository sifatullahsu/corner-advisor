import React from 'react';
import Service from './Service';
import ReactPaginate from 'react-paginate';

const Services = ({ services, setPage }) => {

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        {
          services.data.map(service => <Service
            key={service._id}
            service={service}
          ></Service>)
        }
      </div>
      <div className='mt-10'>
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
          pageCount={services.pagination.total}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          onPageChange={(e) => setPage(e.selected + 1)}
          containerClassName="pagination"
          activeClassName="active"
          forcePage={0}
        />
      </div>
    </>
  );
};

export default Services;