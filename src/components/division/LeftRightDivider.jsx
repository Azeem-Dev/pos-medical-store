const Division = ({ LeftElement, RightElement }) => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "48%", marginRight: "2%" }}>
        <LeftElement />
      </div>
      <div style={{ width: "47%", marginLeft: "3%" }}>
        <RightElement />
      </div>
    </div>
  );
};
export default Division;
