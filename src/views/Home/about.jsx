const About = () => {
  return (
    <div className="border border-dashed border-gray-500">
      <div className="p-4">
        <p>So...</p>
        <br />
        <p>
          This Create React App + Redux was made as a follow along of the 7th
          part of the course{" "}
          <a
            href="https://www.udemy.com/course/reactjs-guia-desde-0/"
            target="_blank"
          >
            <span className="underline">React.JS, Guía desde 0</span>
          </a>
        </p>
        <br />
        <p>
          It is a good course, but when reaching the Redux part you already know
          Zustand. So it becomes very boring the boilerplate Redux makes you do
        </p>
        <br />
        <p>
          For that reason, I was no so motivated when making this app (you can
          notice how little effort I put in the detail view, the last one I
          made)
        </p>
        <br />
        <p>
          So don't expect a clean code, or a nice UI. This just works and that's
          it
        </p>
      </div>
    </div>
  );
};

export default About;
