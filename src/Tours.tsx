import React from "react";
import Tour from "./Tour";

const Tours = (props: { tours: any; removeTour: any }) => {
  // take out tours from props
  const { tours, removeTour } = props;

  return (
    <section>
      <div className="title">
        <h2>Bodie's Agency</h2>
        <h4>Summer Excursions</h4>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map(
          (
            tour: JSX.IntrinsicAttributes & {
              id: any;
              image: any;
              info: any;
              price: any;
              name: any;
              removeTour: any;
            }
          ) => {
            return <Tour key={tour.id} removeTour={removeTour} {...tour} />;
          }
        )}
      </div>
    </section>
  );
};

export default Tours;
