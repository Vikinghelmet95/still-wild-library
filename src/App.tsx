import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Library from "./pages/Library";
import CollectionPage from "./pages/CollectionPage";
import StoryCardPage from "./pages/StoryCardPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/library" element={<Library />} />
      <Route path="/collection/:id" element={<CollectionPage />} />
      <Route
        path="/collection/:collectionId/card/:cardId"
        element={<StoryCardPage />}
      />
    </Routes>
  );
}

export default App;