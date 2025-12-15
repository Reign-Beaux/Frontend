import { useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { articles } from "../../ArticleData";
import styles from "./ArticleViewer.module.scss";
// Simple icon for back button (using text/symbol if no icon lib is available, or verify later)
// Assuming no external icon lib is strictly enforced, using SCSS for styling.

const ArticleViewer = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const article = articles.find(a => a.slug === slug);

    useEffect(() => {
        if (!article) {
            // Opcional: Redirigir a 404 o al Blog si no encuentra el slug
            // navigate("/404");
        }
        // Scroll to top when entering an article
        window.scrollTo(0, 0);
    }, [article, slug, navigate]);

    if (!article) {
        return (
            <div className={styles.notFound}>
                <h2>Artículo no encontrado</h2>
                <button onClick={() => navigate("/blog")} className={styles.backButton}>
                    Volver al Blog
                </button>
            </div>
        );
    }

    const ArticleComponent = article.component;

    const handleBack = () => {
        // Check if there's history in the state (could pass state from Link) or just default logic
        // If key is default, it means we likely landed here directly.
        if (location.key !== "default") {
            navigate(-1);
        } else {
            navigate("/blog");
        }
    };

    return (
        <div className={styles.viewerContainer}>
            <div className={styles.navigation}>
                <button onClick={handleBack} className={styles.backButton}>
                    ← Volver
                </button>
            </div>
            <div className={styles.contentWrapper}>
                <ArticleComponent />
            </div>
        </div>
    );
};

export default ArticleViewer;
