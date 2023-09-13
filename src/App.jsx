import TextBar from './TextBar';
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const DATA = [
  {
    id: 'lkasndfaasd76fga98sdfh4sdnufh',
    text: 'Hey Dasan!',
    order: 0,
    sentBy: 'lucas',
    sentAt: '10:00',
  },
  {
    id: 'lkasnasdsdafdfa76fgaas98fh4nufh',
    text: 'How are you?',
    order: 1,
    sentBy: 'lucas',
    sentAt: '10:01',
  },
  {
    id: 'lkasndfa76fgaasdf9dsa8fh4nufh',
    text: 'Good Good',
    order: 2,
    sentBy: 'dasan',
    sentAt: '10:01',
  },
  {
    id: 'lkasndfa76fga9dasdfasa8fh4sdfanufh',
    text: 'Not doing much',
    order: 3,
    sentBy: 'dasan',
    sentAt: '10:02',
  },
  {
    id: 'lkasndfasdfas76fga98fh4nufh',
    text: 'That is very nice!',
    order: 4,
    sentBy: 'lucas',
    sentAt: '10:02',
  },
  {
    id: 'lkasndfa76fga9dafsdf8hgf4nufh',
    text: 'Yeah, I was walking in the park, and this dog looked at me and said, "Hello, human!"',
    order: 5,
    sentBy: 'lucas',
    sentAt: '10:03',
  },
  {
    id: 'lkasndfa76fga9dsasffddf8h4nufh',
    text: "Seriously? That's incredible!",
    order: 6,
    sentBy: 'dasan',
    sentAt: '10:06',
  },
  {
    id: 'lkasndfa76fga9dafadafdsdsdf8h4nufh',
    text: 'Yeah, I said, "Uh...hello, dog?" It was so unexpected!',
    order: 7,
    sentBy: 'lucas',
    sentAt: '10:07',
  },
  {
    id: 'lkasndfa76fdga9dsddadasfddf8h4nufh',
    text: 'Haha, no way! What did you say back?',
    order: 8,
    sentBy: 'dasan',
    sentAt: '10:08',
  },
  {
    id: 'lkasndfa76fddasdffga9dafsdddf8h4nufh',
    text: "That's hilarious! Did the dog have anything else to say?",
    order: 9,
    sentBy: 'dasan',
    sentAt: '10:10',
  },
  {
    id: 'lkasndfa72343436fga9dsafasddf8h4nufh',
    text: 'Yeah, it asked for directions to the nearest pizza place.',
    order: 10,
    sentBy: 'lucas',
    sentAt: '10:13',
  },
  {
    id: 'lkasndfa76f5453ga9dafsddfdasf8h4nufh',
    text: 'Wait, so you gave directions to a talking dog for pizza?',
    order: 11,
    sentBy: 'dasan',
    sentAt: '10:15',
  },
  {
    id: 'lkasndfa766767fga9dafsasddfd8h4nufh',
    text: "Of course! I couldn't let a hungry, talking dog down!",
    order: 12,
    sentBy: 'lucas',
    sentAt: '10:20',
  },
  {
    id: 'lkasndfa76fga9dafsadd32fd8h4nufh',
    text: "Well, that's one unforgettable day. Talking dogs ordering pizza, what's next?",
    order: 13,
    sentBy: 'dasan',
    sentAt: '10:21',
  },
  {
    id: 'lkasndfa76fga9dafsasdfsddfd8h4nufh',
    text: "Who knows? Maybe they'll start a food critic blog!",
    order: 14,
    sentBy: 'lucas',
    sentAt: '10:22',
  },
];

const App = () => {
  const [messages, setMessages] = useState(DATA);

  const handleDrag = (results) => {
    const { type, destination, source } = results;

    if (!destination) return;
    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    )
      return;

    console.log(results);

    if (type === 'group') {
      const reorderedMessages = [...messages];
      const [removedMessage] = reorderedMessages.splice(source.index, 1);
      console.log(removedMessage);
      reorderedMessages.splice(destination.index, 0, removedMessage);
      console.log(reorderedMessages);
      setMessages(reorderedMessages);
    }
  };

  return (
    <div className='h-screen relative bg-slate-700 overflow-hidden'>
      <div className='h-screen pb-20 overflow-y-scroll'>
        <DragDropContext onDragEnd={handleDrag}>
          <Droppable droppableId='ROOT' type='group'>
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className='w-11/12 max-w-3xl mx-auto flex flex-col py-8'
              >
                {messages.map((message, index) => {
                  const { id, text, sentBy, sentAt } = message;
                  return (
                    <Draggable draggableId={id} key={id} index={index}>
                      {(provided) => (
                        <div
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          ref={provided.innerRef}
                          className={
                            sentBy === 'lucas' ? 'text-right m-3 ' : 'm-3'
                          }
                        >
                          <div className='rounded-md p-2 inline-block gap-2 max-w-90 bg-white text-black '>
                            <p className='capitalize mb-2 italic text-left'>
                              {sentBy}:
                            </p>
                            <p className='inline mr-2'>{text}</p>
                            <p className='inline text-slate-400'>{sentAt}</p>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  );
                })}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      <TextBar />
    </div>
  );
};

export default App;
