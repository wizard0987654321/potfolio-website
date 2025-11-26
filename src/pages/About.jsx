import AnimatedWord from "./AnimatedWord";

export default function About() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start space-y-10">
      <AnimatedWord text="About" />
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
          sed diam nonumy eirmod tempor invidunt ut labore et dolore 
          magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea 
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor 
          sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita 
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </p>
    </main>
  )
}
