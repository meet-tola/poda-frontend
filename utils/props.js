
  const props = ({ big, small, icons }) => {
    return (
      <div className="flex items-center mt-2 w-[400px]">
        <div style={{minWidth: 50, minHeight: 50}} className="mr-2  flex items-center justify-center rounded-full border hover:bg-black hover:text-[orange]  transition-all duration-300 hover:cursor-pointer ">
          {icons}
        </div>
        <div className="leading-[16px] ml-2">
          <div className="font-bold text-xl">{big}</div>
          <div className="text-[14px] mt-2">{small}</div>
        </div>
      </div>
    );
  };
  
  export default props;
  