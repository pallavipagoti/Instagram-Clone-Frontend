export const uploadToCloudinary = async (image) => {
  if (image) {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "Instagram");
    data.append("cloud_name", "dx6soq3wg");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dx6soq3wg/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const fileData = await res.json();

    console.log("fileData", fileData);
    return fileData.url.toString();
  }
};
