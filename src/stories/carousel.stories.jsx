import Carousel from "../components/Carousel";

export default {
  title: "Misc/Carousel",
  component: Carousel,
};

const Template = (args) => <Carousel {...args} />;
export const CarouselComponent = Template.bind({});

CarouselComponent.args = {
  slides: ["hi"],
};
