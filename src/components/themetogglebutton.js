import '../css/themetogglebutton.css'

import { useRef } from 'react'

const ThemeToggleButton = () => {

    const ref = useRef(null);

    const handleChangeTheme = () => {
        document.getElementById('checkbox').click();
    }

    const handleInputChange = () => {
        const theme = document.getElementById('container').classList;
        console.log(theme)
        if (theme.contains('dark')) {
            theme.remove('dark');
            theme.add('light');
        } else {
            theme.add('dark');
            theme.remove('light');
        }
    }
    return (
        <span
            onClick={() => handleChangeTheme()}
            className='
            w-16 h-8
            bg-black
            bg-no-repeat
            bg-cover
            relative
            rounded-full
            cursor-pointer
            '>
                <input onChange={handleInputChange} ref={ref} id='checkbox' type='checkbox'/>
                <label id='slider' className="slider"/>
        </span>)
}

export default ThemeToggleButton;