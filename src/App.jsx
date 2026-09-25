// App is the root component of my application.
// I imported the Gallery component from the components folder
// and rendered it inside App using <Gallery />.

import Gallery from "./components/Gallery";

function App() {
  return (
    <div>
      <Gallery />
    </div>
  );
}

export default App;
