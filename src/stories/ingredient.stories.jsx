import Ingredient from "../components/Ingredient";

export default {
  title: "Recipes/Ingredient Component",
  component: Ingredient,
};

const Template = (args) => <Ingredient {...args} />;
export const IngComponent = Template.bind({});

IngComponent.args = {
  quantity: 1,
  unit: "cup",
  description: "oat meal",
};
