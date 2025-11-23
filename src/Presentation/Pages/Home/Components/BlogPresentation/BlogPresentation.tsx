import { Fragment } from "react/jsx-runtime";

import { Routes } from "@Infrastructure/Router/Routes";
import { Link } from "@Presentation/Components/Elements";
import { BlogPresentationCard } from "./components";

import styles from "./BlogPresentation.module.css";

interface ArticleFake {
  title: string;
  smallDescription: string;
}

const articleFake: ArticleFake[] = [
  { title: "Arquitectura Limpia", smallDescription: "" },
  { title: "Docker", smallDescription: "Introducción enfocada a contenedores" },
  { title: "Principios S.O.L.I.D.", smallDescription: "" },
  { title: "SQL", smallDescription: "" },
];

export const BlogPresentation = () => {
  return (
    <div className={styles.blogPresentation}>
      <div className={styles.blogPresentationContent}>
        <div style={{ flex: 2 }}>
          <h2>Artículos sobre desarrollo.</h2>
          <div className={styles.articlesAccess}>
            {articleFake.map((article) => (
              <Fragment key={article.title}>
                <BlogPresentationCard title={article.title} smallDescription={article.smallDescription} />
              </Fragment>
            ))}
          </div>
          <Link route={Routes.AboutMe} className="linkButton">
            Blog
          </Link>
        </div>
        <div className={styles.profilePicture}>
          <img src="./profile.jpg" alt="profile-picture" />
        </div>
      </div>
    </div>
  );
};
