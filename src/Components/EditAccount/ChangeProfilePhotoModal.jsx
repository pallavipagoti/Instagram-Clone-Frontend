import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

function ChangeProfilePhotoModal({
  handleProfileimageChange,
  isOpen,
  onClose,
  onOpen,
}) {
  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}>Modal Title</ModalHeader>
          <ModalBody>
            <div className="flex flex-col items-center">
              <label
                for="profileImage"
                className="font-bold py-3 text-blue-600 text-center cursor-pointer text-xs w-full"
              >
                Upload Photo
              </label>
              <input
                onChange={handleProfileimageChange}
                type="file"
                id="profileImage"
                name="profileImage"
              />
            </div>
            <hr />

            <p className="font-bold py-3 text-red-600 text-center">
              Remove Photo
            </p>
            <hr />
            <p className="py-3 text-center" onClick={onClose}>
              Cancel
            </p>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ChangeProfilePhotoModal;
