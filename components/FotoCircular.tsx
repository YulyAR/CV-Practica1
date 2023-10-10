import React from 'react';

const FotoCircular = () => {
  return (
    <div className="flex items-center justify-center h-20 w-20 bg-gray-200 rounded-full overflow-hidden">
      <img
        className="h-full w-full object-cover"
        src="/images/Foto-imagen.jpg"
        alt="Foto"
      />
    </div>
  );
};

export { FotoCircular};