const SelectNumber = ({ selectedNumber, setSelectedNumber, error,setError }) => {
  const numSelection = [1, 2, 3, 4, 5, 6];
 const handling=(value)=>{
  setSelectedNumber(value)
  setError("")
 }
  return (
    <>
      <div className="heading">
        <p>Select Number</p>

        <div className="selection">
          {numSelection.map((value, index) => {
            return (
              <div
                className="box"
                style={{
                  backgroundColor: value === selectedNumber ? "black" : "",
                  color: value === selectedNumber ? "#fff" : "",
                }}
                onClick={()=>{handling(value)}}
                key={index}
              >
                {value}
              </div>
            );
          })}
        </div>

        <p className="error">{error}</p>
      </div>
    </>
  );
};
export default SelectNumber;
