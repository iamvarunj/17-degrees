import React from 'react'

function DiningHeader() {
  return (
    <section className="relative z-0 container h-full md:h-[450px] flex items-center justify-center px-2 my-2">
        <div className="relative z-0 max-w-[900px] w-full h-full bg-white flex flex-col md:flex-row items-center md:justify-between">
          <motion.div
            className="order-2 md:order-1 relative w-full sm:w-1/2 h-fit p-4 md:p-0"
            variants={variants}
            initial="hidden"
            whileInView="show"
          >
            <motion.h4 className="uppercase" variants={item}>
              discover the joys of an
            </motion.h4>
            <motion.h1
              className="uppercase font-saveurRegular text-primary-pink"
              variants={item}
            >
              unhurried moment
            </motion.h1>
            <motion.p className="" variants={item}>
              From casual bites to celebratory meals to handcrafted cocktails -
              at 17 Degrees, we know what it takes to elevate your experience.
            </motion.p>
          </motion.div>

          <div className="order-1 md:order-2 relative w-full sm:w-1/2 h-fit px-2">
            <div className="size-[3rem,32vw,4rem] bg-black rounded-full">
              <img
                src={tasteSection1}
                alt=""
                className="relative w-full h-auto z-[12]"
                loading="lazy"
                width={200}
                height={200}
                srcSet=""
              />
            </div>
            <div className="absolute z-0 w-[35%] h-auto -top-2 right-0">
              <img src={donut} alt="" className="w-full h-auto" />
              <motion.img
                src={donutCrescent}
                alt=""
                className="absolute z-1 w-[22%] right-[31%] top-[31%]"
                whileInView={{ rotate: [-60, 0], opacity: [0, 1] }}
                transition={{
                  delay: 0.4,
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                width={100}
                height={100}
                loading="lazy"
                srcSet=""
              />
            </div>
          </div>
        </div>
      </section>
  )
}

export default DiningHeader