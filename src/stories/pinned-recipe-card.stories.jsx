import PinnedRecipeComponent from "../components/Pinned";

export default {
  title: "Recipes/Pinned Recipes",
  component: PinnedRecipeComponent,
};

const Template = (args) => <PinnedRecipeComponent {...args} />;
export const PinnedRecipe = Template.bind({});

PinnedRecipe.args = {
  title: "Adobo ni Ka-Sabado agsdgs",
  image_url:
    "https://images.pexels.com/photos/13185294/pexels-photo-13185294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
 
};
export const LargeSize = Template.bind({});
LargeSize.args = {
  ...PinnedRecipe.args,
  size: "large",
};

export const MediumSize = Template.bind({});
MediumSize.args = {
  ...PinnedRecipe.args,
  size: "medium",
};

export const SmallSize = Template.bind({});
SmallSize.args = {
  ...PinnedRecipe.args,
  size: "small",
};
