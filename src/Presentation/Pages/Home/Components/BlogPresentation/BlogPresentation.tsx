import { Fragment } from "react/jsx-runtime";

import { Routes } from "@Infrastructure/Router/Routes";
import { Link } from "@Presentation/Components/Elements";
import { BlogPresentationCard } from "./components";

import styles from "./BlogPresentation.module.css";

const articleFake: string[] = ["Arquitectura Limpia", "Docker", "Principios S.O.L.I.D.", "SQL"];

export const BlogPresentation = () => {
  return (
    <div className={styles.blogPresentation}>
      <div style={{flex: 2}}>
        <h2>Artículos sobre desarrollo.</h2>
        <div className={styles.articlesAccess}>
          {articleFake.map((article) => (
            <Fragment key={article}>
              <BlogPresentationCard cardText={article} />
            </Fragment>
          ))}
        </div>
        <Link route={Routes.AboutMe} className="linkButton">
          Blog
        </Link>
      </div>
      <div style={{flex: 1}}>
        <div className={styles.profilePicture}>
          <img src="./profile.jpg" alt="profile-picture" />
        </div>
      </div>
    </div>
  );
};
