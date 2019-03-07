import * as React from 'react'
import '../style/Toolbar.css';

interface IProps{
    brightnessHandler: (e: React.FormEvent)=>void;
    brightness: number;
}

function Toolbar({brightness,brightnessHandler}: IProps) {
    return (
    <div className="toolbar ">
            <p>Brightness</p>
            <input id="slider" 
                className="slider"
                type="range"
                onChange={brightnessHandler}
                min={0}
                max={2}
                step={0.1}
                value={brightness}/>
    </div>)
}

export default Toolbar