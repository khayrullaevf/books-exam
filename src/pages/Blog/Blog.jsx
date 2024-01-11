import Header from "../../components/Header/Header";
import "./blog.scss";
import blogBg from "../../assets/imgs/blog-hero.png";
const Blog = () => {
  const title = "blog mybook";
  const subtitle =
    "lightweight article where discussing matters relating to the book";

  return (
    <div className="blog">
      <Header title={title} bg={blogBg} subtitle={subtitle} />
    </div>
  );
};

export default Blog;
