import { MdBlockFlipped } from "react-icons/md";

export default function BlockIcon() {
    return (
        <span className="me-1 position-relative">
      <MdBlockFlipped style={{ top: "1px" }} className="text-dark me-1 position-absolute fs-5" />
      <MdBlockFlipped className="text-light me-1 fs-6" />
    </span>);}

