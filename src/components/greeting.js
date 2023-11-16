import '../css/greeting.css'

const Greeting = () => {

    return (
        <div className='
            greetingContainer
            flex
            flex-col
            items-center
            justify-center
            h-1/4
            w-11/12
            bg-primary
            backdrop-blur-[2px]
            rounded-3xl
            px-20
            my-20
            mx-10
        '>
            <div className='
            flex
            flex-row
            justify-start
            items-center
            w-full
            h-auto
            tracking-[0.2rem]
            text-lg
            md:text-xl
            lg:text-2xl
            xl:text-3xl
            font-bold
            '>
                Hi there,
            </div>
            <div className='
            flex
            flex-row
            flex-wrap
            justify-start
            items-center
            w-full
            h-auto
            mt-4
            tracking-[0.1rem]
            text-sm
            md:text-base
            lg:text-xl
            xl:text-lg
            2xl:text-xl
            font-bold
            '>
                <div>My name is&nbsp;<span className='text-primary'>Phạm Gia Huy</span>.&nbsp;</div>
                <div>I'm currently a&nbsp;<span className='text-primary'>Front-end developer</span>.&nbsp;</div>
                <div>Welcome to&nbsp;<span className='text-primary'>my blog</span>.&nbsp;</div>
            </div>
        </div>
    )
}

export default Greeting