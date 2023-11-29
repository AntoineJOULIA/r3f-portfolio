import { skills } from "../constants";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm <span className="font-semibold blue-gradient_text drop-shadow">Antoine</span>
      </h1>
      <div className="flex flex-col gap-3 mt-5 text-slate-500">
        <p>
          Software Engineer based in France, specializing in technical education through hands-on learning and building
          applications.
        </p>
      </div>
      <div className="flex flex-col py-10">
        <h3 className="subhead-text">My skills</h3>
        <div className="flex flex-wrap gap-12 mt-16">
          {skills.map((skill) => (
            <div className="w-20 h-20 block-container" key={skill.name}>
              <div className="btn-back rounded-xl" />
              <div className="flex items-center justify-center btn-front rounded-xl">
                <img src={skill.imageUrl} alt={skill.name} className="object-contain w-1/2 h-1/2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
