import Image from 'next/image'
import { Montserrat, Fraunces } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })
const fraunces = Fraunces({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex h-screen flex-col items-center justify-center md:flex-row`} >
        <div className = "md:inline-flex container rounded-lg h-[550px] w-[300px] bg-white md:h-[600px] md:w-[850px]">
          <div className = "flex h-1/3 w-full md:h-full md:w-1/2 ">
            <Image 
            src="/image-product-mobile.jpg"  
            width={686}
            height={480}
            className='rounded-tl-md rounded-tr-md sm:hidden' />
            <Image 
            src="/image-product-desktop.jpg"  
            width={600}
            height={900}
            className='rounded-bl-md rounded-tl-md hidden sm:block' />
          </div>

          <div className = "block  md:h-full md:w-1/2 p-7 md:p-11"> 
            <p className='textMont textDGB text-[12px] md:text-[21px]'>P E R F U M E</p>
            <h1 className= 'textFrau textVDB text-2xl font-extrabold md:text-5xl md:font-bold py-4'>Gabrielle Essence Eau De Parfum</h1>
            <p className='textMont textDGB text-[12px] md:text-[21px] md:py-4'>A floral, solar and voluptuous interpretation composed by Oliver Polge, Perfumer-Creator for the House of CHANEL</p>
            <div className="textFrau flex-row py-5 md:py-6">
              <p className="inline textDC text-4xl md:text-5xl font-bold">$149.99</p>
              <p className="textDGB text-[12px] md:text-[19px] inline mx-5 line-through">$169.99</p>
            </div>
            <button className = 'btn btn-cyan items-center inline-flex textMont'>
              <img src="/icon-cart.svg" alt="Cart icon" 
              className='inline-flex mx-4 my-1}' />Add to Cart</button>
          </div>
        </div>
    </main>
  )
}
