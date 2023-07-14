import Story from "./story-1";

const getStories = async () => {
  try {
    const stories = await fetch("http://localhost:3000/api/story");
    // .then((res) => res.json())
    // .then((res) => res.result);
    return stories.json();
  } catch (error) {
    console.log("Error:", error.message);
  }
};

export default async function StoryList() {
  const { result } = await getStories();

  console.log(result);

  return (
    <ul>
      {result.map((item, index) => (
        // <li className="my-5 bg-slate-100" key={index}>
        //   <h5>{item.storyTitle}</h5>
        //   <p>{item.storyContent}</p>
        // </li>
        <Story
          index={index}
          title={item.storyTitle}
          content={item.storyContent}
        />
      ))}
    </ul>
  );
}
