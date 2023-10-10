
interface BarraProps{
    porcentaje:String;
}

const BarraPorcentaje = ({porcentaje}: BarraProps) => {
    return (
        <div className="border border-solid border-yellow-500 w-full ">
            <div className={`border border-solid border-yellow-500 w-${porcentaje}`}>
            </div>
        </div>

    );
};

export { BarraPorcentaje } ;