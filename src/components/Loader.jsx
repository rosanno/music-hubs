import { Dna } from 'react-loader-spinner';

const Loader = ({ title }) => (
  <div className="w-full flex justify-center items-center flex-col">
    <Dna
      height="120"
      width="120"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
    <h1 className="font-bold text-2xl text-white mt-2">
      {title || 'Loading...'}
    </h1>
  </div>
);

export default Loader;
