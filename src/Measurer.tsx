import { CalculatedImage } from "./CalculatedImage";
import { useEffect, useState } from "preact/hooks";

const VerticalRuler = ({ height, count, unit, red, small }) => {
    return (
        <div style={{width: small ? '2em' : '15em', zIndex:'-1'}}>
            {[...Array(count)].map((_, index) => index).reverse().map((index, _) => (

        <div className="vertical-ruler" style={{ height: index == 0 ? 1 : height + 'px', color : red == true ? 'red' : 'black' }}>
        <div className="ruler">
            <div style={{position: 'absolute', bottom:2}}>{index}{unit}</div>
            <div key={index} className={red == true ? 'line-red' : 'line'}></div>
        </div>
        </div>
            ))}
        </div>
    );
};

export function Measurer({number: ppi}) {
    const [headMult, setHeadMult] = useState(0.5);
    const [lengthMult, setLengthMult] = useState(0.5);
    const [shaftMult, setShaftMult] = useState(0.5);
    const [widthMult, setWidthMult] = useState(1);
    
    return <>
    <div class="col mb-5 "> 
        <div class="d-flex flex-row align-items-end mt-5">
            <div class="pl-5">
                {/* <VerticalRuler height={ppi/2.54} count={24} unit={'cm'} red={false}  /> */}
                <VerticalRuler height={ppi} count={12} unit={'inch'} red small={false}  />
            </div>
            <div class="pl-5">
                    <div style={{position:'relative'}}>
                    <CalculatedImage model={{
                        imageTop: 'assets/9xlg7head.webp',
                        imageMid: 'assets/9xlg7mid.webp', 
                        imageBottom: 'assets/9xlg7shaft.webp',
                        headMult: headMult,
                        lengthMult: lengthMult,
                        shaftMult: shaftMult,
                        widthMult: widthMult,
                        circumference: 17.78, 
                        length: 23}} 
                        ppi={ppi} />
                    </div>
                </div>
                <div class="pl-5">
                    <VerticalRuler height={ppi/2.54} count={24} unit={'cm'} red={false} small={true}  />
                </div>
        </div>
        <div class="d-flex flex-row align-items-end mt-5">
            <div class="form-group col">
                <label for="headmult">Head Mult:</label>
                <input class="form-control" id="headmult" type="range" min="0.12" max="0.5" step="0.001" value={headMult} onInput={(e) => setHeadMult(Number(e.currentTarget.value))} />
                <label for="lengthmult">Length Mult:</label>
                <input class="form-control" id="lengthmult" type="range" min="0.12" max="0.5" step="0.001" value={lengthMult} onInput={(e) => setLengthMult(Number(e.currentTarget.value))} />
                <label for="shaftmult">Shaft Mult:</label>
                <input class="form-control" id="shaftmult" type="range" min="0.12" max="0.5" step="0.001" value={shaftMult} onInput={(e) => setShaftMult(Number(e.currentTarget.value))} />
                <label for="widthmult">Width Mult:</label>
                <input class="form-control" id="widthmult" type="range" min="0.12" max="1" step="0.001" value={widthMult} onInput={(e) => setWidthMult(Number(e.currentTarget.value))} />
            </div>
        </div>
    </div>
    </>
}
