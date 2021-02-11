import Layout from "../components/MyLayout.js";

export default function About() {
  return (
    <Layout bg="#000000">
      <div className='fullBio'>
      <span>I'm a graduate Software Engineer particularly interested 
        in working with Javascript(React, React Native, Nodejs, Svelte) 
       </span>
        <span>
        and designing(UI/UX) functional and beautiful interfaces. 
        Years experience working with Java, Python, HTML, CSS and Adobe XD.
        </span>
       <span>
        I am an individual with great problem-solving and team-working skills. 
        In my free time I prototype and develop video games using Unity.
        </span>
      </div>
      <style jsx>
        {`
        .fullBio {
          padding: 20px;
          grid-row: 2;
        }
          a {
            color: white;
            display: inline-block;
            transition: transform 0.3s ease-out;
          }

          a:hover {
            transform: translate(3px, -5px);
          }
        `}
      </style>
    </Layout>
  );
}
