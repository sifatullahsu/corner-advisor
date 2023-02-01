import React, { useEffect, useState } from 'react';
// import Loading from '../components/Loading';
import Services from '../components/Services';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const ServicesPage = () => {

  useDocumentTitle('Services');

  const [services, setServices] = useState({});
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);

    fetch(`https://corner-advisor-server.vercel.app/services?page=${page}&size=${3}`)
      .then(res => res.json())
      .then(data => {
        setLoading(false);
        setServices(data);
      })
      .catch(err => {
        setLoading(false)
      })
  }, [page]);


  /* if (loading) {
    return (
      <Loading></Loading>
    );
  } */

  return (
    <section className='py-14 md:py-20'>
      <div className="container">
        <div className='max-w-5xl mx-auto'>
          <div className='text-center max-w-xl mx-auto mb-10'>
            <h2 className='text-2xl md:text-3xl font-bold mb-5 text-secondary'>All Advantage Services</h2>
            <p className='text-text'>It's a complete business solutions to its clients and source,supplies industry proven technologies and machines from global believed companies.</p>
          </div>
          <Services services={services} setPage={setPage} loading={loading} isPagination={true}></Services>
        </div>
      </div>
    </section >
  );
};

export default ServicesPage;