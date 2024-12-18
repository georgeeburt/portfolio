import Container from '@/components/container';
import Typer from '@/components/typer';

export default function RootContent() {
  return (
    <Container>
      <main>
        <div>
          <h1 className="text-[2rem] text-nowrap md:text-[2.5rem] lg:text-[4rem] font-bold">
            Hello, my name is{' '}
            <span className="bg-purple-gradient text-transparent bg-clip-text">
              George
            </span>
          </h1>
          <p className="text-[1.25rem] md:text-[1.5rem] lg:text-[2rem]">
            I'm a Full-stack Developer proficient in
          </p>
          <p className="bg-purple-gradient text-[1.25rem] text-transparent bg-clip-text md:text-[1.5rem] lg:text-[2rem]">
            <Typer />
          </p>
        </div>
      </main>
    </Container>
  );
}
