import Header from "../../components/Header/Header";
import "./blog.scss";
import blogBg from "../../assets/imgs/blog-hero.png";
import Footer from "../../components/Footer/Footer";
import Articles from "../../components/Articles/Articles";
const Blog = () => {
  const title = "blog mybook";
  const subtitle =
    "lightweight article where discussing matters relating to the book";

  return (
    <div className="blog">
      <Header title={title} bg={blogBg} subtitle={subtitle} />
      <Articles />
      <Footer />
    </div>
  );
};

export default Blog;
