import {SpinningCircles} from "react-loading-icons";
import ReactDom from 'react-dom';
import { BackDrop, Modal } from "../styles/Loading.styled";

const portalElement = document.querySelector('#loading-root')
const Loading = () => {
  return (
    <>
      {ReactDom.createPortal(
        <>
          <Modal>
            <SpinningCircles stroke="#98ff98" width='150' height='150'/>
          </Modal>
          <BackDrop />
        </>,
        portalElement
      )}
    </>
  )
};

export default Loading