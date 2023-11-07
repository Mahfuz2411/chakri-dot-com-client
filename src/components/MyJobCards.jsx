import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const MyJobCards = ({job}) => {
  const navigate = useNavigate();

  const handleUpdate = () => {
    navigate(`/update/${job._id}`);
  }
  const handleDelete = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/jobs/${job._id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        })
        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error"
        });
      }
    });
  }

  return (
    <>
      <div className="card min-w-96 max- w-full bg-neutral text-neutral-content">
        <div className="card-body">
          <h2 className="card-title">{job.job_tittle}</h2>
          <p>{job.description.length>50?job.description.slice(0,51)+"...":job.description}</p>
          <div className="flex">
            <p>Min. Price: ${job.min_price}</p>
            <p>Max. Price: ${job.max_price}</p>
          </div>
          <p>Deadline: <span className="badge">{job.deadline}</span></p>
          <div className="card-actions w-full grid md:grid-cols-2">
            <button onClick={handleUpdate} className="btn w-full">
              Update
            </button>
            <button onClick={handleDelete} className="btn w-full">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

MyJobCards.propTypes = {
  job: PropTypes.object,
};


export default MyJobCards;