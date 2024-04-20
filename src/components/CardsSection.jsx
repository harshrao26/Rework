import React from 'react';
import Card from './Card'; // Import the Card component

function CardsSection() {
  return (
    <div className='flex gap-2 h-96 justify-between md:px-32 px-8'>
      <Card width={"basis-2/3"} height={80} color="bg-zinc-800" />
      <Card width={"basis-2/3"} height={80} color='bg-zinc-800' hovering= 'violet-600'/>
    </div>
  );
}

export default CardsSection;
