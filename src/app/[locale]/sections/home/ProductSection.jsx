import Image from 'next/image'; 
import ServicesSection from './ServicesSection';
import Container from '../../components/ui/Container';


export default function ProductSection() {
  return (
    <section className="relative py-[120px] min-h-[880px]">
      <Container>
        <div className={`absolute xl:max-w-[500px] w-full top-0 left-1/2 -translate-x-1/2`}><img src="./ProductsSection/Ellipse-grey-500px.svg" alt="Ellipse-grey-500px"></img></div>
        <div className={`absolute xl:max-w-[400px] w-full top-[106px] left-0`}><img src="./ProductsSection/Ellipse-orange-400px.svg" alt="Ellipse-orange-400px"></img></div>
        <div className={`absolute xl:max-w-[100px] w-full top-[633px] left-[61px]`}><img src="./ProductsSection/Ellipse-grey-100px.svg" alt="Ellipse-grey-100px"></img></div>
        <div className={`absolute xl:max-w-[250px] w-full top-[553px] left-[633px]`}><img src="./ProductsSection/Ellipse-orange-250px.svg" alt="Ellipse-orange-250px"></img></div>
      </Container>
      

      <ServicesSection className="z-1"/>
    </section>
  );
}