import PropTypes from 'prop-types';
const Ccards = ({ data }) => {
  return (
    <div className="card w-80 h-96 bg-base-100 shadow-xl p-3 flex flex-col justify-center items-center mx-4">
      <figure className="w-full h-full">
        <img
          src={data.image}
          alt={data.name}
          className="rounded w-full h-full object-cover max-w-[150px] max-h-[150px]"
          // style={{backgroundImage: "url('https://i.ibb.co/SsFSnnV/dpimage.png')"}}
          style={{
            backgroundImage: "url('https://i.ibb.co/SsFSnnV/dpimage.png')",
            backgroundSize: 'cover', // Ensure the background image covers the entire div
          }}
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{data.name}</h2>
        <p>{data.comment}</p>
        <p className="underline font-semibold">{data.date}</p>
      </div>
    </div>
  );
};

Ccards.propTypes = {
  data: PropTypes.object,
};

export default Ccards;