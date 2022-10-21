import axios from "axios";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { PokeList } from "../components/PokeList";

interface HomeProps {
  data: {
    name: string;
    url: string;
  }[]
}

export default function Home({data}: HomeProps) {
  return (
    <div className="container">
      <Header />
      <PokeList data={data}/>
      <Footer />
    </div>
  )
}

export const getStaticProps = async () => {
  const data = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0").then(res => res.data.results)

  return {
    props: {
      data
    },
    revalidate: 604800,
  }
}
