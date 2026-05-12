import RightCard from "./RightCard";

const RightContent = (props) => {
  return (
    <div
      id="right"
      className="h-full flex overflow-x-auto flex-nowrap gap-10 p-6 w-2/3 rounded-4xl"
    >
      {props.users.map(function (elem, idx) {
        return (
          <RightCard
            key={idx}
            id={idx}
            color={elem.color}
            img={elem.img}
            tag={elem.tag}
            intro={elem.intro}
          />
        );
      })}
    </div>
  );
};

export default RightContent;
