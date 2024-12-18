import Card from '@/components/ui/card';

export default function AboutContent() {
  const content = {
    intro: 'Hi, I\'m George, a Full-stack Developer from England, United Kingdom, passionate about designing and building scalable, efficient applications. My journey with coding began during my secondary school years, where I first discovered my passion for programming through Computer Science and Python. I thrive on solving complex problems and delivering meaningful solutions.',
    experience: 'Before transitioning into development, I managed key operations in a construction industry business, where I honed my problem-solving, communication, and leadership skills. These experiences now shape how I approach creating innovative and practical applications today.',
    web3Experience: 'With 5 years of experience in Web3, particularly on Solana, I\'ve developed a deep understanding of blockchain technologies and decentralized systems. What drives me is continuously expanding my knowledge across different technologies while maintaining a focus on delivering scalable solutions that create real impact.'
  };
  return (
    <Card>
      <div className="flex flex-col gap-6 relative py-8 z-10">
        <h2 className="text-[3rem] font-bold">About Me</h2>
        <p>
          {content.intro}
          <br />
          <br />
          {content.experience}
          <br />
          <br />
          {content.web3Experience}
        </p>
      </div>
    </Card>
  );
}
