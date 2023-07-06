import style from "./style.module.css";
import { Button } from "@/components/UI/Atoms/Button";
import Layout from "@/infra/Layout";
import Title from "@/components/UI/Atoms/Title";
import { SendInclined } from "umbrella-icons-library";
import Link from "@/infra/Link";
import { useEffect, useState } from "react";

const HomeTemplate: React.FunctionComponent = () => {

  const [pathIntro, setPathIntro] = useState('imagens/hot-air-balloon.svg');

  useEffect(() => {
    document.body.dataset.theme !== 'dark' ? setPathIntro('imagens/hot-air-balloon-light.svg') : setPathIntro('imagens/hot-air-balloon.svg')
  }, [])

  return (
    <Layout>
      <section className={style.welcome}>
        <div id="mainContent" className={style.text}>
          <p>Olá,</p>
          <Title asChild>
            <h1>Meu nome é Lucas Fernando.</h1>
          </Title>
          <p className={style.description}>Desenvolvedor frontend.</p>

          <Button.Root size="lg" asChild>
           <Link href="/contact">
            <Button.Icon>
                <SendInclined />
              </Button.Icon>
              Vamos conversar
            </Link>
          </Button.Root>
        </div>

        <div className={style.image}>
          <img
            src={pathIntro}
            alt="Ilustração de um balão de ar quente voando"
          />
        </div>
      </section>
    </Layout>
  );
};

export default HomeTemplate;
