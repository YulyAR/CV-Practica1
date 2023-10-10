
interface DescripcionProps{
    titulo:String;
    texto:String;
}

const Descripcion = ({titulo, texto}: DescripcionProps) => {
    return (
        <div className="text-center">
            <div>
            <span className="block text-lg font-bold px-3 py-3">{titulo}</span>
            <span className="block px-20 py-5">{texto}</span>
            </div>
        </div>

    );
};

export { Descripcion } ;