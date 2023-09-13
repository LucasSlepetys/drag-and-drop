import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

export default function TextBar({}) {
  return (
    <div className='w-full absolute bottom-0 padding-4 rounded-xl bg-white color-black flex justify-between items-center'>
      <input
        type='text'
        placeholder='Send New Message'
        className='w-full m-2 p-2 border-transparent focus:border-transparent focus:ring-0'
      />
      <AiOutlineSend className='m-4 text-4xl rounded-full text-black' />
    </div>
  );
}
