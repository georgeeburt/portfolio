import Container from '@/components/container';

export default function RootContent() {
  return (
    <Container>
      <main>
        <div>
          <h1 className="text-[2rem] lg:text-[3rem] font-bold">
            Hello, my name is{' '}
            <span className="bg-purple-gradient text-transparent bg-clip-text">
              George
            </span>
          </h1>
        </div>
      </main>
    </Container>
  );
}
