import React from 'react';
import { toast } from 'react-toastify';

const AddServicePage = () => {

  const handleAddService = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    const image = form.image.value;
    const description = form.description.value;

    const data = {
      name,
      price: `$${price}`,
      img: image,
      description
    }

    fetch('http://localhost:5000/service', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(data => {
        form.reset();
        toast.success('Service added successfully..')
      })
      .catch(err => toast.error('Somthing is wrong..'))
  }

  return (
    <section className='py-10'>
      <div className='container'>
        <div className='max-w-lg mx-auto'>
          <div className='bg-gray p-10 border border-border'>
            <h4 className='text-xl mb-3'>Add new service</h4>
            <form onSubmit={handleAddService}>
              <div className='grid grid-cols-1 gap-4'>
                <div className="form-control w-full">
                  <label className="label"><span className="label-text">Service Name</span></label>
                  <input name="name" type="text" placeholder="service name" className="input input-bordered rounded" required />
                </div>

                <div className="form-control w-full">
                  <label className="label"><span className="label-text">Price</span></label>
                  <input name="price" type="number" placeholder="price" className="input input-bordered rounded" required />
                </div>

                <div className="form-control w-full">
                  <label className="label"><span className="label-text">Image URL</span></label>
                  <input name="image" type="url" placeholder="image url" className="input input-bordered rounded" required />
                </div>

                <div className="form-control w-full">
                  <label className="label"><span className="label-text">Description</span></label>
                  <textarea name='description' className="textarea textarea-bordered rounded" placeholder="description" required></textarea>
                </div>
              </div>
              <input className='btn btn-primary rounded mt-4' type="submit" value="Add service" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddServicePage;