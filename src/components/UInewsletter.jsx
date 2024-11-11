const UInewsletter = () => {
    return (
      <>
        <section className="bg-[#f0f0f0] p-16">
          <div className="flex">
            <img className="-ml-16 -mb-32" src="./src/assets/images/UInewsletter.svg" alt="" />
            <div className="subscribe w-1/2 items-center text-center p-16">
            <p className="mb-4 mt-14">
  <span className="text-4xl font-bold">SUBSCRIBE</span><br></br><span className="text-3xl font-bold"> to our newsletter</span>
</p>
<p className="mb-36">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

              <form className="flex flex-col gap-12 mb-8">
                <input className="border-2 border-black p-4 bg-[#f0f0f0] placeholder-black" placeholder="NAME" type="text" />
                <input className="border-2 border-black p-4 bg-[#f0f0f0] placeholder-black" placeholder="MAIL" type="text" />
                <input className="border-2 border-black p-4 pb-32 bg-[#f0f0f0] placeholder-black" placeholder="MESSAGE" type="text" />
              </form>
              <button className="text-white bg-black py-4 px-8 mt-20">SEND MESSAGE</button>
            </div>
          </div>
        </section>
      </>
    );
  }
  
  export default UInewsletter;
  