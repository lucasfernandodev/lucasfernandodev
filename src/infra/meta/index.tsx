import NextHead from "next/head";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

type HeadProps = {
  title: string;
};

const Head: React.FC<HeadProps> = ({ title }) => {

  const router = useRouter();
  const path = router.asPath !== "/" ? router.asPath : null;

  
  const description = "Olá, meu nome é Lucas Fernando, e sou desenvolvedor web.";

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={`https://lucasfernandodev.com.br/`}
        openGraph={{
          type: "website",
          url: `https://lucasfernandodev.com.br/${path !== null ? path : ""}`,
          title: title,
          description: description,
          images: [
            {
              url: `https://lucasfernandodev.com.br/SEO/screenshot-Lucas-Fernando-dev-portfolio.png`,
              width: 800,
              height: 600,
              alt: "Lucas Fernando - Portfolio",
            },
          ],
        }}
      />

      <NextHead>
        <link rel="shortcut icon" href="imagens/logo.svg" type="image/svg" />
        <meta
          name="keywords"
          content="Desenvolvedor, frontend, front-end, HTML, CSS, Lucas Fernando, Portfolio, dev front-end"
        ></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Lucas Fernando" />
        <meta name="google-site-verification" content="zKJh2tua7iegbZmW4zkKlSlSVoU5QGH0mOMp6H9NYQ8" />
      </NextHead>
    </>
  );
};

export default Head;
