import { NextPage } from "next";
import ContactTemplate from "@/components/UI/Templates/Contact";
import Head from "@/infra/meta";
const Contact: NextPage = () => {
  return (
    <>
      <Head title="Contato | Lucas Fernando · Desenvolvedor frontend" />
      <ContactTemplate />
    </>
  );
};

export default Contact;
