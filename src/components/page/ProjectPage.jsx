/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unknown-property */
import React from 'react';
import MainLayout from '../fragment/MainLayout.jsx';
import HeaderPage from '../fragment/HeaderPage.jsx';
import Card from '../element/Card/Card.jsx';
import image from '../../constant/image.js';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Project1 from '../../assets/Project/Project1.png';
import Project2 from '../../assets/Project/Project2.png';
import Project3 from '../../assets/IMG/E-Commerce.png';

const project = [
  {
    title: 'Seondall',
    banner: Project1,
    description:
      ' is a web app that integrates with AI, so it produces images that match the words entered',
    stack: [`${image.React}`, `${image.Node}`],
  },
  {
    title: 'Smart-Lamp',
    banner: Project2,
    description:
      'A website that integrates with IOT, which can manage home lights that have been specially designed',
    stack: [`${image.React}`, `${image.Node}`],
  },
  {
    title: 'Wang Store',
    banner: Project3,
    description:
      'an electronics e-commerce website offering a wide range of top-quality electronic devices and accessories with a safe and convenient online shopping experience',
    stack: [
      `${image.React}`,
      `${image.Node}`,
      `${image.Express}`,
      `${image.Mongodb}`,
    ],
  },
];

const Project = () => {
  const controlCard = useAnimation();
  const [card, inCard] = useInView();

  React.useEffect(() => {
    if (inCard) {
      controlCard.start({ y: 0, transition: { duration: 0.5 } });
    }
  }, [controlCard, inCard]);
  return (
    <MainLayout>
      <section className='grid grid-rows-projectSm gap-y-5 md:grid-rows-projectMd'>
        <HeaderPage.ProjectsHeader />
        <div className='bg-sixth px-5 py-20' id='card'>
          <div className='grid gap-y-16 md:grid-cols-2 xl:grid-cols-3 md:gap-x-10 mt-5 md:mt-10  py-20'>
            {project.map((items) => (
              <motion.div
                className='flex flex-col gap-y-2 w-full'
                ref={card}
                initial={{ y: 200 }}
                animate={controlCard}
                transition={{ duration: 0.5 }}
                id='project'
              >
                <Card.Header img={items.banner} />
                <Card.Body
                  title={items.title}
                  description={items.description}
                  link={items.link}
                />
                <div className='flex flex-col gap-y-3 gap-x-2'>
                  <p className='font-bold text-lg md:text-xl'>
                    Featured technologies used
                  </p>
                  <div className='flex'>
                    {items.stack.map((item) => (
                      <img src={item} className='w-8' />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Project;
