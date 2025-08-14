// JSX Code : jS + html

// Component based archi.
// 1. functional comp.
// 2. class comp
// 3. arrow frunctional comp

// const NewPage = () => {
//   return (
//     <div>
//       <h4>New arrow functional comp.</h4>
//     </div>
//   )
// }
// import NewApp from "./NewApp";
// import TodoList from "./TodoList";
import Activity from "./Activity";

export default function page() {
  return (
    <>
      <Activity />
    </>
  );
}
