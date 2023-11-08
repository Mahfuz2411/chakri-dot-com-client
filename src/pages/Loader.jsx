import { useContext } from "react";
import { LoaderContext } from "../contexts/LoaderProvider";

const Loader = () => {
  const { isLoadingData } = useContext(LoaderContext);
  console.log(isLoadingData);
  return (
    <>
      {isLoadingData && (
        <div className="fixed left-0 top-0 w-full h-full bg-white/30 grid place-items-center z-40">
          <span className="loading loading-bars  w-[100px] z-50 bg-black"></span>
        </div>
      )}
    </>
  );
};

export default Loader;
