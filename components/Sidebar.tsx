import {GrCubes} from 'react-icons/gr';
import {BarraPorcentaje} from '@/components/Barra'; 

const Sidebar = () => {
    return (
        <aside className='debug w-{390px} flex'>
        <div className='bg-beige-uno px-10 py-4'>
        <section className="text-center">
        <div className="flex items-center justify-center h-20 w-20 bg-gray-200 rounded-full overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src="/images/Foto-imagen.jpg"
            alt="Foto"
          />
        </div>
          
            <div>Yuly Alvear</div>
            <div>Desarolladora Front-End</div>
          </section>
          <div>
            <section>
              <div className="flex justify-between px-2 py-1">
                <span>Age:</span>
                <span>34</span> 
              </div>
              <div className="flex justify-between px-2 py-1">
                <span>Residencia:</span>
                <span>BD</span> 
              </div>
              <div className="flex justify-between px-2 py-1">
                <span>Freelance:</span>
                <span className="text-green-500">Disponible</span> 
              </div>
              <div className="flex justify-between px-2 py-1">
                <span>Dirección:</span>
                <span>Env,Ant</span> 
              </div>
            </section>
          </div>
          <section>
            <div className="text-lg font-bold px-3 py-5">
              Lenguajes
            </div>
            <div>
              <div className="flex justify-between px-2 py-1">
                <span>Ingles</span>
                <span>60%</span> 
              </div>
              <BarraPorcentaje porcentaje="3/4"/>
              <div className="flex justify-between px-2 py-1">
                <span>Frances</span>
                <span>40%</span> 
              </div>
              <BarraPorcentaje porcentaje="1/3"/>
              <div className="flex justify-between px-2 py-1">
                <span>Portugues</span>
                <span>40%</span> 
              </div>
              <BarraPorcentaje porcentaje="3/4"/>
            </div>
          </section>
          <section>
            <div className="text-lg font-bold px-3 py-5">
              Lenguajes de Programacion
            </div>
            <div>
              <div className="flex justify-between px-2 py-1">
                <span>Java</span>
                <span>70%</span> 
              </div>
              <BarraPorcentaje porcentaje="1/2"/>
              <div className="flex justify-between px-2 py-1">
                <span>Html</span>
                <span>50%</span> 
              </div>
              <BarraPorcentaje porcentaje="3/4"/>
              <div className="flex justify-between px-2 py-1">
                <span>CSS</span>
                <span>40%</span> 
              </div>
              <BarraPorcentaje porcentaje="3/4"/>
              <div className="flex justify-between px-2 py-1">
                <span>Js</span>
                <span>60%</span> 
              </div>
              <BarraPorcentaje porcentaje="3/4"/>
            </div>
          </section>
          <section>
            <div className="text-lg font-bold px-3 py-5">
              Habilidades
            </div>
            <div className='flex items-center gap-4 px-3'>
              <GrCubes />
              <span>Bootstrap</span>
            </div>
            <div className='flex items-center gap-4 px-3'>
              <GrCubes />
              <span>Stylus, Sass</span>
            </div>
            <div className='flex items-center gap-4 px-3'>
              <GrCubes />
              <span>Gulp</span>
            </div>
            <div className='flex items-center gap-4 px-3'>
              <GrCubes />
              <span>Git</span>
            </div>
          </section>
        </div>
      </aside>
    );
};

export { Sidebar } ;