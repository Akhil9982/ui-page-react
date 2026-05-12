const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
      <h2 className="bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center">
        {props.id + 1}
      </h2>
      <p className="text-shadow text-xl leading-relaxed mt-auto text-white backdrop-blur py-2 px-2 rounded-2xl mb-2 m-[-10%] bg-white/20">
        {props.intro}
      </p>
      <div className="flex justify-between">
        <button
          style={{ backgroundColor: props.color }}
          className="text-white font-medium px-8 py-2 rounded-full"
        >
          {props.tag}
        </button>
        <button className="text-white font-medium px-4 py-2 rounded-full">
          <i className="ri-arrow-right-line"></i>
        </button>
      </div>
    </div>
  );
};

export default RightCardContent;
