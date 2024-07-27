import React from 'react';

interface ImageModel {
    // In centimeters
    imageTop: string
    imageMid: string
    imageBottom: string

    length: number
    circumference: number

    headMult: number
    lengthMult: number
    shaftMult: number

    widthMult: number
}

interface CalculatedImageProp {
    model: ImageModel
    ppi: number
}

export const CalculatedImage: React.FC<CalculatedImageProp> = ({model, ppi}) => {
    const width = ((model.circumference / Math.PI) * model.widthMult) * (ppi/2.54);
    const height = Math.floor(model.length * (ppi / 2.54));

    return (
        <div style={{marginLeft: '-200px'}}>
        <div style={{margin:0, display: 'flex', flexDirection: 'column'}}>
            <img  src={model.imageTop} height={height * model.headMult + 'px'} width={width + 'px'} />
            <img  src={model.imageMid} height={height * model.lengthMult + 'px'} width={width + 'px'} />
            <img  src={model.imageBottom} height={height * model.shaftMult + 'px'} width={width + 'px'} />
        </div>
        </div>
    )
}