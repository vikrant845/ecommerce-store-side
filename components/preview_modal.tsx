"use client";

import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./ui/modal";
import { onClose } from "@/store/slices/previewSlice";
import Gallery from "./gallery";
import Info from "./info";

const PreviewModal = () => {
  const { data, isOpen } = useSelector((state: RootState) => state.preview);
  const dispatch = useDispatch();

  if (!data) return null;
  return (
    <Modal
      isOpen={ isOpen }
      onClose={ () => dispatch(onClose()) }
    >
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-4 lg:col-span-5">
          <Gallery images={ data.images } />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <Info data={data} />
        </div>
      </div>
    </Modal>
  );
}

export default PreviewModal;