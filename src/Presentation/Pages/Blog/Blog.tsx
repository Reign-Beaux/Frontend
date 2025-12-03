import styles from "./Blog.module.scss";

const Blog = () => {
  return (
    <section className={styles.blogContainer}>
      <h1 className="fade-in">Blog</h1>
      <p className="fade-in delay-1">Pensamientos, tutoriales y guías sobre desarrollo de software.</p>
    </section>
  );
};

export default Blog;
