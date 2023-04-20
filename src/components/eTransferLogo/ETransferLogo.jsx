import eTransferLogo from "../.././assets/etransfer.svg";
const ETransferLogo = (props) => {
  const { logoWidth } = props;
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "100%",
        }}
      >
        <img src={eTransferLogo} alt="etransfer" style={{ width: logoWidth }} />
      </div>
    </>
  );
};

export default ETransferLogo;
