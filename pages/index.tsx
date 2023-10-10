import {FaFacebook, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube, FaDribbble} from 'react-icons/fa6';
import {LuComputer} from 'react-icons/lu';
import {Sidebar} from '@/components/Sidebar'; 
import {Descripcion} from '@/components/Descripcion'; 
import {Knowledge} from '@/components/Knowledge'; 

const Home = () => {
  return (
    <div className='bg-white text-black w-full  flex'>
      <Sidebar />
      <main className ='debug w-3/4 px-3'>
        <nav  className ='bg-beige-uno debug w-{500px} py-10 px-10'>
          <div className="flex justify-between items-center mx-auto max-w-4xl ">
            <div className="text-left">
              <div className="mb-4">
                <p className="text-black text-2xl font-bold mb-1">Yo soy Yuly</p>
                <p className="text-black mb-1">Desarrolladora</p>
                <p className="text-yellow-500">Front-End</p>
              </div>
              <p className="text-gray-500 text-sm mb-4">Lorem</p>
              <button className="bg-yellow-500 text-black py-2 px-4 rounded">HIRE ME -&gt;</button>
            </div>
            <div>
              <img src="/images/Foto-imagen.jpg" alt="Foto" className="w-48 h-48 object-cover" />
            </div>
          </div>
        </nav>
          <div className='text-center'>
          <Descripcion titulo="knowledge" texto="sAmet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Daler
Do Amet Sint. Vellt Officia Consequat Duis Enim Velit Mollit.
Lorem lpsum"/>
          <div>
            <div className='flex gap-5'>
              <div className='bg-beige-uno debug w-{500px} py-5 px-10'>
              <Knowledge Icon={LuComputer} titulo="Web Development" texto="Blog, E-Commerce" />
              </div>
              <div className='bg-beige-uno debug w-{500px} py-5 px-10'>
              <Knowledge Icon={LuComputer} titulo="Web Development" texto="Blog, E-Commerce" />
              </div>
              <div className='bg-beige-uno debug w-{500px} py-5 px-10'>
              <Knowledge Icon={LuComputer} titulo="Web Development" texto="Blog, E-Commerce" />
              </div>
            </div>

          </div>
          <div className='py-5'>
            <div className='flex gap-5'>
              <div className='bg-beige-uno debug w-{500px} py-5 px-10'>
              <Knowledge Icon={LuComputer} titulo="Web Development" texto="Blog, E-Commerce" />
              </div>
              <div className='bg-beige-uno debug w-{500px} py-5 px-10'>
              <Knowledge Icon={LuComputer} titulo="Web Development" texto="Blog, E-Commerce" />
              </div>
              <div className='bg-beige-uno debug w-{500px} py-5 px-10'>
              <Knowledge Icon={LuComputer} titulo="Web Development" texto="Blog, E-Commerce" />
              </div>
            </div>

          </div>
          
          <Descripcion titulo="Education" texto="sAmet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Daler
Do Amet Sint. Vellt Officia Consequat Duis Enim Velit Mollit.
Lorem lpsum"/>
          <section>
            Cuadros
          </section>
          <Descripcion titulo="Portafolio" texto="sAmet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Daler
Do Amet Sint. Vellt Officia Consequat Duis Enim Velit Mollit.
Lorem lpsum"/>
        </div>
      </main>
      <aside className ='bg-beige-uno debug w-{200px} p-3 text-center'>
        <div className='flex flex-col gap-3'>
          <div>links</div>
          <div className='px-6'>
            <FaFacebook />
          </div>
          <div className='px-6'>
            <FaInstagram />
          </div>
          <div className='px-6'>
            <FaTwitter />
          </div>
          <div className='px-6'>
            <FaLinkedinIn />
          </div>
          <div className='px-6'>
            <FaYoutube />
          </div>
          <div className='px-6'>
            <FaDribbble />
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Home;


