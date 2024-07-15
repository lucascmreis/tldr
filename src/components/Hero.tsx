import logo from "../assets/logo.svg";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between item-center w-full mb-10 pt-3">
        <img src={logo} alt="tldr_logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => window.open("https://github.com/lucasreiscm")}
          className="black_btn"
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with <span className="font-medium">TLDR</span>, an
        open-source article summarizer that transforms lengthy articles into
        clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
