import React from "react";
import StoryViewer from "../../Components/StoryComponents/StoryViewer";

const Story = () => {
  const story = [
    {
      image:
        "https://images.pexels.com/photos/14747089/pexels-photo-14747089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      image:
        "https://images.pexels.com/photos/3750767/pexels-photo-3750767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      image:
        "https://images.pexels.com/photos/19102764/pexels-photo-19102764/free-photo-of-lamp-illuminating-christmas-tree-and-wreath.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      image:
        "https://images.pexels.com/photos/14686097/pexels-photo-14686097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      image:
        "https://images.pexels.com/photos/14643689/pexels-photo-14643689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];
  return (
    <div>
      <StoryViewer stories={story} />
    </div>
  );
};

export default Story;
