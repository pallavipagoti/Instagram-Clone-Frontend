import React, { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Stack,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserProfileAction,
  updateUserAction,
} from "../../Redux/User/Action";
import { useToast } from "@chakra-ui/react";

import { uploadToCloudinary } from "../../Config/UploadToCloudinary";
import ChangeProfilePhotoModal from "./ChangeProfilePhotoModal";
import { useNavigate } from "react-router-dom";

const EditAccountDetails = () => {
  const { user } = useSelector((store) => store);
  const toast = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [imageFile, setImageFile] = useState(null);
  const [initialValues, setInitialValues] = useState({
    name: "",
    username: "",
    email: "",
    bio: "",
    mobile: "",
    gender: "",
    website: "",
    private: false,
  });

  useEffect(() => {
    dispatch(getUserProfileAction(token));
  }, [token, dispatch]);

  useEffect(() => {
    const newValue = {};

    for (let item in initialValues) {
      if (user.regUser && user.regUser[item]) {
        newValue[item] = user.regUser[item];
      }
    }
    console.log("new value : ", newValue);
    formik.setValues(newValue);
  }, [user.regUser]);

  const formik = useFormik({
    initialValues: { ...initialValues },
    onSubmit: (values) => {
      const data = {
        jwt: token,
        data: { ...values, id: user.regUser?.id },
      };
      dispatch(updateUserAction(data));
      toast({
        title: "Account updated...",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      navigate(`/${user.regUser?.username}`);
    },
  });

  async function handleProfileimageChange(event) {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const image = await uploadToCloudinary(selectedFile);
      setImageFile(image);
      const data = {
        jwt: token,
        data: { image, id: user.regUser?.id },
      };

      dispatch(updateUserAction(data));
    }
    // dispatch(getUserProfileAction(token))
    onClose();
  }

  return (
    <div className="border rounded-md p-10 lg:px-40">
      <div className="flex pb-7">
        <div className="w-[15%]">
          <img
            className="w-8 h-8 rounded-full"
            src={
              imageFile ||
              user.regUser?.image ||
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
            }
            alt=""
          />
        </div>
        <div>
          <p className="capitalize">{user.regUser?.username}</p>
          <p
            onClick={onOpen}
            className="font-bold text-blue-800 cursor-pointer"
          >
            Change Profile Photo
          </p>
        </div>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <Stack spacing="6">
          <FormControl className="flex" id="name">
            <FormLabel className="w-[15%]">Name</FormLabel>
            <div className="w-full">
              <Input
                placeholder="Name"
                className="w-full"
                type="text"
                {...formik.getFieldProps("name")}
              />
              <FormHelperText className="text-xs">
                Help people discover your account by using the name you're known
                by: either your full name, nickname, or business name.
              </FormHelperText>

              <FormHelperText className="text-xs">
                you can only change your name twice within 14 days.
              </FormHelperText>
            </div>
          </FormControl>

          <FormControl className="flex" id="username">
            <FormLabel className="w-[15%]">Username</FormLabel>
            <div className="w-full">
              <Input
                placeholder="username"
                className="w-full"
                type="text"
                {...formik.getFieldProps("username")}
              />
              <FormHelperText className="text-xs">
                In most cases, you'll be able to change your username back to
                amar.amar for another 14 days. Learn more
              </FormHelperText>
            </div>
          </FormControl>

          <FormControl className="flex" id="website">
            <FormLabel className="w-[15%]">Website</FormLabel>
            <div className="w-full">
              <Input
                placeholder="Website"
                className="w-full"
                type="text"
                {...formik.getFieldProps("website")}
              />
              <FormHelperText className="text-xs">
                Editing your links is only available on mobile.Visit the
                instagram app and edit your profile to change the websites in
                your bio.
              </FormHelperText>
            </div>
          </FormControl>

          <FormControl className="flex" id="bio">
            <FormLabel className="w-[15%]">Bio</FormLabel>
            <div className="w-full">
              <Textarea
                placeholder="Bio"
                className="w-full"
                type="text"
                {...formik.getFieldProps("bio")}
              />
            </div>
          </FormControl>

          <div className="py-10">
            <p className="font-bold text-sm">Personal Information</p>
            <p className="text-xs">
              Provide your personal information,even if the account is used for
              a business,a pet or something else. This won't be part of your
              public profile
            </p>
          </div>

          <FormControl className="flex" id="email">
            <FormLabel className="w-[15%]">Email</FormLabel>
            <div className="w-full">
              <Input
                placeholder="Email"
                className="w-full"
                type="text"
                {...formik.getFieldProps("email")}
              />
            </div>
          </FormControl>

          <FormControl className="flex" id="mobile">
            <FormLabel className="w-[15%]">Mobile</FormLabel>
            <div className="w-full">
              <Input
                placeholder="Mobile"
                className="w-full"
                type="text"
                {...formik.getFieldProps("mobile")}
              />
            </div>
          </FormControl>

          <FormControl className="flex" id="gender">
            <FormLabel className="w-[15%]">Gender</FormLabel>
            <div className="w-full">
              <Input
                placeholder="Gender"
                className="w-full"
                type="text"
                {...formik.getFieldProps("gender")}
              />
            </div>
          </FormControl>

          <div>
            <Button colorScheme="blue" type="submit" className="">
              submit
            </Button>
          </div>
        </Stack>
      </form>

      <ChangeProfilePhotoModal
        handleProfileimageChange={handleProfileimageChange}
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
      />
    </div>
  );
};

export default EditAccountDetails;
