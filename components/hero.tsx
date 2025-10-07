import { IoIosArrowRoundForward } from "react-icons/io";

export const Hero = () => {
  return (
    <section className="relative min-h-[50vh] lg:h-237 overflow-hidden bg-hero bg-cover bg-center bg-no-repeat">
      <div className="container min-h-[40vh] lg:h-full flex items-center justify-center xl:justify-end">
        <div className="lg:max-w-160 text-white text-center lg:text-left">
          <h1 className="h1">I’m Void Sir.</h1>
          <p className="mb-8 lg:mb-16 max-w-lg leading-relaxed">
            Tattoos have their own unique power and magic. They not only
            beautify the body but also the psyche.
          </p>
          <div>
            <button
              type="button"
              className="btn btn-sm lg:btn-lg btn-outline mx-auto lg:mx-0"
            >
              read more
              <IoIosArrowRoundForward size={20} />
            </button>
          </div>
        </div>
        <div className="hidden xl:flex absolute bottom-48 right-2 left-0 before:absolute before:inset-0 before:bg-outlineText before:bg-no-repeat before:bg-center before:bg-contain before:h-50" />
      </div>
    </section>
  );
};
