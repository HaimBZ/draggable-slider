import Draggable from "./common/draggable";

export default function App() {
  const sliders = [
    {
      id: 1,
      min: 0,
      max: 100,
      step: 1,
      initialValue: 0
    },
    {
      id: 2,
      min: 0,
      max: 100,
      step: 1,
      initialValue: 50
    } /* ,
    {
      id: 3,
      min: 0,
      max: 100,
      step: 1,
      initialValue: 0
    },
    {
      id: 4,
      min: 0,
      max: 100,
      step: 1,
      initialValue: 0
    },
    {
      id: 5,
      min: 0,
      max: 100,
      step: 1,
      initialValue: 0
    } */
  ];
  return (
    <div>
      <Draggable sliders={sliders} />
    </div>
  );
}
