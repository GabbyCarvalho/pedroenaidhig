import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { client } from "../sanity/client";
import "../styles/Blog.css";

const categoryLabels = {
  trabalhista: "Direito Trabalhista",
  imobiliario: "Direito Imobiliário",
  civil: "Direito Civil",
  familia: "Direito de Família",
  societario: "Direito Societário",
  digital: "Direito Digital",
  ambiental: "Direito Ambiental",
  geral: "Geral",
};

const categories = [
  { value: "todos", label: "Todos" },
  { value: "trabalhista", label: "Direito Trabalhista" },
  { value: "imobiliario", label: "Direito Imobiliário" },
  { value: "civil", label: "Direito Civil" },
  { value: "familia", label: "Direito de Família" },
  { value: "societario", label: "Direito Societário" },
  { value: "digital", label: "Direito Digital" },
  { value: "geral", label: "Geral" },
];

/* ─── FLOATING WHATSAPP BUTTON ─── */
function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <a
      href="https://wa.me/SEUNUMERO"
      target="_blank"
      rel="noreferrer"
      aria-label="Falar pelo WhatsApp"
      className={`floatingWa ${visible ? "floatingWaVisible" : ""}`}
    >
      <FaWhatsapp />
      <span>Fale conosco</span>
    </a>
  );
}

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("todos");

  useEffect(() => {
    const query = `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      category,
      publishedAt,
      "mainImage": mainImage.asset->url
    }`;

    client.fetch(query)
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filtered =
    activeCategory === "todos"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* ── HERO ── */}
      <section className="blogHero">
        <div className="blogHeroBg" />
        <div className="blogHeroContent">
          <span className="blogHeroTag">Conhecimento jurídico</span>
          <h1 className="blogHeroTitle">Blog</h1>
          <p className="blogHeroSub">
            Artigos, atualizações e orientações jurídicas escritas por quem entende do assunto.
          </p>
        </div>
      </section>

      {/* ── FILTROS ── */}
      <section className="blogFiltersSection">
        <div className="blogContainer">
          <div className="blogFilters">
            {categories.map((cat) => (
              <button
                key={cat.value}
                className={`blogFilterBtn ${activeCategory === cat.value ? "active" : ""}`}
                onClick={() => setActiveCategory(cat.value)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── GRID DE POSTS ── */}
      <section className="blogGridSection">
        <div className="blogContainer">
          {loading ? (
            <div className="blogLoading">
              <div className="blogLoadingSpinner" />
            </div>
          ) : filtered.length === 0 ? (
            <p className="blogEmpty">Nenhum post encontrado nessa categoria.</p>
          ) : (
            <div className="blogGrid">
              {filtered.map((post) => (
                <Link
                  key={post._id}
                  to={`/blog/${post.slug.current}`}
                  className="blogCard"
                >
                  <div className="blogCardImage">
                    {post.mainImage ? (
                      <img src={post.mainImage} alt={post.title} />
                    ) : (
                      <div className="blogCardImagePlaceholder" />
                    )}
                    <div className="blogCardOverlay">
                      <span className="blogCardCategory">
                        {categoryLabels[post.category] || post.category}
                      </span>
                    </div>
                  </div>

                  <div className="blogCardContent">
                    <span className="blogCardCategoryTag">
                      /// {categoryLabels[post.category] || post.category}
                    </span>
                    <h2 className="blogCardTitle">{post.title}</h2>
                    <p className="blogCardDate">{formatDate(post.publishedAt)}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}