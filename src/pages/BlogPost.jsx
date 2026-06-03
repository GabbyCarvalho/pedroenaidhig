import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowLeft, FiCalendar, FiTag } from "react-icons/fi";
import { client } from "../sanity/client";
import "../styles/BlogPost.css";

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

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

// Renderiza o conteúdo Portable Text do Sanity
function PortableText({ blocks }) {
  if (!blocks) return null;
  return (
    <div className="postBody">
      {blocks.map((block, i) => {
        if (block._type === "image") {
          return (
            <div key={i} className="postBodyImage">
              <img src={block.asset?.url} alt={block.alt || ""} />
            </div>
          );
        }
        if (block._type !== "block") return null;

        const Tag = block.style === "h2" ? "h2"
          : block.style === "h3" ? "h3"
          : block.style === "h4" ? "h4"
          : block.style === "blockquote" ? "blockquote"
          : "p";

        const text = block.children?.map((child, j) => {
          let content = child.text;
          if (child.marks?.includes("strong")) content = <strong key={j}>{content}</strong>;
          if (child.marks?.includes("em")) content = <em key={j}>{content}</em>;
          return content;
        });

        return <Tag key={i}>{text}</Tag>;
      })}
    </div>
  );
}

// Botão flutuante WhatsApp
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

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = `*[_type == "post" && slug.current == $slug][0]{
      title,
      slug,
      excerpt,
      category,
      publishedAt,
      "mainImage": mainImage.asset->url,
      body
    }`;

    client.fetch(query, { slug })
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="postLoading">
        <div className="postLoadingSpinner" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="postNotFound">
        <h2>Post não encontrado</h2>
        <Link to="/blog" className="postBackBtn">
          <FiArrowLeft /> Voltar ao blog
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* ── HERO DO POST ── */}
      <section className="postHero">
        {post.mainImage ? (
          <img src={post.mainImage} alt={post.title} className="postHeroImg" />
        ) : (
          <div className="postHeroPlaceholder" />
        )}
        <div className="postHeroOverlay" />
        <div className="postHeroContent">
          <Link to="/blog" className="postBackBtn">
            <FiArrowLeft /> Voltar ao blog
          </Link>
          <span className="postHeroCategory">
            {categoryLabels[post.category] || post.category}
          </span>
          <h1 className="postHeroTitle">{post.title}</h1>
          <div className="postHeroMeta">
            <span><FiCalendar /> {formatDate(post.publishedAt)}</span>
            <span><FiTag /> {categoryLabels[post.category] || post.category}</span>
          </div>
        </div>
      </section>

      {/* ── CONTEÚDO ── */}
      <section className="postSection">
        <div className="postContainer">

          {/* Excerpt */}
          {post.excerpt && (
            <p className="postExcerpt">{post.excerpt}</p>
          )}

          {/* Corpo do post */}
          <PortableText blocks={post.body} />

        </div>
      </section>

      {/* ── CTA ── */}
      <section className="postCta">
        <div className="postCtaContent">
          <span className="postCtaTag">Ficou com dúvidas?</span>
          <h2 className="postCtaTitle">Fale com um advogado especialista</h2>
          <p className="postCtaSub">
            Cada caso é único. Agende uma consulta e receba uma orientação jurídica
            personalizada para a sua situação.
          </p>
          <div className="postCtaActions">
            <a
              href="https://wa.me/SEUNUMERO"
              target="_blank"
              rel="noreferrer"
              className="btnPrimary"
            >
              <FaWhatsapp /> Agendar consulta pelo WhatsApp
            </a>
            <Link to="/contato" className="btnOutline">
              Enviar mensagem
            </Link>
          </div>
        </div>
      </section>

      <FloatingWhatsApp />
    </>
  );
}