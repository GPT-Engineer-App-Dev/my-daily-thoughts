import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Button, useColorMode } from "@chakra-ui/react";
import Index from "./pages/Index.jsx";
import AddPost from "./pages/AddPost.jsx";
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  const deletePost = (index) => {
    setPosts(posts.filter((_, i) => i !== index));
  };

  const ColorModeSwitcher = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
      <Button onClick={toggleColorMode} position="fixed" top="1rem" right="1rem">
        {colorMode === "light" ? "Dark Mode" : "Light Mode"}
      </Button>
    );
  };

  return (
    <Router>
      <ColorModeSwitcher />
      <Routes>
        <Route exact path="/" element={<Index posts={posts} deletePost={deletePost} />} />
        <Route exact path="/add-post" element={<AddPost addPost={addPost} />} />
      </Routes>
    </Router>
  );
}

export default App;
