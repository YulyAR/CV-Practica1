import { IconType } from 'react-icons';

interface KnowledgeProps {
  Icon: IconType;
  titulo: String;
  texto: String;
}

const Knowledge = ({ Icon, titulo, texto }: KnowledgeProps) => {
  return (
    <div className="text-center px-10 py-100">
      <div>
        <Icon className='items-center text-6xl'/> 
        <span className="block font-bold py-3">{titulo}</span>
        <span className="block py-2">{texto}</span>
      </div>
    </div>
  );
};

export { Knowledge };
