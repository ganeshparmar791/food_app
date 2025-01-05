import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
useNavigate

const Success = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
   const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);


  useEffect(() => {
    if (!loading) {
      const redirectTimer = setTimeout(() => {
        navigate("/"); // Redirect to the home page
      }, 3000); // Show success message for 3 seconds before redirect

      return () => clearTimeout(redirectTimer); // Cleanup the redirect timer
    }
  }, [loading, navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loading ? (
        <PropagateLoader color="#36d7b7" />
      ) : (
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Order Successful!
          </h2>
          <p>Your order has been sucessfully placed</p>
        </div>
      )}
    </div>
  );
};

export default Success;
